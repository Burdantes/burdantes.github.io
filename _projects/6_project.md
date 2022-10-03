---
layout: page
title: IPv4 Squatters
description: Who is the squatting IPv4 space
img:
importance: 2
category: Measurements
---
### Collaborators:
<ul>
  <li>Jiangchen Zhu (Columbia University)</li>
  <li>Italo Cunha (UFMG)</li>
   <li>Matt Calder (Meta)</li>
   <li>Todd Arnold (United States Military Academy, West Point)</li>
   <li>Ethan Katz-Bassett</li>
</ul>

To mitigate IPv4 exhaustion, IPv6 provides expanded address space
while NAT allows a single public IPv4 address to suffice for many
devices assigned addresses from private IPv4 address space. Even
though NAT has greatly extended the shelf-life of IPv4, some networks need more private IPv4 space than what is officially allocated
by IANA due to their size and/or network management practices.
Some of these networks resort to using squat space, a term the
network operations community uses for large public IPv4 address
blocks allocated to an organization but historically never announced
to the Internet. While squatting of IP addresses is an open secret,
it introduces ethical, legal, and technical problems. We examine
billions of traceroutes to identify thousands of organizations squatting. We examine how they are using it and what happened when
the US Department of Defense suddenly started announcing what
had traditionally been squat space. In addition to shining light on a
dirty secret of operational practices, our paper shows that squatting
distorts common Internet measurement practices, which we argue
have to be reexamined to account for squat space.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/fig_map+heatmap.jpg" title="world_topology" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Chloropleth map highlighting the country of registration of the identified squatting organizations.
</div>

**Papers**: <br>
Who are the IPv4 Squatters? - Under Submission<br>
