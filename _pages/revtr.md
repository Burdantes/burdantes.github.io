---
layout: page
title: RevTr Animated Explanation
permalink: /projects/revtr/
description: Interactive scenarios explaining how RevTr reconstructs reverse Internet paths.
nav: false
---

<style>
  .post-header .post-title {
    display: none;
  }

  .revtr-project {
    color: var(--global-text-color, #2c3e50);
  }

  .revtr-project h1 {
    border-bottom: 2px solid var(--global-text-color, #2c3e50);
    color: var(--global-text-color, #2c3e50);
    font-size: 2.2rem;
    font-weight: 300;
    line-height: 1.15;
    margin: 0 0 0.75rem;
    padding-bottom: 0.6rem;
  }

  .revtr-project p {
    color: var(--global-text-color-light, #555);
    font-size: 1.02rem;
    font-weight: 300;
    line-height: 1.7;
    margin: 0;
    max-width: 52rem;
  }

  .revtr-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem 1rem;
    margin: 1.15rem 0 1.4rem;
  }

  .revtr-actions a {
    color: var(--global-theme-color, #2c3e50);
    font-size: 0.95rem;
    font-weight: 400;
    text-decoration: none;
  }

  .revtr-actions a:hover {
    text-decoration: underline;
  }

  .revtr-animation-frame {
    border: 1px solid var(--global-divider-color, #e0e0e0);
    margin-top: 1.4rem;
    overflow: hidden;
  }

  .revtr-animation-frame iframe {
    border: 0;
    display: block;
    min-height: 1180px;
    width: 100%;
  }

  @media (max-width: 760px) {
    .revtr-project h1 {
      font-size: 1.9rem;
    }

    .revtr-animation-frame iframe {
      min-height: 1300px;
    }
  }
</style>

<div class="revtr-project">
  <h1>RevTr Animated Explanation</h1>
  <p>
    RevTr reconstructs reverse Internet paths by combining directly measured
    Record Route hops, spoofed probes, a traceroute atlas, and alias-resolution
    evidence. These scenarios walk through the core measurement ideas and the
    cases where RevTr must preserve ambiguity instead of inventing certainty.
  </p>

  <div class="revtr-actions">
    <a href="/assets/revtr/revtr_scenarios.html" target="_blank" rel="noopener noreferrer">Open full animation</a>
    <a href="http://136.116.232.100:5050/" target="_blank" rel="noopener noreferrer">Health dashboard</a>
    <a href="https://www.measurementlab.net/blog/revtr_tutorial/" target="_blank" rel="noopener noreferrer">M-Lab tutorial</a>
  </div>

  <div class="revtr-animation-frame">
    <iframe
      id="revtrAnimation"
      src="/assets/revtr/revtr_scenarios.html"
      title="RevTr animated explanation"
      loading="lazy">
    </iframe>
  </div>
</div>

<script>
  (function resizeRevtrAnimation() {
    var frame = document.getElementById("revtrAnimation");
    if (!frame) return;

    function resize() {
      try {
        var doc = frame.contentDocument || frame.contentWindow.document;
        var height = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
        frame.style.height = height + "px";
      } catch (error) {
        frame.style.height = "1280px";
      }
    }

    frame.addEventListener("load", resize);
    window.addEventListener("resize", resize);
  })();
</script>
