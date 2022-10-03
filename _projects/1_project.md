---
layout: page
title: Geopolitics of the Internet
description: Toward developing methodologies to understand the relationship between the Internet and people.
img: assets/img/as_level_spectral.png
importance: 1
category: models
---

After learning about Iranian politics from my grandfather, a political activist who fled to France, my interest in political science flourished from his dream: an intellectual awakening of a nation enriched by the history of an early civilization and a constant quest for freedom. Early on, I was drawn to mathematical modeling to reason through a problem by abstraction of the problem’s specificity. The capacity of thinking in terms of underlying structure and their properties motivated my first five years of university. In parallel with my mathematics undergrad, I consistently kept up with political affairs in Iran, Russia, the Black Sea. During my first research internship in South Korea, I came to realize that networks were a fertile environment to understand human behavior, where one could also observe the emergence of political phenomena. At that time, I had unconsciously laid the foundation for some of the research I would perform later: The idea of approaching political phenomena through the prism of networks and mathematics.

What began with a personal interest in understanding the geopolitics of Iran evolved into a project, where I was one of the first to illustrate how Iranian-owned ISPs have bent and manipulated the Internet routes to obtain a tighter grip on the Internet in Iran. In particular, I, along with my collaborators from the geopolitics and computer science department, had predicted in a presentation in June 2018 in an invited conference at Oxford University and London School of Economics that the government’s increased control of the architecture could eventually lead to a total Internet blackout, which happened in 2018. This work at the cusp of geography, sociology, mathematics, and computer science (what I am pursuing for my doctorate) involved authors and methodologies from multiple disciplines. This work led to a few other collaborations, with experts on Central Asia, Ukraine and Crimea, to build a qualitative framework that helped perform analysis of protocol data, which we published in cybersecurity journals and military conferences . Furthermore, the analysis toolkit we developed is now taught at the French Institute of Geopolitics master’s program since 2021. During that time, I also examined Russia’s influence in social networks by building tools to quantitatively support (or infirm) reasoning made by colleagues who were experts in political science.  


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/AS_level.jpg" title="world_topology" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
  AS-level topology as observed from BGP feeds in 2020.
</div>


### Iran:

In this project, we show that Iran has leveraged BGP to achieve three specific strategic goals: 1) the pursuit of a self-sustaining national Internet with controlled borders as seemed to have been used in the current events 2) the desire to set up an Iranian Intranet to facilitate censorship which is a passive consequence from the architecture 3) the leverage of connectivity as a tool of regional influence through BGP dependencies. We show that the evolution of the Iranian AS landscape has happened along with a bigger governmental control.
We also note that the Iranian government has been using BGP-tampering for the past few years with increasingly high firepower.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/iran_bottleneck.png" title="world_topology" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
  AS-level topology as observed from BGP feeds in 2020.
</div>

The complete shutdown we observe in November 2019 and again in September 2022 are the latest and most massive event of a larger set of BGP related events that Iran that has been witnessed has been for now more than 10 years. We observe that Iran has been able to develop a BGP strategy that enables it to fully control its network without reducing its resilience. We finally note that the Iranian network is connected to the rest of the world through a very number of limited ASes. This leads us to our conclusion that Iran has the potential to completely isolate its network from the rest of the world. This research has led to a paper at the Journal of Cybersecurity and the technical contributions have led to a new approach to perform intelligence through protocol data currently taught at the French Institute of Geopolitics in Paris.

**References in the press**:<br>
 <a href="https://www.lemonde.fr/pixels/article/2019/11/20/internet-coupe-en-iran-le-niveau-de-sophistication-de-ce-blocage-est-une-premiere_6019883_4408996.html">Le Monde</a> <br>
<a href ="https://t.co/rsmSHvLoac">TV5 Monde</a>

#### Ukraine and Russia:

We developed a new methodology for mapping cyberspace in its lower layers
(infrastructures and routing protocols) in order to measure and represent the level
of fragmentation of the Internet in areas of geopolitical tensions using the Border
Gateway Protocol (BGP). Our hypothesis was that BGP could be used for geopolitical
reasons in the context of a large-scale crisis, leading to a further fragmentation of the
Internet. We focused on the Ukrainian crisis.
BGP is a core protocol of cyberspace that connects the tens of thousands of autonomous
systems (ASes) that compose the Internet. Based on a 35-year-old technology, this
protocol is easy to manipulate to re-route Internet traffic or even to cut off entire
regions (BGP hijacks). Our results show actions on BGP implemented right after
the 2014 Maidan Revolution, when Russian forces took control of the Crimean
Peninsula and started to back separatist forces in Eastern Ukraine. In both cases,
Russian authorities and separatist forces modified BGP routes in order to divert the
local Internet traffic from continental Ukraine – drawing a kind of “digital frontline”
consistent with the military one. The study of Donbass and of the Crimean Peninsula
leads to important methodological findings to (1) define and map digital borders at
the routing level; (2) analyze the strategies of actors conducting actions via BGP;
(3) categorize these strategies, from traffic re-routing to cutting-off entire regions for
intelligence or military purposes; and (4) anticipate future uses for BGP manipulations
by identifying strategic bottlenecks within the network.




**Presentations and conferences:** <br>
<a href="https://www.menog.org/meetings/menog-19/agenda/loqman-salamatian/">MENOG 19</a><br>
<a href="https://www.ripe.net/participate/meetings/regional-meetings/ripe-ncc-day-moscow/loqman-salamatian">RIPE NCC Day</a><br>
<a href="https://nog.fi/meeting/2022.06/ripe-ncc-update.pdf">Virtual Peering Series - Central Asia</a><br>
International conference on the Geopolitics of Internet Routes<br>
<a href="https://app.swapcard.com/widget/event/fic-2020/planning/UGxhbm5pbmdfOTM4ODE="> Masterclass at the International Forum of Cybersecurity 2020</a>

**Grants**: <br>
RIPE RACI Grants x 2

**Papers**: <br>
<a href="https://scholar.google.com/citations?view_op=view_citation&hl=fr&user=wfIuIdMAAAAJ&citation_for_view=wfIuIdMAAAAJ:9yKSN-GCB0IC">Measuring the fragmentation of the Internet: the case of the Border Gateway Protocol (BGP) during the Ukrainian crisis</a><br>
<a href="https://scholar.google.com/citations?view_op=view_citation&hl=fr&user=wfIuIdMAAAAJ&citation_for_view=wfIuIdMAAAAJ:d1gkVwhDpl0C">The geopolitics behind the routes data travel: a case study of Iran</a><br>
<a href="https://scholar.google.com/citations?view_op=view_citation&hl=fr&user=wfIuIdMAAAAJ&citation_for_view=wfIuIdMAAAAJ:IjCSPb-OGe4C">Mapping the routes of the Internet for geopolitics: the case of Eastern Ukraine</a><br>
<a href="https://scholar.google.com/citations?view_op=view_citation&hl=fr&user=wfIuIdMAAAAJ&citation_for_view=wfIuIdMAAAAJ:UeHWp8X0CEIC">Le rôle de la topologie d’Internet dans les territoires en conflit en Ukraine, une approche géopolitique du routage des données</a>
<a href="https://scholar.google.com/citations?view_op=view_citation&hl=fr&user=wfIuIdMAAAAJ&citation_for_view=wfIuIdMAAAAJ:Tyk-4Ss8FVUC">Geopolitics of Routing</a>
