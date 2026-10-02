---
layout: page
title: Cloud Direct-Peering Maps
permalink: /projects/cloud-peering-maps/
description: Where Google Cloud, AWS and Microsoft Azure hand traffic to other networks, inferred from traceroutes run from inside each cloud.
nav: false
---

<style>
  .post-header .post-title {
    display: none;
  }

  .cpm {
    color: var(--global-text-color, #2c3e50);
  }

  /* The opening block fills the content column and is centred. */
  .cpm-head {
    max-width: none;
    margin: 0 auto 1.8rem;
    text-align: center;
  }

  .cpm-head h1 {
    border-bottom: 2px solid var(--global-text-color, #2c3e50);
    color: var(--global-text-color, #2c3e50);
    font-size: 2.2rem;
    font-weight: 300;
    line-height: 1.15;
    margin: 0 0 0.9rem;
    padding-bottom: 0.6rem;
  }

  .cpm-head p {
    color: var(--global-text-color-light, #555);
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.7;
    margin: 0 auto 0.6rem;
  }

  .cpm-maps {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0 0 2.4rem;
  }

  .cpm-card {
    border: 1px solid var(--global-divider-color, #e0e0e0);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 1.1rem 1.2rem 1rem;
  }

  .cpm-card h2 {
    color: var(--global-text-color, #2c3e50);
    font-size: 1.15rem;
    font-weight: 500;
    margin: 0;
  }

  .cpm-card .cpm-when {
    color: var(--global-text-color-light, #666);
    font-size: 0.9rem;
    margin: 0.2rem 0 0.8rem;
  }

  .cpm-stats {
    display: grid;
    gap: 0.4rem 0.8rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 0 0 0.8rem;
  }

  .cpm-stats div {
    display: flex;
    flex-direction: column;
  }

  .cpm-stats strong {
    font-size: 1.15rem;
    font-variant-numeric: tabular-nums;
    font-weight: 500;
  }

  .cpm-stats span {
    color: var(--global-text-color-light, #666);
    font-size: 0.75rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .cpm-card p {
    color: var(--global-text-color-light, #555);
    font-size: 0.92rem;
    line-height: 1.55;
    margin: 0 0 0.9rem;
  }

  .cpm-card a.cpm-open {
    color: var(--global-theme-color, #2c3e50);
    font-weight: 500;
    margin-top: auto;
    text-decoration: none;
  }

  .cpm-card a.cpm-open:hover {
    text-decoration: underline;
  }

  .cpm-section h2 {
    color: var(--global-text-color, #2c3e50);
    font-size: 1.35rem;
    font-weight: 400;
    margin: 0 0 0.7rem;
  }

  /* Section prose keeps a readable measure, left-aligned. */
  .cpm-section p,
  .cpm-section li {
    color: var(--global-text-color-light, #555);
    font-size: 1rem;
    line-height: 1.7;
    max-width: 70ch;
  }

  .cpm-section {
    margin: 0 0 2rem;
  }

  .cpm-section ul {
    padding-left: 1.2rem;
  }

  @media (max-width: 760px) {
    .cpm-head h1 {
      font-size: 1.9rem;
    }

    .cpm-maps {
      grid-template-columns: 1fr;
    }

    .cpm-stats {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>

<div class="cpm">
  <header class="cpm-head">
    <h1>Cloud Direct-Peering Maps</h1>
    <p>
      Where do Google Cloud, Amazon Web Services and Microsoft Azure hand traffic
      to other networks? Each map places the direct peers a cloud reaches from its
      own regions, city by city, as seen in traceroutes launched from inside that
      cloud toward the rest of the Internet.
    </p>
  </header>

  <section class="cpm-maps" aria-label="Maps">
    <article class="cpm-card">
      <h2>Google Cloud · IPv4 + IPv6</h2>
      <div class="cpm-when">September 2026 · 43 regions</div>
      <div class="cpm-stats">
        <div><strong>6,853</strong><span>peer ASNs</span></div>
        <div><strong>2,696</strong><span>cities</span></div>
        <div><strong>232</strong><span>IXPs</span></div>
        <div><strong>43</strong><span>regions</span></div>
      </div>
      <p>
        Both address families from the same 43 regions, with a filter to view
        either one and a side-by-side comparison: 5,365 neighbor ASNs over IPv4
        and 4,763 over IPv6, 3,275 of them seen over both. IPv4 used Google's
        Standard Tier and IPv6 its Premium Tier (see below), so the comparison
        is also one of routing tiers.
      </p>
      <a class="cpm-open" href="https://burdantes.github.io/cloud-peering-maps/gcp-2026-09-ipv4-ipv6.html" target="_blank" rel="noopener noreferrer">Open map →</a>
    </article>

    <article class="cpm-card">
      <h2>Google Cloud · IPv4</h2>
      <div class="cpm-when">August 2026 · 41 regions</div>
      <div class="cpm-stats">
        <div><strong>5,208</strong><span>peer ASNs</span></div>
        <div><strong>1,803</strong><span>cities</span></div>
        <div><strong>219</strong><span>IXPs</span></div>
        <div><strong>41</strong><span>regions</span></div>
      </div>
      <p>
        The previous month's IPv4 campaign, from a slightly different set of regions.
      </p>
      <a class="cpm-open" href="https://burdantes.github.io/cloud-peering-maps/gcp-2026-08-ipv4.html" target="_blank" rel="noopener noreferrer">Open map →</a>
    </article>

    <article class="cpm-card">
      <h2>Amazon Web Services · IPv4</h2>
      <div class="cpm-when">August 2026 · 27 regions</div>
      <div class="cpm-stats">
        <div><strong>3,434</strong><span>peer ASNs</span></div>
        <div><strong>3,126</strong><span>cities</span></div>
        <div><strong>119</strong><span>IXPs</span></div>
        <div><strong>27</strong><span>regions</span></div>
      </div>
      <p>
        AWS commercial regions, measured from one instance each.
      </p>
      <a class="cpm-open" href="https://burdantes.github.io/cloud-peering-maps/aws-2026-08-ipv4.html" target="_blank" rel="noopener noreferrer">Open map →</a>
    </article>

    <article class="cpm-card">
      <h2>Microsoft Azure · IPv4</h2>
      <div class="cpm-when">September 2026 · 20 regions</div>
      <div class="cpm-stats">
        <div><strong>4,649</strong><span>peer ASNs</span></div>
        <div><strong>3,629</strong><span>cities</span></div>
        <div><strong>215</strong><span>IXPs</span></div>
        <div><strong>20</strong><span>regions</span></div>
      </div>
      <p>
        A subset of Azure regions; the map covers those this campaign measured,
        not all of Azure.
      </p>
      <a class="cpm-open" href="https://burdantes.github.io/cloud-peering-maps/azure-2026-09-ipv4.html" target="_blank" rel="noopener noreferrer">Open map →</a>
    </article>
  </section>

  <section class="cpm-section">
    <h2>How the maps are built</h2>
    <ul>
      <li>
        From one virtual machine in each cloud region, <a href="https://www.caida.org/catalog/software/scamper/" target="_blank" rel="noopener noreferrer">scamper</a>
        runs ICMP-echo traceroutes to one address in every routed IPv4 /24 (about 12.2 million
        targets). For Google Cloud IPv6, it probes one address per announced
        IPv6 prefix (about 254,000 targets).
      </li>
      <li>
        Each hop is assigned to a network: if the address is a member port on
        an Internet exchange's peering LAN, the member's ASN; otherwise the
        origin AS of its covering prefix in RouteViews for the measurement date.
      </li>
      <li>
        What the maps count as a peer is, strictly, a <em>neighbor network</em>:
        the first network a path enters after leaving the cloud's own networks,
        seen at two consecutive responding hops. It may be a settlement-free
        peer, a transit provider, or a customer.
      </li>
      <li>
        Each peer interface is placed in a city using IPInfo geolocation and,
        where its router hostname encodes one, CAIDA HOIHO.
      </li>
    </ul>
  </section>

  <section class="cpm-section">
    <h2>Premium versus standard routing</h2>
    <p>
      Where a cloud hands outbound traffic to the rest of the Internet is partly
      a product choice. Two strategies bracket it: <em>cold-potato</em> routing
      carries traffic on the provider's own backbone as far as possible and
      hands it off near the destination, while <em>hot-potato</em> routing hands
      it off near the cloud region and lets other networks carry it the rest of
      the way. Which one a measurement used strongly shapes which neighbors and
      which interconnection cities a traceroute from that region can see.
    </p>
    <ul>
      <li>
        <strong>Google Cloud</strong> exposes the choice as
        <a href="https://docs.cloud.google.com/network-tiers/docs/overview" target="_blank" rel="noopener noreferrer">Network Service Tiers</a>.
        In the Premium Tier (the default), outbound traffic "typically routes
        over the Google global network to a point of presence that's as close
        as possible to the internet user". In the Standard Tier, it "is sent
        through a peering or transit network in a point of presence near the
        region". External IPv6 addresses are available only in the Premium Tier.
      </li>
      <li>
        <strong>Microsoft Azure</strong> exposes it as
        <a href="https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/routing-preference-overview" target="_blank" rel="noopener noreferrer">routing preference</a>
        on a public IP. The default, the Microsoft global network, is what
        Microsoft describes as cold potato: egress "exits closest to the user".
        The Internet option is its hot-potato counterpart: traffic "exits
        Microsoft network in the same region". It is
        IPv4-only and cannot be changed after the address is created.
      </li>
      <li>
        <strong>Amazon Web Services</strong> has no equivalent setting for an
        instance's Internet traffic, and we found no AWS documentation of where
        EC2 egress leaves its network.
        <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-how-it-works.html" target="_blank" rel="noopener noreferrer">Global Accelerator</a>
        brings <em>inbound</em> traffic onto the AWS backbone at an edge
        location, but does not change how an instance reaches the Internet.
      </li>
    </ul>
    <p>
      <strong>What these maps used.</strong> Google Cloud IPv4 was measured on
      the Standard Tier and Google Cloud IPv6 on the Premium Tier, because
      Google offers external IPv6 only there; every instance's tier was
      checked and recorded at launch. Azure public IPs used the default
      routing preference, the Microsoft global network. AWS instances used
      ordinary public addresses, with no option to set. So on the September
      Google Cloud map the IPv4-versus-IPv6 comparison also compares Standard
      with Premium routing, and the two cannot be separated from these data.
    </p>
    <p>
      Our data do not yet show the difference cleanly. IPv6 neighbor sets are
      more uniform across regions than IPv4 ones (a median overlap between two
      regions of 0.91 against 0.84; the least similar IPv4 pairs all involve
      Johannesburg). That is consistent with Premium routing, but the address
      family and the 50-fold difference in target count could produce it too.
      Geolocating the first neighbor's interface is too unreliable to say where
      the hand-off happens: the link is often numbered from the cloud's own
      addresses, so the first hop we attribute to the neighbor can lie deeper
      inside it, and transit backbones geolocate poorly. Round-trip times to
      the first neighbor, which do not depend on geolocation, are the next
      check. The clean test is the same address family from the same regions
      on both tiers, measured side by side, which we have not yet run.
    </p>
  </section>

  <section class="cpm-section">
    <h2>Reading them carefully</h2>
    <ul>
      <li>
        A neighbor appears only if some traceroute from the cloud crossed into
        it, so each map is roughly a lower bound on the provider's
        interconnection, seen in the cloud-to-Internet direction, though
        mapping errors can also add networks that are not true neighbors.
      </li>
      <li>
        Locations are where the neighbor's interface geolocates, which can
        differ from the facility where the interconnection physically happens.
        Router-interface geolocation is often wrong by hundreds of kilometres or
        more.
      </li>
      <li>
        The campaigns differ in date and in which regions were measured, and
        the IPv6 target set is one address per prefix rather than per /24, so
        compare counts across maps with that in mind.
      </li>
    </ul>
  </section>
</div>
