---
layout: page
title: Riemannian Manifold of the Internet
description: Toward building a new representation of the Internet
img: assets/img/updated_manifold_view.jpg
importance: 1
category: current projects
---
### Collaborators:
<ul>
   <li>Scott Anderson (University of Wisconsin-Madison)</li>
   <li>Joshua Mathews (University of Wisconsin-Madison)</li>
   <li>Paul Barford (University of Wisconsin-Madison)</li>
   <li>Mark Crovella (Boston University)</li>
   <li>Walter Willinger (Niksun Inc.)</li>
</ul>

You can’t see it, but when you enter something in the search bar, there is a whole network of connections that happens. We typically don’t think about the internet having a map, but I likened his work to figuring out what the map of the internet is.

Gradually, cloud and content providers that dominate most of the web have started to build their own networks straight to the user instead of going through multiple different service providers (like Sprint, AT&T, and Verizon) to get to the user. This means most pathways are obscured from being seen. The reasons that service providers obscure their pathways are to protect their equipment, like where their routers are located and what they’re doing, which could open up a host of problems. It also brings a competitive advantage to hiding the relationship between Google and another site, which can be determined through the amount of traffic going from Google to a site.

With these private backbone infrastructures, the standard mapping tool (called traceroute) can no longer be used to evaluate network connectivity on the public web. Companies are able to manipulate traceroute so the information that it’s giving is not completely accurate. Other providers have disallowed traceroute in their networks.

Without traceroute, it’s harder to obtain useful insight into network structures. There is nothing holding companies accountable– they are able to make claims about the performance of their networks without verification from outside sources. It’s also harder for researchers to see what the maps of the internet look like. In order to get around this problem, we came up with a light-weight measurements combined with heavy-weight mathematical analysis tools.

A light-weight analysis tool would be measuring the end-to-end round trip delay (RTT) of information going through the network. RTT can then be augmented in the form of geolocation and path endpoints. Through triangulation, we are able to measure the distance between a user and the router on the map by taking data points that are emitted from different locations. This meant he could geolocate where a router was in the world.

However, there’s not a simple relationship between points on the map and the latency that takes between those points, meaning the distance is not directly predictable by the amount of time it takes to go from one point to another. This means that if a packet (data) is going from a user in Chicago to Denmark, the packet isn’t necessarily going the most direct route.

In addition to this, routes can be curved. What might appear to be a straight line from one node to another may actually be curved– similar to how standing on Earth appears flat, but in reality, is a sphere.

We made an analogy to Einstein’s theory of relativity to come to the conclusion that the distance between nodes might be curved. In order to determine the distance, we used Riemannian geometry– a heavy-weight analysis tool that deals with continuous surfaces. However, most computer science deals with graphs.

Using this mathematical toolking, we were able to see the paths that packets were taking in different cloud service providers such as AWS, Azure, and Amazon. Using the resulting manifold view, we turned the graphs of packets into a map of the world represented with elevation. The points of elevation on the graph show that there are multiple different paths a packet can take. The deeper the valley, the more limited the paths are between two locations.

We were able to identify that deep valleys between Europe and Asia are because the Red Sea is a choke point for data traffic since cables have to go underwater. Some cloud providers are able to find better routes that go around this chokepoint, such as AWS.

His research can help companies determine where to place new infrastructure to help with connectivity issues. Recently, we were invited to present to the Google Networking group.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/summary_fig.jpg" title="world_topology" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Our methodology in a nutshell.
</div>
