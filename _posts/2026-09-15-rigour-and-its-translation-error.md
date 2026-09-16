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

We study a system for which ground truth is rarely available and where even the instruments are often outside our control. A lot of the time, the practical response is simply to measure more: more traceroutes, more vantage points, more speed tests. This is useful, but it mostly tells us how consistently we can observe something. It does not necessarily tell us whether what we observed is a good representation of the thing we wanted to measure.

To do anything with these observations, we have to make that connection ourselves. Traceroute gives us a sequence of IP addresses, but what we often care about is the sequence of networks a packet traversed, so we map those addresses to ASes and call the result an AS path. A speed test tells us how much data a particular connection transferred during a short period of time, but what we may actually want to know is the capacity of the user’s Internet connection. In both cases, there is a translation between what the instrument directly observed and the quantity we eventually reason about.

The problem is that the mistakes introduced by this translation do not necessarily average out. If a router does not respond to traceroute, for example, that may be because of how that particular network configures its routers. If thousands of users appear behind one IP address, that may be because a particular ISP uses carrier-grade NAT. These are properties of the networks we are trying to study, not random measurement glitches. Collecting ten times as many measurements can therefore make us much more certain about our observations without making the translation from those observations to the underlying system any better.

That distinction is what I have been thinking about recently. We spend a lot of effort asking how confident we are in an estimate, but I am not sure we spend nearly as much asking whether the thing we estimated is actually the thing we meant to measure.

## Three versions of the same move

**Traceroute becomes a path in a graph.** We collect a sequence of IP addresses, map them to ASes, and treat the result as a walk through the AS-level topology. Already, that translation hides quite a lot. An IP address does not always map cleanly to one AS. Third-party addresses can appear in paths even though the corresponding network is not actually traversed. Sibling ASNs can belong to the same organization. IXP peering LANs belong to the IXP rather than to either network on the path. Addresses can be squatted. Some hops simply do not respond.

None of this prevents us from constructing an AS graph; we do it all the time. But when we compute degree distributions, centralities, or path lengths, those quantities are first properties of the object we constructed. Calling them properties of the Internet requires another step.

**An address becomes a user.** We count IP addresses and speak about people. But the number of clients behind an address can vary by orders of magnitude because of VPNs, proxies, and carrier-grade NAT. When we looked at this at global scale, one of the things that surprised me was that the /24 was more informative than the individual address for identifying these gateways. The unit we had naturally been reasoning about was not necessarily the unit at which the phenomenon lived.

**Throughput becomes capacity.** A speed test tells us how fast one flow went to one server at one moment, under one congestion-control algorithm, with whatever cross traffic happened to be present, terminating on a client whose CPU may itself have been the bottleneck. We turn that into the speed of a connection, and sometimes from there into the capacity available to a household. Those are different quantities, and the distinction matters when, for example, regulators act on the last one.

## What the move buys us

I don't think the lesson is that we should stop making these abstractions. Quite the opposite.

The abstraction is what lets us make precise statements. Before it, "the Internet is robust" does not mean very much. Once we have defined a graph and a failure model, it becomes a claim about what happens to that graph under a particular deletion process. Now it can be checked, compared, and shown to be wrong.

That is an enormous improvement. The question is what we are entitled to carry back from the abstraction to the system it is supposed to represent.

I have certainly made this move myself, sometimes fairly aggressively. In work on the private backbones of hyperscalers, we modeled a network's delay space as a Riemannian manifold and computed its Ricci curvature. That is a strong assumption about something that is, physically, routers, links, queues, and fiber.

We had a reason for making it that I still think is good. Inside those backbones, providers can manipulate how probe packets are handled, which makes traceroute, our usual instrument for recovering paths, much less trustworthy. But losing the usual abstraction does not leave you with an assumption-free measurement. You have to choose another one.

That is basically the situation we are always in. There is no assumption-free position from which to measure the Internet. We can mostly choose whether those assumptions are explicit enough that somebody can inspect them.

## The residue is not noise

The part I keep coming back to is what happens to everything that the clean object fails to capture.

It is tempting to treat that gap as ordinary measurement error: something small, roughly random, and eventually washed away by collecting enough data. But many of these errors are not like that. They are structured, and often correlated with exactly the quantity we are trying to estimate.

Unresponsive hops are not uniformly distributed across networks. IXP address space is not a random subset of the address space; it appears precisely at topologically interesting points. Errors in a speed test depend on access technology, congestion control, client hardware, and the network conditions we are often trying to characterize in the first place.

So more data does not necessarily fix the problem. Ten times as many traceroutes can give you a much tighter estimate of the wrong quantity.

I find this failure mode particularly interesting because it looks like increasing rigor from inside the analysis. The sample size gets larger. The confidence intervals get smaller. The p-values get better. All of those calculations can be perfectly correct without testing the assumption that connected the measurement to the quantity we actually cared about.

One way of thinking about some of this is that we diagnose confounding as sampling error.

That is also a large part of the argument behind a recent paper of ours, half-jokingly named after Sisyphus: we keep repeating measurements and keep missing causes. Suppose performance degrades at the same time that some network event occurs. More samples can establish that association extremely well. They do not tell us whether the event caused the degradation, whether both were driven by time of day or load, or whether the measurement process itself changed at the same time.

At that point, collecting more observations is not enough. The question is causal, and the machinery has to change accordingly: interventions when we can make them, or things like instrumental variables, causal graphs, and synthetic controls when we cannot.

## What kind of error is this?

I have found the vocabulary of measurement theory surprisingly useful for thinking about this.

In the representational tradition — Krantz, Luce, Suppes, and Tversky's *Foundations of Measurement* is the canonical reference — measurement is about constructing a structure-preserving map from an empirical system to a numerical one. Put less formally, we are claiming that relationships in the thing we care about survive when we translate it into something we can manipulate mathematically.

That framing immediately raises two questions: does the mapping preserve the relationships we care about, and how much freedom did we have in choosing it?

Consider an AS graph inferred from traceroutes. Different defensible IP-to-AS mappings can produce different graphs. Alias resolution changes the object again. So does how we treat siblings, IXPs, third-party addresses, and missing hops. Whatever structure-preserving map we are hoping for is therefore at best approximate and non-unique.

This leads to a concept from measurement theory that I find particularly useful: **meaningfulness**. Roughly, a statement about a measured structure should survive the admissible transformations of its representation. It is not meaningful to say that one city is twice as warm as another in Celsius, because the statement stops being true when we express exactly the same temperatures in Fahrenheit. The ratio is a property of the representation, not the weather.

There is an analogous question for Internet measurement: does the conclusion survive the mappings I could reasonably have chosen?

If a ranking of networks changes when I swap one defensible IP-to-AS dataset for another, I should be careful about calling that ranking a property of the Internet. At least part of what I measured was a property of the representation I chose.

## A worked example: metAScritic

We ran into a fairly extreme version of this problem when looking at AS-level interconnection.

For the ASes we studied across six large metros, public BGP feeds showed roughly 13,000 interconnection edges. We directly measured more than 86,000 and inferred more than 368,000 — roughly twenty-four times the public view.

A lot of topology work has taken the observable AS graph and asked questions about properties of "the Internet." Our results suggest that, for at least some of those questions, the observation process is itself a substantial part of the object being analyzed.

But getting beyond that public view required making another assumption.

We assumed that the metro-level connectivity matrix was approximately low-rank and reconstructed missing entries using matrix completion — essentially the mathematics of recommender systems pointed at peering.

I like this example because it makes the assumption hard to hide. "The connectivity matrix is approximately low-rank" is a sentence somebody can disagree with.

More importantly, there is a reason to expect that structure beyond the fact that a low-rank model fits the observations. Networks do not independently flip a coin for every possible peering relationship. Their decisions are driven by a smaller collection of factors: where they have infrastructure, what kind of network they operate, their traffic relationships, their business model, and so on. Whether that is enough to justify low rank is debatable, but at least it is a claim about how the system is constructed rather than only about the shape of the data.

And we can measure what remains unexplained. Against validation data that included ground truth, the reconstruction achieved an F-score of 0.88. That is good. It is also very clearly not 1.

The important part is what happens next: adding those inferred links changes downstream conclusions. Internet flattening looks different. Estimates of the impact of route leaks and prefix hijacks change. Some conclusions therefore do not survive what I think is a defensible improvement in the representation.

I don't think our reconstructed graph is the "true Internet" either. It is another approximation. Ideally somebody will eventually find another source of information, improve the representation again, and show which of our conclusions move too.

## Five ways of dealing with the gap

I have found it useful to think about a few different responses to this problem. They are not mutually exclusive, and most good measurement work probably uses several of them.

**Define the quantity operationally.** The operationalist move, after Bridgman, is to say that a concept simply *is* the operations used to measure it. Throughput is what this speed test measures. This is very clean: there is no translation error because we make no claim beyond the procedure itself. The price is generality. Taken seriously, different procedures may be measuring different things, and aggregating across them becomes difficult. Almost nobody can live entirely in this position, but it is useful whenever we are tempted to overclaim.

**Accept the approximation and stay useful.** The instrumentalist position is probably the default in practice: all models are wrong, some are useful. I have quoted Box as often as anyone. But I increasingly think the slogan tends to end the discussion exactly where it should begin. *Which* part is wrong? Useful for *what*? Does the wrongness affect the particular conclusion we are drawing?

Cartwright's version in *How the Laws of Physics Lie* is sharper and less comfortable. Laws work in the carefully constructed circumstances in which their assumptions hold; the ceteris paribus clause is doing a lot of the work. There is a similar danger in Internet measurement: our result can be perfectly true of the object we constructed without being equally true of the Internet.

**Validate against construction, not only fit.** I associate this most strongly with Willinger, Alderson, and Doyle's critique of the power-law topology literature. Their point was not simply that somebody fit the wrong curve. A good statistical fit could still be uninformative if the observation process itself produced that shape, or if the proposed generative explanation contradicted how networks were actually engineered.

The corrective is to ask whether the model makes sense given how the system is built and operated. That is the tradition in which I think about the low-rank assumption above. The evidence for it should not only be that matrix completion works, but that the proposed structure makes sense given how networks actually make peering decisions.

**Ask a causal question when the question is causal.** If the residue is confounding rather than noise, then a better estimator of the same observational quantity may not solve the problem. Sometimes the question we actually care about is: what would happen if we intervened?

This is the Sisyphus argument, and probably the position I have changed my mind about most recently. It is also expensive. You need an intervention, an instrument, a credible control, or some other source of identifying variation. Internet measurement has historically been much better equipped for large observational studies than for this kind of inference.

**Iterate without pretending there is a final ground truth.** This is probably the position I actually find most convincing.

Hasok Chang's *Inventing Temperature* takes an obvious circularity in early thermometry seriously: how do you validate a thermometer without already having a way to measure temperature, which is exactly the thing you are trying to build an instrument for? Yet thermometry still made progress. Imperfect instruments were compared with one another, disagreements were investigated, assumptions were revised, and successive instruments became better without anybody first obtaining access to "true temperature."

Internet measurement looks surprisingly similar to me.

There is no complete ground-truth Internet against which we can validate every mapping we construct. What we can do is build successive approximations, compare independent measurement modalities, use operator ground truth where we can get it, characterize disagreements, and keep improving the representation.

That is basically what we tried to do when we "unboxed" the APNIC population dataset. The community had started relying on it to weight networks by their estimated number of users, but there was limited independent validation and the methodology was not fully public. So we compared it against an independent CDN view.

The two agree closely in roughly half of countries and identify the largest networks correctly in 93.9% of cases, while also having specific regions where the estimates should be treated much more carefully.

The CDN view is not ground truth either. That is the point. We compared two imperfect instruments whose failure modes are different enough that their agreement and disagreement tell us something. That seems much more realistic to me than either treating one dataset as truth or deciding that nothing can be measured because neither is perfect.

## What this looks like on a Tuesday

All of this sounds more philosophical than what it amounts to in practice. There are a few things I increasingly try to do.

**Write down the mapping.** What exactly are you claiming corresponds to what? An IP address represents a user. A traceroute hop represents an AS traversal. A speed-test result represents available capacity. Simply writing the sentence down often makes the assumption much easier to see.

**Vary the mapping, not just the sample.** If there are several defensible IP-to-AS datasets, alias-resolution methods, or sibling definitions, run the analysis under them and see what survives. Bootstrapping the same representation a thousand times answers a question about sampling noise. That is often not the uncertainty we should be most worried about.

**Use measurements that fail differently.** Control-plane and data-plane measurements are both incomplete, but they are incomplete in different ways. That difference is useful. Agreement between two measurements with unrelated failure modes tells us much more than repeating one of them another million times.

**Keep the measured quantity separate from the quantity you care about.** "We measured X." "We use X as evidence about Y." I increasingly think those should be two different sentences. The gap between them is often where the interesting methodological question lives.

None of this closes the gap between the Internet and the objects we construct to reason about it. I don't think that gap closes.

But there is a large difference between a gap we have characterized and one we have quietly assumed away. Increasingly, I think a lot of what rigor should mean in Internet measurement lives in that difference.