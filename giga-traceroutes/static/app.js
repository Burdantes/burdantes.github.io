"use strict";

const controls = document.querySelector(".controls");
const cc = controls.dataset.cc;
// URL prefix when served under a sub-path (static export); "" for the live app.
const base = controls.dataset.base || "";
const months = JSON.parse(document.getElementById("months-data").textContent);
const initialView = JSON.parse(document.getElementById("initial-view").textContent);

const timelineEl = document.getElementById("timeline");
const rangeSelector = document.getElementById("range-selector");
const sectionsEl = document.getElementById("sections");
const securityPanel = document.getElementById("security-panel");
const downloadEl = document.getElementById("dataset-download");

let currentMonthIndex = months.length ? months.length - 1 : 0;
let requestSeq = 0;

// Typeset any TeX ($…$, \(…\), $$…$$) in freshly-injected HTML. KaTeX loads
// deferred, so this is a no-op until it's ready (initial paint re-runs on load).
// External links (AS Rank, PeeringDB, …) open in a new tab.
function decorateLinks(el) {
  el.querySelectorAll('a[href^="http"]').forEach((a) => {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
}

// ── Server info popups ────────────────────────────────────────────
// Site -> {city, country, lat, lon, metro, asn, org, peeringdb}. Loaded once;
// server codes in the report tables become clickable, opening a detail card.
let serversData = {};
fetch(`${base}/static/servers.json`)
  .then((r) => (r.ok ? r.json() : {}))
  .then((d) => { serversData = d; enhanceServers(sectionsEl); })
  .catch(() => {});

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// Turn a table cell whose first token is a known site code into a button.
function enhanceServers(el) {
  if (!el || !Object.keys(serversData).length) return;
  el.querySelectorAll("td").forEach((td) => {
    if (td.dataset.srv || td.querySelector("a, button")) return;
    const text = td.textContent.trim();
    const tok = text.split(/\s+/)[0];
    if (!serversData[tok]) return;
    td.dataset.srv = "1";
    const rest = text.slice(tok.length);
    const btn = document.createElement("button");
    btn.className = "server-link";
    btn.textContent = tok;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      showServerPopup(tok, btn);
    });
    td.textContent = "";
    td.appendChild(btn);
    if (rest) td.appendChild(document.createTextNode(rest));
  });
}

function closeServerPopup() {
  const p = document.querySelector(".server-popup");
  if (p) p.remove();
}

function showServerPopup(site, anchor) {
  const s = serversData[site];
  closeServerPopup();
  const loc = [s.city, s.country].filter(Boolean).join(", ") || "unknown";
  const coords = (s.lat != null && s.lon != null) ? ` (${s.lat}, ${s.lon})` : "";
  const metro = s.metro ? ` · metro ${esc(s.metro)}` : "";
  const host = s.asn
    ? `<a href="https://asrank.caida.org/asns/${s.asn}" target="_blank" rel="noopener">AS${s.asn}</a>`
      + (s.org ? ` · ${esc(s.org)}` : "")
    : "unknown";
  const pdb = s.peeringdb
    ? `<dt>PeeringDB</dt><dd><a href="https://www.peeringdb.com/search?q=${encodeURIComponent(s.peeringdb)}" target="_blank" rel="noopener">${esc(s.peeringdb)}</a></dd>`
    : "";
  const card = document.createElement("div");
  card.className = "server-popup";
  card.innerHTML =
    `<div class="sp-head"><span class="sp-site">${esc(site)}</span>`
    + `<button class="sp-close" aria-label="Close">×</button></div>`
    + `<dl><dt>Location</dt><dd>${esc(loc)}<span class="sp-dim">${esc(coords)}${metro}</span></dd>`
    + `<dt>Hosting network</dt><dd>${host}</dd>${pdb}</dl>`;
  document.body.appendChild(card);
  const r = anchor.getBoundingClientRect();
  card.style.top = `${window.scrollY + r.bottom + 6}px`;
  let left = window.scrollX + r.left;
  const cw = card.getBoundingClientRect().width;
  if (left + cw > window.scrollX + window.innerWidth - 8) {
    left = window.scrollX + window.innerWidth - cw - 8;
  }
  card.style.left = `${Math.max(8, left)}px`;
  card.querySelector(".sp-close").addEventListener("click", closeServerPopup);
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".server-popup") && !e.target.closest(".server-link")) {
    closeServerPopup();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeServerPopup();
});

function typesetMath(el) {
  if (!window.renderMathInElement) return;
  try {
    window.renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  } catch (e) { /* leave raw text on error */ }
}

// Show/hide the "download raw parquet" bar for the selected period.
function renderDownload(dl) {
  if (!downloadEl) return;
  if (!dl || !dl.url) {
    downloadEl.hidden = true;
    downloadEl.innerHTML = "";
    return;
  }
  const size = dl.size ? ` · ${esc(dl.size)}` : "";
  downloadEl.hidden = false;
  downloadEl.innerHTML =
    `<a class="download-btn" href="${esc(dl.url)}" download>`
    + `<span class="dl-icon" aria-hidden="true">↓</span> Download raw data`
    + `<span class="dl-file">${esc(dl.filename)}${size}</span></a>`
    + `<span class="download-note">Parquet of the measurements used to `
    + `generate this period's report.</span>`;
}

function renderSections(view) {
  sectionsEl.hidden = false;
  securityPanel.hidden = true;
  renderDownload(view.download);
  sectionsEl.innerHTML = "";
  view.sections.forEach((sec, i) => {
    const wrap = document.createElement("section");
    wrap.className = "analysis";
    wrap.style.setProperty("--i", String(i));

    const head = document.createElement("div");
    head.className = "analysis-head";
    const num = document.createElement("span");
    num.className = "analysis-num";
    num.textContent = String(i + 1).padStart(2, "0");
    const h = document.createElement("h2");
    h.textContent = sec.title;
    head.appendChild(num);
    head.appendChild(h);
    wrap.appendChild(head);

    if (sec.blurb) {
      const b = document.createElement("p");
      b.className = "analysis-blurb";
      b.textContent = sec.blurb;
      wrap.appendChild(b);
    }
    if (sec.narrative_html) {
      const nar = document.createElement("div");
      nar.className = "narrative";
      nar.innerHTML = sec.narrative_html;
      wrap.appendChild(nar);
    }
    if (sec.plots && sec.plots.length) {
      wrap.appendChild(buildPlotToggle(sec.plots));
    } else if (!sec.narrative_html) {
      const empty = document.createElement("p");
      empty.className = "analysis-empty";
      empty.textContent = "No output for this period.";
      wrap.appendChild(empty);
    }
    sectionsEl.appendChild(wrap);
  });
  typesetMath(sectionsEl);
  decorateLinks(sectionsEl);
  enhanceServers(sectionsEl);
}

function buildPlotToggle(plots) {
  const details = document.createElement("details");
  details.className = "plots";
  const summary = document.createElement("summary");
  summary.textContent = `Show plots (${plots.length})`;
  details.appendChild(summary);
  const holder = document.createElement("div");
  holder.className = "plot-holder";
  details.appendChild(holder);
  // lazy: build iframes only on first expand (files are 4-5 MB each)
  details.addEventListener("toggle", () => {
    if (details.open && !holder.dataset.loaded) {
      for (const url of plots) {
        const frame = document.createElement("iframe");
        frame.src = url;
        frame.className = "plot-frame";
        holder.appendChild(frame);
      }
      holder.dataset.loaded = "1";
    }
  });
  return details;
}

async function loadPeriod(periodKey) {
  const seq = ++requestSeq;
  const resp = await fetch(`${base}/api/country/${cc}/${encodeURIComponent(periodKey)}.json`);
  if (seq !== requestSeq) return;
  if (!resp.ok) return;
  renderSections(await resp.json());
}

function renderRangeSelector(month) {
  rangeSelector.innerHTML = "";
  if (!month.ranges.length) return;
  const opts = [{ key: month.key, label: "full" }, ...month.ranges];
  for (const opt of opts) {
    const btn = document.createElement("button");
    btn.className = "range-btn";
    btn.textContent = opt.label;
    btn.addEventListener("click", () => {
      rangeSelector.querySelectorAll(".range-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      loadPeriod(opt.key);
    });
    rangeSelector.appendChild(btn);
  }
  rangeSelector.firstChild.classList.add("active");
}

function setActiveMonthNode(index) {
  timelineEl.querySelectorAll(".tl-node").forEach((n, i) => {
    n.classList.toggle("active", i === index);
    n.setAttribute("aria-selected", i === index ? "true" : "false");
  });
}

// Historical timeline: one labelled, clickable stop per available month,
// dates visible up front. The active month is filled.
function buildTimeline() {
  timelineEl.innerHTML = "";
  months.forEach((m, i) => {
    const node = document.createElement("button");
    node.type = "button";
    node.className = "tl-node";
    node.setAttribute("role", "tab");
    node.innerHTML =
      `<span class="tl-dot"></span><span class="tl-label">${m.label}</span>`;
    node.addEventListener("click", () => {
      controls.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
      const monthly = controls.querySelector('.tab[data-tab="monthly"]');
      if (monthly) monthly.classList.add("active");
      selectMonth(i);
    });
    timelineEl.appendChild(node);
  });
}

function selectMonth(index) {
  if (!months.length) return;
  currentMonthIndex = index;
  const month = months[index];
  setActiveMonthNode(index);
  renderRangeSelector(month);
  loadPeriod(month.key);
}

controls.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    controls.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const kind = tab.dataset.tab;
    if (kind === "monthly") {
      selectMonth(currentMonthIndex);
    } else if (kind === "special") {
      setActiveMonthNode(-1);  // no single month selected in a cross-period view
      rangeSelector.innerHTML = "";
      loadPeriod(tab.dataset.period);
    } else if (kind === "security") {
      setActiveMonthNode(-1);
      rangeSelector.innerHTML = "";
      loadSecurity();
    }
  });
});

async function loadSecurity() {
  const seq = ++requestSeq;
  sectionsEl.hidden = true;
  renderDownload(null);  // security view has no per-period raw parquet
  securityPanel.hidden = false;
  const resp = await fetch(`${base}/api/security/${cc}.json`);
  if (seq !== requestSeq) return;
  securityPanel.innerHTML = resp.ok
    ? (await resp.json()).html
    : "<p>No security report for this country.</p>";
  typesetMath(securityPanel);
  decorateLinks(securityPanel);
}

// initial paint from the embedded default-period view
if (months.length) {
  buildTimeline();
  setActiveMonthNode(currentMonthIndex);
  renderRangeSelector(months[currentMonthIndex]);
}
renderSections(initialView);

// KaTeX is deferred, so it isn't ready during the initial renderSections above;
// typeset the first paint once the document (and deferred scripts) have loaded.
window.addEventListener("DOMContentLoaded", () => typesetMath(sectionsEl));
