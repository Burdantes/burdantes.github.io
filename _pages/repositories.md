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

  .container.mt-5::before {
    left: 0;
    right: 0;
  }

  .projects-page {
    color: var(--global-text-color, #2c3e50);
  }

  .projects-page a {
    color: var(--global-theme-color, #2c3e50);
    text-decoration: none;
  }

  .projects-page a:hover {
    text-decoration: underline;
  }

  .projects-intro {
    border-bottom: 1px solid var(--global-divider-color, #e0e0e0);
    margin-bottom: 1.4rem;
    padding-bottom: 1.15rem;
  }

  .projects-intro h1 {
    color: var(--global-text-color, #2c3e50);
    font-size: 2.15rem;
    font-weight: 300;
    line-height: 1.15;
    margin: 0 0 0.75rem;
  }

  .projects-intro p {
    color: var(--global-text-color-light, #555);
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.7;
    margin: 0;
    max-width: 42rem;
  }

  .projects-section {
    margin-top: 1.7rem;
  }

  .projects-section h2 {
    border-bottom: 1px solid var(--global-divider-color, #e0e0e0);
    color: var(--global-text-color, #2c3e50);
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
    padding-bottom: 0.6rem;
  }

  .project-row {
    border-bottom: 1px solid var(--global-divider-color, #e0e0e0);
    display: grid;
    gap: 1rem;
    grid-template-columns: 11rem minmax(0, 1fr);
    padding: 0.9rem 0;
  }

  .project-row h3 {
    color: var(--global-text-color, #2c3e50);
    font-size: 1.04rem;
    font-weight: 400;
    line-height: 1.35;
    margin: 0;
  }

  .project-row p {
    color: var(--global-text-color-light, #555);
    font-size: 0.98rem;
    font-weight: 300;
    line-height: 1.65;
    margin: 0.35rem 0 0;
  }

  .project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 0.9rem;
    margin-top: 0.55rem;
  }

  .project-links a {
    font-size: 0.92rem;
    font-weight: 400;
  }

  .project-thumb {
    align-items: center;
    border: 1px solid var(--global-divider-color, #e0e0e0);
    display: flex;
    height: 6.5rem;
    justify-content: center;
    overflow: hidden;
  }

  .project-thumb img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .project-thumb.contain img {
    height: calc(100% - 1rem);
    object-fit: contain;
    width: calc(100% - 1rem);
  }

  .project-note {
    color: var(--global-text-color-light, #555);
    font-size: 0.94rem;
    font-weight: 300;
    line-height: 1.6;
    margin: 1.1rem 0 0;
  }

  @media (max-width: 760px) {
    .projects-intro h1 {
      font-size: 1.9rem;
    }

    .project-row {
      grid-template-columns: 1fr;
    }

    .project-thumb {
      height: 10rem;
    }
  }
</style>

<div class="projects-page">
  <header class="projects-intro">
    <h1>Projects</h1>
    <p>Selected tools, visualizations, and research threads around Internet measurement, topology, performance, and infrastructure.</p>
  </header>

  <section class="projects-section">
    <h2>Tools and resources</h2>

    <article class="project-row">
      <h3>revTr Health Monitor</h3>
      <div>
        <p>Live reverse-traceroute health across M-Lab physical sites.</p>
        <div class="project-links">
          <a href="http://136.116.232.100:5050/" target="_blank" rel="noopener noreferrer">Dashboard</a>
          <a href="https://www.measurementlab.net/blog/revtr_tutorial/" target="_blank" rel="noopener noreferrer">M-Lab tutorial</a>
        </div>
      </div>
    </article>

    <article class="project-row">
      <h3>M-Lab Global Comparison</h3>
      <div>
        <p>Built from M-Lab's public NDT speed tests and traceroute data, this dashboard compares Internet performance to Google Cloud virtual servers and physical M-Lab measurement servers worldwide, with latency and traceroute-path views refreshed monthly.</p>
        <div class="project-links">
          <a href="http://34.27.164.235:5055/" target="_blank" rel="noopener noreferrer">Dashboard</a>
        </div>
      </div>
    </article>

    <article class="project-row">
      <h3>Starlink Speedtest Comparison</h3>
      <div>
        <p>Cloudflare and M-Lab speed-test comparisons by geography, destination, and ISP.</p>
        <div class="project-links">
          <a href="/projects/starlink-speedtest/">Project page</a>
          <a href="https://github.com/Burdantes/starlink_speedtest_comparison" target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      </div>
    </article>

    <article class="project-row">
      <h3>Hypergiants Evolution</h3>
      <div>
        <p>Interactive views of CDN, IXP, facility, city, country, and continent-level hypergiant infrastructure growth.</p>
        <div class="project-links">
          <a href="/projects/hypergiants-evolution/">Visualizations</a>
          <a href="https://pulse.internetsociety.org/en/blog/2025/04/how-cloud-edge-infrastructure-improves-network-performance-in-europe/" target="_blank" rel="noopener noreferrer">ISOC Pulse post</a>
        </div>
      </div>
    </article>

    <article class="project-row">
      <h3>Internet Visualization Exhibition</h3>
      <div>
        <p>A venue for Internet structure, behavior, and evolution visualizations, co-organized with Paul Barford.</p>
        <div class="project-links">
          <a href="/ive/">Details</a>
          <a href="https://pulse.internetsociety.org/en/blog/2025/12/seeing-the-unseen-internet-lessons-from-the-internet-visualization-exhibition/" target="_blank" rel="noopener noreferrer">ISOC Pulse write-up</a>
        </div>
      </div>
    </article>
  </section>

  <section class="projects-section">
    <h2>Research threads</h2>

    <article class="project-row">
      <a class="project-thumb contain" href="/publications/">
        <img src="/assets/img/project_images/metascritic_fig.png" alt="MetAScritic topology inference figure">
      </a>
      <div>
        <h3>AS-level topology inference</h3>
        <p>metAScritic treats hidden interconnection discovery as a recommendation problem: measure a small set of strategic links, infer the rest.</p>
        <div class="project-links">
          <a href="/publications/">IMC'24 paper</a>
          <a href="/projects/archive/">Background</a>
        </div>
      </div>
    </article>

    <article class="project-row">
      <a class="project-thumb contain" href="/publications/">
        <img src="/assets/img/project_images/hermes_fig.png" alt="HERMES performance monitoring diagram">
      </a>
      <div>
        <h3>Open Internet health monitoring</h3>
        <p>HERMES repurposes user-driven speed tests to detect performance degradations and localize where problems likely begin.</p>
        <div class="project-links">
          <a href="/publications/">SIGCOMM'26 paper</a>
          <a href="/assets/pdf/hermes-sigcomm.pdf">PDF</a>
        </div>
      </div>
    </article>

    <article class="project-row">
      <a class="project-thumb" href="/publications/">
        <img src="/assets/img/project_images/manifold_with_colors.gif" alt="Animated manifold visualization of network latency">
      </a>
      <div>
        <h3>Manifold views of private backbones</h3>
        <p>Lightweight latency measurements and Riemannian geometry expose hidden structure in hyperscaler connectivity.</p>
        <div class="project-links">
          <a href="/publications/">CACM highlight</a>
          <a href="/projects/archive/">Project notes</a>
        </div>
      </div>
    </article>

    <article class="project-row">
      <a class="project-thumb contain" href="/publications/">
        <img src="/assets/img/project_images/apnic_fig.png" alt="APNIC validation comparison figure">
      </a>
      <div>
        <h3>APNIC user-population estimates</h3>
        <p>Cross-validating APNIC per-AS estimates against independent baselines to understand where the dataset is reliable.</p>
        <div class="project-links">
          <a href="/publications/">IMC'24 paper</a>
          <a href="/projects/archive/">Details</a>
        </div>
      </div>
    </article>

    <article class="project-row">
      <a class="project-thumb" href="/projects/archive/">
        <img src="/assets/img/project_images/geopolitic_fig.png" alt="Geopolitical Internet infrastructure visualization">
      </a>
      <div>
        <h3>Routing, borders, and state control</h3>
        <p>BGP and routing-data studies of how political geography, conflict, and state policy shape Internet infrastructure.</p>
        <div class="project-links">
          <a href="/projects/archive/">Archive</a>
          <a href="/publications/">Related papers</a>
        </div>
      </div>
    </article>

    <p class="project-note">Long-form project descriptions are in the <a href="/projects/archive/">projects archive</a>. The complete paper list is on the <a href="/publications/">Publications</a> page.</p>
  </section>
</div>
