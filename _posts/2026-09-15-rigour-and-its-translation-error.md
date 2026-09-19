---
layout: post
title: Rigour and Its Translation Error
date: 2026-09-15 20:00:00-0400
description: What we buy when we assume the Internet is a mathematical object, and what we can never quite pay for.
tags: measurement methodology philosophy
categories: academia
giscus_comments: true
related_posts: false
toc:
  sidebar: left
---

Internet measurement has a slightly strange relationship with rigor.

The purpose of measurement is to learn something about the Internet that we cannot observe directly. We collect observations that we can make and use them as evidence about the thing we actually want to know.

Suppose, for example, that we want to know which networks carry traffic between two points on the Internet. We cannot observe that path directly, so we run traceroute. Traceroute gives us a sequence of responses from IP addresses. We map those addresses to networks and turn them into an AS-level path.

There are really two steps here. First, we observed something: a sequence of responses to traceroute probes. Then we translated those observations into something else: a path through a sequence of networks. The second object is closer to the question we wanted to answer, and much easier to reason about.

This translation is useful precisely because it leaves things out. Once we have an AS path, we no longer have to reason about individual interfaces, routers, or links. But in deciding what to leave out, we have also made assumptions about which details do not matter and what the remaining observations represent.

This gives us two rather different sources of uncertainty.

The first is uncertainty in what we observed. Perhaps we measured at an unusual time or from an unusual place, or simply did not collect enough samples. Statistics gives us a rich set of tools for reasoning about this kind of uncertainty. We repeat measurements, collect more data, estimate variance, bootstrap, and compute confidence intervals.

The second is uncertainty in the translation from what we observed to the object we want to reason about.

Running more traceroutes can give us increasing confidence that a particular sequence of addresses appears consistently. But if we systematically map one of those addresses to the wrong network, collecting more traceroutes will not make the resulting AS path more accurate. We can become increasingly certain about what we observed without becoming more certain that the object we constructed represents what we intended it to represent.

I will call the uncertainty introduced by this second step translation error.

The distinction matters because the two kinds of uncertainty need not decrease together. In fact, translation errors are often structured. Routers that do not respond to traceroute are not necessarily distributed uniformly across the Internet. IP-to-AS mappings fail systematically for particular kinds of addresses. IXPs, siblings, and third-party addresses create ambiguity exactly where the convenient correspondence between an IP address and a network starts to break down.

In those cases, collecting more data can characterize the object produced by our measurement process ever more precisely without making that object a better representation of the underlying system.

Much of our machinery for rigor begins only after that object has already been constructed.

## What the translation buys us

Translation error is not an argument against abstraction. Quite the opposite. Abstraction is often what makes rigorous reasoning possible.

“The Internet is robust” does not mean very much on its own. Represent the Internet as a graph and define what counts as a failure, however, and robustness becomes a precise statement about what happens when particular nodes or edges disappear. We can test that statement, compare networks, and find cases where it fails.

That is an enormous improvement. But notice what became precise: a statement about the graph. Whether the same statement holds for the Internet depends on whether our translation into that graph preserved the parts of the system that matter for the question.

There is no assumption-free alternative here. Refusing one abstraction only means choosing another way to connect our observations to the system we want to understand. The question is therefore not whether to translate, but what a particular translation preserves and what conclusions it allows us to draw.

The harder case is when the observations admit more than one reasonable translation. Then the problem is not necessarily that one of them is simply wrong. Different defensible choices may produce different mathematical objects, and those objects may support different conclusions.

So how should we reason about that uncertainty?

## Varying the translation

I have found an idea from measurement theory useful here.

One way to think about measurement is as a translation that tries to preserve relationships. We start with an empirical system and construct a representation that we can manipulate mathematically. The question is which properties of the original system survive that translation. This is the perspective developed in the representational theory of measurement associated with Krantz, Luce, Suppes, and Tversky.

A particularly useful concept from that tradition is meaningfulness.

Consider temperature. Saying that one city is twice as warm as another in Celsius is not meaningful in this sense, because the statement stops being true when exactly the same temperatures are expressed in Fahrenheit. The ratio belongs to the representation we chose, not to the weather.

There is an analogous question in Internet measurement:

Does my conclusion survive the translations I could reasonably have chosen?

Take an AS graph inferred from traceroutes. Different defensible IP-to-AS mappings can produce different graphs. Alias resolution changes the object again, as do decisions about siblings, IXPs, third-party addresses, and missing hops.

Suppose I rank networks according to some property of that graph. If the ranking changes when I replace one defensible IP-to-AS mapping with another, then I should be careful about calling the ranking a property of the Internet. At least part of what I am seeing comes from the particular representation I chose.

This is a different question from the one answered by ordinary statistical robustness. Resampling observations can tell me whether a conclusion is sensitive to the particular sample I happened to collect. It cannot tell me whether the conclusion depends on how I translated those observations into the object being sampled.

The problem is not always that we translated incorrectly. Sometimes the evidence simply permits several reasonable translations, and those translations support different conclusions.

That suggests another dimension along which a measurement claim can be tested: not only whether it survives another sample, but whether it survives another defensible construction of the object itself.

## When the representation changes the conclusion

I ran into this problem in my own work on Internet interconnection.

Suppose we want to know which networks directly exchange traffic with one another. There is no instrument that simply gives us that graph. Much of what we know comes from public BGP collectors: networks expose some of their routes to collectors, and we infer interconnections from the AS paths that appear in those routes. But this reveals only connections that happen to be visible from those vantage points. Many others, particularly at Internet exchange points, never appear.

In our paper metAScritic, we tried to construct a more complete view by combining different sources of information. Across six large metropolitan areas, the public BGP view exposed roughly 13,000 interconnection edges among the networks we studied. By actively sending traffic through those networks, we could expose many connections that were invisible in BGP, directly measuring more than 86,000.

But active measurement gives us another partial view, not the graph itself. We observe only the interconnections exercised by the paths we manage to measure. To reason about connectivity beyond those observations, we used another source of information: interconnection decisions have structure. Networks do not independently decide whether to connect at every possible location. Those decisions are related to things like where they have infrastructure and how they peer. We represented that structure as a matrix and used matrix completion to infer additional interconnections.

We therefore ended up with several representations of the same underlying system, each supported by different observations and assumptions. None was the interconnection graph itself.

What interested me was what happened when we used these representations to answer questions about the Internet. The conclusions moved. The extent to which the Internet appeared to be flattening changed, as did estimates of how route leaks and prefix hijacks could propagate.

This is the kind of translation error I am interested in. An analysis performed on the public BGP graph could be statistically impeccable. We could collect more BGP observations and characterize properties of that graph with increasing precision. But if another defensible construction of the graph changes the conclusion, then the uncertainty that matters is not confined to the analysis performed after the graph has been constructed.

It also lies in the construction of the graph itself.

Our reconstructed graph does not make that problem disappear. It is another representation, built from another set of observations and assumptions. We can validate individual interconnections where we have independent evidence and characterize where different views agree or disagree. But there is no complete map of Internet interconnection against which we can simply declare one representation correct.

That leaves a harder question: if we never have access to the true object, what does it mean for one measurement to be better than another?

## Progress without ground truth

Hasok Chang’s Inventing Temperature describes a version of this problem in the history of thermometry.

Early thermometer makers faced an apparent circularity. How do you validate an instrument for measuring temperature without already having a reliable way to measure temperature?

They could not compare their instruments against “true temperature.” Instead, progress came from putting imperfect instruments into contact with one another. Their disagreements exposed assumptions that had previously been hidden. Those disagreements could be investigated, instruments could be modified, and some ways of measuring temperature proved more coherent and useful than others.

Ground truth was not a prerequisite for improvement.

I think Internet measurement often works the same way.

In the interconnection example, I cannot establish that the graph inferred by metAScritic is the true graph by comparing it against some complete map of Internet interconnection. No such map exists. But I can compare what public BGP, active measurements, and inference tell me. I can validate particular edges where independent evidence is available. More importantly, I can ask why the different views disagree.

The fact that none of these views is ground truth is precisely what makes those comparisons interesting. If two methods depend on different observations and fail in different ways, their disagreement tells us something that repeating either measurement cannot. And if a conclusion survives both, then at least we know that it does not depend on the particular assumptions that distinguish them.

This is a different notion of progress from approaching a fixed ground truth one decimal place at a time. We improve the representation by confronting it with other ways of seeing the same system, finding where they cannot simultaneously be right, and understanding what produced the disagreement.

There may never be a final representation for which this process stops.

## What does rigor mean, then?

This brings me back to the distinction at the beginning.

Suppose I compute some property of an inferred AS graph and report a confidence interval. The uncertainty in that interval is usually conditional on the graph I constructed. But the graph is itself an inference. Before I calculated anything, I had already decided how observations map to ASes, how to handle IXPs and missing hops, what counts as evidence of an edge, and perhaps how to infer edges that I never observed directly.

Much of our machinery for rigor therefore begins one step too late.

We ask how uncertain we are about a quantity computed from a representation while treating the representation itself as fixed. Yet the two sources of uncertainty can behave very differently. More observations might drive the sampling uncertainty toward zero while leaving uncertainty about the representation almost untouched.

This does not mean that the confidence interval is wrong. It answers an important question: given this representation and these observations, how precisely have we estimated the quantity?

But there is another question:

How much does the answer depend on having chosen this representation in the first place?

The two questions require different kinds of evidence. Resampling observations addresses the first. Comparing defensible translations, confronting them with independent measurements, and understanding their disagreements begins to address the second.

Seen this way, meaningfulness suggests something more than another robustness check. A measurement result is not fully characterized by an estimate and uncertainty conditional on one representation. There is also a sense in which it has a domain of validity: the set of reasonable translations under which the conclusion continues to hold.

I do not mean that the conclusion that survives the largest number of representations is automatically the best one. Some representations are much better justified than others, and some scientific questions necessarily depend on a particular choice of representation. The point is that precision within a representation and dependence on the representation answer different questions. We should not mistake one for the other.

That distinction changes what I would like to know when I read a measurement result. Not only: how precisely was this quantity estimated? But also: which parts of the result came from the observations, which came from the translation, and which conclusions would remain if that translation changed?

None of this removes the gap between the Internet and the mathematical objects we construct to reason about it. I do not think that gap can be removed. Nor should it be: constructing those objects is what allows us to make vague questions precise enough to answer.

Rigor is therefore not about avoiding the translation. It is about refusing to let the precision we achieve after the translation hide the uncertainty introduced by making it.

A smaller confidence interval tells us that we understand our constructed object more precisely. It does not tell us how much of our conclusion belongs to the object, and how much belongs to the way we constructed it.