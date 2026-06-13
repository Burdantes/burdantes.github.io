---
layout: page
title: Projects
permalink: /projects/
description:
nav_order: 3
nav: true
---

<style>
  .post-header .post-title {
    display: none;
  }

  .projects-page {
    --projects-ink: #24313f;
    --projects-muted: #5d6b76;
    --projects-line: rgba(36, 49, 63, 0.14);
    --projects-soft: #f7f9fb;
    --projects-teal: #0f766e;
    --projects-violet: #6f42c1;
    --projects-amber: #a15c12;
  }

  .projects-page a {
    text-decoration: none;
  }

  .container.mt-5::before {
    left: 0;
    right: 0;
  }

  .projects-heading {
    border-bottom: 1px solid var(--projects-line);
    margin-bottom: 1.75rem;
    padding-bottom: 1.25rem;
  }

  .projects-eyebrow,
  .project-kicker,
  .resource-type {
    color: var(--projects-teal);
    font-size: 0.74rem;
    font-weight: 500;
    letter-spacing: 0;
    margin: 0 0 0.45rem;
    text-transform: uppercase;
  }

  .projects-heading h1 {
    color: var(--projects-ink);
    font-size: 2.2rem;
    font-weight: 300;
    line-height: 1.15;
    margin: 0 0 0.65rem;
  }

  .projects-heading p:last-child,
  .project-section-heading p,
  .resource-card p,
  .project-thread p,
  .archive-note {
    color: var(--projects-muted);
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.65;
  }

  .projects-heading p:last-child {
    max-width: 44rem;
    margin: 0;
  }

  .resource-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    margin-bottom: 2.6rem;
  }

  .resource-card {
    background: linear-gradient(180deg, #ffffff 0%, var(--projects-soft) 100%);
    border: 1px solid var(--projects-line);
    border-radius: 8px;
    color: inherit;
    display: flex;
    flex-direction: column;
    min-height: 205px;
    padding: 1rem;
    transition: border-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
  }

  .resource-card:hover {
    border-color: rgba(15, 118, 110, 0.38);
    box-shadow: 0 10px 24px rgba(36, 49, 63, 0.08);
    text-decoration: none;
    transform: translateY(-2px);
  }

  .resource-meta {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.85rem;
  }

  .resource-type {
    margin: 0;
  }

  .resource-icon {
    align-items: center;
    background: rgba(111, 66, 193, 0.1);
    border: 1px solid rgba(111, 66, 193, 0.18);
    border-radius: 50%;
    color: var(--projects-violet);
    display: inline-flex;
    height: 2.2rem;
    justify-content: center;
    width: 2.2rem;
  }

  .resource-card h2 {
    color: var(--projects-ink);
    font-size: 1.16rem;
    font-weight: 400;
    line-height: 1.25;
    margin: 0 0 0.55rem;
  }

  .resource-card p {
    flex: 1;
    margin: 0 0 1rem;
  }

  .resource-action,
  .project-links a {
    color: var(--global-theme-color);
    font-size: 0.92rem;
    font-weight: 400;
  }

  .resource-action i {
    font-size: 0.78rem;
    margin-left: 0.25rem;
  }

  .project-section {
    border-top: 1px solid var(--projects-line);
    padding-top: 1.6rem;
  }

  .project-section-heading {
    align-items: end;
    display: grid;
    gap: 0.8rem;
    grid-template-columns: minmax(0, 0.7fr) minmax(14rem, 1fr);
    margin-bottom: 1rem;
  }

  .project-section-heading h2 {
    color: var(--projects-ink);
    font-size: 1.42rem;
    font-weight: 400;
    line-height: 1.25;
    margin: 0;
  }

  .project-section-heading p {
    margin: 0;
  }

  .project-thread-grid {
    display: grid;
    gap: 1rem;
  }

  .project-thread {
    background: #ffffff;
    border: 1px solid var(--projects-line);
    border-radius: 8px;
    display: grid;
    gap: 1rem;
    grid-template-columns: minmax(130px, 190px) minmax(0, 1fr);
    min-height: 150px;
    padding: 1rem;
  }

  .project-figure {
    align-items: center;
    background: var(--projects-soft);
    border: 1px solid rgba(36, 49, 63, 0.1);
    border-radius: 6px;
    display: flex;
    height: 128px;
    justify-content: center;
    overflow: hidden;
  }

  .project-figure img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .project-figure.contain img {
    height: calc(100% - 1rem);
    object-fit: contain;
    width: calc(100% - 1rem);
  }

  .project-kicker {
    color: var(--projects-amber);
    margin-bottom: 0.25rem;
  }

  .project-thread h3 {
    color: var(--projects-ink);
    font-size: 1.18rem;
    font-weight: 400;
    line-height: 1.28;
    margin: 0 0 0.45rem;
  }

  .project-thread p {
    margin: 0;
  }

  .project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem 1rem;
    margin-top: 0.75rem;
  }

  .project-links a {
    border-bottom: 1px solid rgba(181, 9, 172, 0.28);
    padding-bottom: 0.08rem;
  }

  .project-links a:hover {
    border-color: var(--global-theme-color);
  }

  .archive-note {
    background: var(--projects-soft);
    border: 1px solid var(--projects-line);
    border-radius: 8px;
    margin: 1.25rem 0 0;
    padding: 1rem;
  }

  .archive-note a {
    border-bottom: 1px solid rgba(181, 9, 172, 0.28);
    color: var(--global-theme-color);
  }

  html[data-theme='dark'] .projects-page {
    --projects-ink: var(--global-text-color);
    --projects-muted: var(--global-text-color-light);
    --projects-line: var(--global-divider-color);
    --projects-soft: rgba(255, 255, 255, 0.04);
    --projects-teal: #58d6c9;
    --projects-violet: #b99cff;
    --projects-amber: #e9b872;
  }

  html[data-theme='dark'] .resource-card,
  html[data-theme='dark'] .project-thread {
    background: var(--global-card-bg-color);
  }

  @media (max-width: 760px) {
    .projects-heading h1 {
      font-size: 1.9rem;
    }

    .project-section-heading,
    .project-thread {
      grid-template-columns: 1fr;
    }

    .project-figure {
      height: 165px;
    }
  }
</style>

<div class="projects-page">
  <header class="projects-heading">
    <p class="projects-eyebrow">Selected projects and resources</p>
    <h1>Projects</h1>
    <p>Interactive tools, public resources, and research threads around Internet measurement, topology, performance, and visualization.</p>
  </header>

  <section class="resource-grid" aria-label="Interactive resources">
    <a class="resource-card" href="http://136.116.232.100:5050/" target="_blank" rel="noopener noreferrer">
      <div class="resource-meta">
        <span class="resource-type">Live monitor</span>
        <span class="resource-icon"><i class="fas fa-heartbeat" aria-hidden="true"></i></span>
      </div>
      <h2>revTr Health Monitor</h2>
      <p>Live reverse-traceroute health across M-Lab physical sites, with quick visibility into probes and failures.</p>
      <span class="resource-action">Open dashboard <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
    </a>

    <a class="resource-card" href="/projects/starlink-speedtest/">
      <div class="resource-meta">
        <span class="resource-type">Dashboard</span>
        <span class="resource-icon"><i class="fas fa-satellite-dish" aria-hidden="true"></i></span>
      </div>
      <h2>Starlink Speedtest Comparison</h2>
      <p>Cloudflare and M-Lab speed-test comparisons across geography, destination, and ISP views.</p>
      <span class="resource-action">View project <i class="fas fa-arrow-right" aria-hidden="true"></i></span>
    </a>

    <a class="resource-card" href="/projects/hypergiants-evolution/">
      <div class="resource-meta">
        <span class="resource-type">Visualizations</span>
        <span class="resource-icon"><i class="fas fa-network-wired" aria-hidden="true"></i></span>
      </div>
      <h2>Hypergiants Evolution</h2>
      <p>CDN, IXP, facility, city, country, and continent views of hypergiant infrastructure growth.</p>
      <span class="resource-action">Explore views <i class="fas fa-arrow-right" aria-hidden="true"></i></span>
    </a>

    <a class="resource-card" href="/ive/">
      <div class="resource-meta">
        <span class="resource-type">Community</span>
        <span class="resource-icon"><i class="fas fa-chart-area" aria-hidden="true"></i></span>
      </div>
      <h2>Internet Visualization Exhibition</h2>
      <p>A venue for Internet structure, behavior, and evolution visualizations, co-organized with Paul Barford.</p>
      <span class="resource-action">Read more <i class="fas fa-arrow-right" aria-hidden="true"></i></span>
    </a>
  </section>

  <section class="project-section">
    <div class="project-section-heading">
      <h2>Research Threads</h2>
      <p>Representative projects behind the papers and public artifacts, grouped by the questions they help answer.</p>
    </div>

    <div class="project-thread-grid">
      <article class="project-thread">
        <a class="project-figure contain" href="/publications/">
          <img src="/assets/img/project_images/metascritic_fig.png" alt="MetAScritic topology inference figure">
        </a>
        <div>
          <p class="project-kicker">Internet measurement</p>
          <h3>AS-level topology inference</h3>
          <p>metAScritic reframes hidden interconnection discovery as a recommendation problem, measuring strategic links and inferring the rest.</p>
          <div class="project-links">
            <a href="/publications/">IMC'24 paper</a>
            <a href="/projects/archive/">Background</a>
          </div>
        </div>
      </article>

      <article class="project-thread">
        <a class="project-figure contain" href="/publications/">
          <img src="/assets/img/project_images/hermes_fig.png" alt="HERMES performance monitoring diagram">
        </a>
        <div>
          <p class="project-kicker">Performance diagnosis</p>
          <h3>Open Internet health monitoring</h3>
          <p>HERMES repurposes user-driven speed tests to detect performance degradations and localize where the problem likely begins.</p>
          <div class="project-links">
            <a href="/publications/">SIGCOMM'26 paper</a>
            <a href="/assets/pdf/hermes-nsdi-with_authors.pdf">PDF</a>
          </div>
        </div>
      </article>

      <article class="project-thread">
        <a class="project-figure" href="/publications/">
          <img src="/assets/img/project_images/manifold_with_colors.gif" alt="Animated manifold visualization of network latency">
        </a>
        <div>
          <p class="project-kicker">Geometric modeling</p>
          <h3>Manifold views of private backbones</h3>
          <p>Lightweight latency measurements and Riemannian geometry expose the hidden connectivity fabric of hyperscaler networks.</p>
          <div class="project-links">
            <a href="/publications/">CACM highlight</a>
            <a href="/projects/archive/">Project notes</a>
          </div>
        </div>
      </article>

      <article class="project-thread">
        <a class="project-figure contain" href="/publications/">
          <img src="/assets/img/project_images/apnic_fig.png" alt="APNIC validation comparison figure">
        </a>
        <div>
          <p class="project-kicker">Dataset validation</p>
          <h3>APNIC user-population estimates</h3>
          <p>Cross-validating APNIC per-AS estimates against independent baselines to understand where the dataset is reliable and where it is brittle.</p>
          <div class="project-links">
            <a href="/publications/">IMC'24 paper</a>
            <a href="/projects/archive/">Details</a>
          </div>
        </div>
      </article>

      <article class="project-thread">
        <a class="project-figure" href="/projects/archive/">
          <img src="/assets/img/project_images/geopolitic_fig.png" alt="Geopolitical Internet infrastructure visualization">
        </a>
        <div>
          <p class="project-kicker">Geopolitics</p>
          <h3>Routing, borders, and state control</h3>
          <p>BGP and routing-data studies of how political geography, conflict, and state policy shape Internet infrastructure.</p>
          <div class="project-links">
            <a href="/projects/archive/">Archive</a>
            <a href="/publications/">Related papers</a>
          </div>
        </div>
      </article>
    </div>

    <p class="archive-note">Long-form project descriptions are in the <a href="/projects/archive/">projects archive</a>. The complete paper list is on the <a href="/publications/">Publications</a> page.</p>
  </section>
</div>
