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

  /* All text fills the content column, like the cards above it. */
  .cpm-section p,
  .cpm-section li {
    color: var(--global-text-color-light, #555);
    font-size: 1rem;
    line-height: 1.7;
    max-width: none;
  }

  .cpm-section {
    margin: 0 0 2rem;
  }

  .cpm-section ul {
    padding-left: 1.2rem;
  }

  /* Tables fill the column too; narrow screens scroll the table, not the page. */
  .cpm-tablewrap {
    margin: 0 0 1.2rem;
    overflow-x: auto;
  }

  .cpm .cpm-table {
    border: 0;
    border-collapse: collapse;
    font-size: 0.92rem;
    width: 100%;
  }

  /* .cpm prefix outranks the theme's own table padding and borders. */
  .cpm .cpm-table th,
  .cpm .cpm-table td {
    border: 0;
    border-bottom: 1px solid var(--global-divider-color, #ddd);
    padding: 0.35rem 0.6rem;
    text-align: left;
    white-space: nowrap;
  }

  .cpm .cpm-table th {
    white-space: normal;
    color: var(--global-text-color, #2c3e50);
    font-weight: 600;
  }

  .cpm-table td {
    color: var(--global-text-color-light, #555);
  }

  /* Long row labels wrap so the numeric columns keep the full width. */
  .cpm .cpm-table td:first-child {
    white-space: normal;
  }

  .cpm .cpm-table .num {
    font-variant-numeric: tabular-nums;
    text-align: right;
  }

  .cpm-table .cpm-muted {
    font-style: italic;
  }

  .cpm-section p.cpm-provenance {
    font-size: 0.88rem;
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
      <h2>Google Cloud · IPv4</h2>
      <div class="cpm-when">March 2026 · 42 regions, 125 zones</div>
      <div class="cpm-stats">
        <div><strong>5,879</strong><span>peer ASNs</span></div>
        <div><strong>3,351</strong><span>cities</span></div>
        <div><strong>178</strong><span>IXPs</span></div>
        <div><strong>125</strong><span>zones</span></div>
      </div>
      <p>
        An earlier campaign with a different design: three zones per region,
        44-byte probes, the <code>.1</code> address of each /24 as target, an
        unrecorded network tier and older IXP membership lists. Its counts are
        not directly comparable with the other maps.
      </p>
      <a class="cpm-open" href="https://burdantes.github.io/cloud-peering-maps/gcp-2026-03-ipv4.html" target="_blank" rel="noopener noreferrer">Open map →</a>
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

<!-- trend:start -->
  <section class="cpm-section">
    <h2>Since 2020</h2>
    <p>
      In 2020, Arnold et al. (<a href="https://doi.org/10.1145/3419394.3423613" target="_blank" rel="noopener noreferrer">Cloud Provider Connectivity in the Flat Internet</a>, IMC 2020)
      counted the networks four clouds connect to, using traceroutes from inside each cloud. The table sets
      their neighbor sets beside these campaigns, counted the same way: distinct neighbor ASNs over all
      vantage points, and the organizations behind them (CAIDA AS-to-organization tables, with the cloud's
      own organization excluded).
    </p>
    <div class="cpm-tablewrap"><table class="cpm-table">
      <thead><tr><th>Cloud</th><th>2020 ASNs</th><th>Campaign</th><th>ASNs</th><th>Organizations</th><th>Vantage points</th><th>vs 2020</th></tr></thead>
      <tbody><tr><td>Google Cloud</td><td class="num">7,553</td><td>2023</td><td class="num">9,240</td><td class="num">8,765</td><td>115 zones</td><td class="num">1.22×</td></tr><tr><td></td><td class="num"></td><td>Mar 2026</td><td class="num">5,879</td><td class="num">5,580</td><td>125 zones</td><td class="num">0.78×</td></tr><tr><td></td><td class="num"></td><td>Aug 2026</td><td class="num">5,208</td><td class="num">4,983</td><td>41 regions</td><td class="num">0.69×</td></tr><tr><td></td><td class="num"></td><td>Sep 2026</td><td class="num">5,365</td><td class="num">5,130</td><td>43 regions</td><td class="num">0.71×</td></tr><tr><td>Microsoft Azure</td><td class="num">3,564</td><td>Sep 2026</td><td class="num">4,649</td><td class="num">4,382</td><td>20 regions</td><td class="num">1.30×</td></tr><tr><td>Amazon Web Services</td><td class="num">1,188</td><td>Aug 2026</td><td class="num">3,434</td><td class="num">3,239</td><td>27 regions</td><td class="num">2.89×</td></tr><tr><td>IBM Cloud</td><td class="num">2,746</td><td colspan="5" class="cpm-muted">no 2026 campaign</td></tr></tbody>
    </table></div>
    <p>
      Google Cloud's 2026 counts are below its 2020 figure and its 2023 count is above it; Microsoft's is about a third higher and Amazon's is
      close to three times larger. These are not like-for-like measurements: vantage points, target lists
      and probing differ between 2020 and 2026, and between campaigns, so the ratios are not growth or
      decline rates. For Google Cloud in particular, the BGP view below moves far less over the same years
      (-9%) than the traceroute count does.
    </p>
    <p>
      <strong>Turnover.</strong> Counted as organizations through one reference table, the
      2020 and 2026 sets overlap only partly:
    </p>
    <div class="cpm-tablewrap"><table class="cpm-table">
      <thead><tr><th>Cloud</th><th>2020 orgs</th><th>Still there</th><th>Gone</th><th>New</th><th>Retained</th></tr></thead>
      <tbody><tr><td>Google Cloud</td><td class="num">6,940</td><td class="num">2,897</td><td class="num">4,043</td><td class="num">2,233</td><td class="num">41.7%</td></tr><tr><td>Microsoft Azure</td><td class="num">3,264</td><td class="num">2,237</td><td class="num">1,027</td><td class="num">2,145</td><td class="num">68.5%</td></tr><tr><td>Amazon Web Services</td><td class="num">1,122</td><td class="num">483</td><td class="num">639</td><td class="num">2,740</td><td class="num">43.0%</td></tr></tbody>
    </table></div>
    <p>
      Google Cloud's September 2026 set retains 41.7% of the 2020
      organizations, 41.7% of those in a 2023 Google run, and
      41.5% of that run's non-IXP set: three reference sets,
      collected in different years with different tooling, agree within a point on how much survives.
    </p>
  </section>

  <section class="cpm-section">
    <h2>Most of it happens at exchanges</h2>
    <p>
      A link counts as an IXP link when either end is a listed member port of an exchange's peering LAN;
      everything else is counted as private interconnection (PNI). Each neighbor is placed by exchange
      name where it meets the cloud on a fabric, and by the city encoded in its router hostname where
      it does not.
    </p>
    <div class="cpm-tablewrap"><table class="cpm-table">
      <thead><tr><th>Campaign</th><th>Neighbor ASNs</th><th>Only at an IXP</th><th>At an IXP</th><th>Via PNI</th><th>Both</th><th>Placed</th><th>Placed in several</th></tr></thead>
      <tbody><tr><td>Google Cloud, Sep 2026</td><td class="num">5,365</td><td class="num">53.2%</td><td class="num">3,465</td><td class="num">2,510</td><td class="num">610</td><td class="num">66.0%</td><td class="num">25.9%</td></tr><tr><td>Google Cloud, Aug 2026</td><td class="num">5,208</td><td class="num">55.0%</td><td class="num">3,439</td><td class="num">2,343</td><td class="num">574</td><td class="num">67.5%</td><td class="num">26.6%</td></tr><tr><td>Microsoft Azure, Sep 2026</td><td class="num">4,649</td><td class="num">57.4%</td><td class="num">3,510</td><td class="num">1,981</td><td class="num">842</td><td class="num">76.2%</td><td class="num">31.2%</td></tr><tr><td>Amazon Web Services, Aug 2026</td><td class="num">3,434</td><td class="num">54.6%</td><td class="num">2,147</td><td class="num">1,560</td><td class="num">273</td><td class="num">64.2%</td><td class="num">26.2%</td></tr><tr><td>Google Cloud IPv6, Sep 2026</td><td class="num">4,763</td><td class="num">35.0%</td><td class="num">2,186</td><td class="num">3,094</td><td class="num">517</td><td class="num">46.5%</td><td class="num">24.1%</td></tr><tr><td>Google Cloud, Mar 2026</td><td class="num">5,879</td><td class="num">29.3%</td><td class="num">3,045</td><td class="num">4,154</td><td class="num">1,320</td><td class="num">53.0%</td><td class="num">20.9%</td></tr><tr><td>Google Cloud, 2023, as recorded</td><td class="num">9,240</td><td class="num">37.3%</td><td class="num">5,903</td><td class="num">5,797</td><td class="num">2,460</td><td class="num">65.2%</td><td class="num">25.1%</td></tr><tr><td>Google Cloud, 2023, relabelled IXP-first</td><td class="num">9,974</td><td class="num">41.9%</td><td class="num">7,121</td><td class="num">5,797</td><td class="num">2,944</td><td class="num">72.6%</td><td class="num">23.4%</td></tr></tbody>
    </table></div>
    <p>
      Across the three clouds' IPv4 campaigns, between 53.2% and 57.4% of
      neighbors are reached only across an exchange; on this measure the three clouds are close. These
      shares are floors, since a peering-LAN address missing from the membership lists counts as private.
      Two rows are not comparable to the others: the Google Cloud IPv6 set uses a different address family,
      target list and routing tier, and the March campaign used an older membership list and a different
      target list. Nor are the two 2023 rows, which come from a 2023 run with its own target list and
      the June 2023 membership list: one keeps the neighbor that run recorded, the other relabels its
      links with the 2026 rule (a listed member port's ASN wins), which is as close to the 2026 method as
      its stored links allow. Microsoft's neighbors are the most often seen in several places: 31.2%
      of its placed neighbors meet it in more than one place, against about a quarter for the others.
      Placement leans on exchange membership; private interconnects are placed only when a router
      hostname names a city, so that side is close to unmeasured.
    </p>
    <p>
      <strong>2023 against 2026.</strong> Google Cloud's share of neighbors reached only at an exchange is
      37.3% in 2023 as recorded, or 41.9% relabelled, against
      53.2% in September 2026. The membership lists, target lists and link
      selection all differ, so this gap is not by itself evidence of a shift toward exchanges. The
      share of placed neighbors seen in several places moves much less: 25.1%
      in 2023 as recorded and 25.9% in September 2026.
      Neighbors seen both at an exchange and over a private link are 26.6% of the 2023
      set but 11.4% in September 2026. Keeping one zone per region barely moves the 2023
      figure (26.7%–26.9%), so fewer vantage points do not explain the difference;
      what does is not established here.
    </p>
    <p>
      <strong>How much do extra vantage points add?</strong> The March campaign probed from three zones
      in each of 42 regions. Keeping one random zone per region keeps
      96.6% of the neighbor ASNs (96.0%–97.2% over
      20 draws) but only about 34% of the links, and
      the share placed in several locations barely moves (20.4%–20.8%, against
      20.9% with all zones). Neighbor counts survive
      single-zone probing nearly intact; link-level counts do not. The 2023 run, which probed from
      115 zones in 38 regions, agrees independently: one zone per region keeps
      96.4%–96.8% of its neighbor ASNs.
    </p>
  </section>

  <section class="cpm-section">
    <h2>What BGP sees</h2>
    <p>
      CAIDA's <a href="https://www.caida.org/catalog/datasets/as-relationships/" target="_blank" rel="noopener noreferrer">AS relationships</a>
      give, every month, the neighbors a cloud's ASNs have in public BGP data, independently of any
      traceroute. Counted the same way for each month (neighbor ASNs of the cloud's own ASNs, links
      between them excluded):
    </p>
    <div class="cpm-tablewrap"><table class="cpm-table">
      <thead><tr><th>Cloud</th><th>Sep 2020</th><th>Jun 2023</th><th>Mar 2026</th><th>Aug 2026</th><th>Sep 2026</th><th>2020 → 2026</th></tr></thead>
      <tbody><tr><td>Google Cloud</td><td class="num">411</td><td class="num">399</td><td class="num">360</td><td class="num">375</td><td class="num">376</td><td class="num">-8.5%</td></tr><tr><td>Microsoft Azure</td><td class="num">318</td><td class="num">294</td><td class="num">307</td><td class="num">307</td><td class="num">307</td><td class="num">-3.5%</td></tr><tr><td>Amazon Web Services</td><td class="num">334</td><td class="num">345</td><td class="num">434</td><td class="num">469</td><td class="num">466</td><td class="num">+39.5%</td></tr><tr><td>IBM Cloud (AS36351)</td><td class="num">3,027</td><td class="num">2,380</td><td class="num">274</td><td class="num">297</td><td class="num">289</td><td class="num">-90.5%</td></tr></tbody>
    </table></div>
    <p>
      BGP sees about 376 neighbors for Google Cloud in September 2026;
      the traceroutes above see 5,365. Public collectors miss most peering links, because a
      peer does not pass the cloud's routes on to the networks that feed the collectors, so
      interconnection has to be measured from inside. IBM's count falls from
      3,027 to 289; this page does not investigate why.
    </p>
    <p>
      Exchange route servers add a second, narrower view: CAIDA also harvests multilateral peering from
      a small panel of route-server looking glasses (panel size per month, with
      the number shared with 2020's panel in brackets: Sep 2020 9 (9), Jun 2023 0 (0), Mar 2026 11 (7), Aug 2026 3 (0), Sep 2026 3 (0)).
      The March 2026 panel keeps seven of 2020's nine; between those two months Google Cloud's
      route-server neighbors go from 503 to 0 and IBM's from
      0 to 589. That says Google is no longer visible on the
      sampled route servers, not that it left them. The June 2023 snapshot lists no looking glasses, and the
      August and September 2026 panels share none with 2020, so neither can be read against it.
    </p>
    <p class="cpm-provenance">
      Every number in these three sections is computed from files by
      <code>scripts/cloud_peering_trend.py</code> (scamper-analysis 5653f89): the 2026 campaign
      peer links, Arnold et al.'s 2020 neighbor sets, the 2023 run's neighbor sets and its per-link,
      per-zone records, and CAIDA AS-relationship and AS-to-organization files for each month.
    </p>
  </section>
<!-- trend:end -->

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
