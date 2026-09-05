---
layout: page
title: Internet Measurement
permalink: /teaching/internet-measurement/
description: A research-oriented course on learning about the Internet from partial and indirect observations.
nav: false
---

**Spring 2027 · University of Maryland**

**Instructor:** Loqman Salamatian  
**Course number:** To be announced  
**Meeting time and place:** To be announced  
**Format:** Research seminar with hands-on measurement work  
**Status:** Planning draft

## Course description

The Internet is not directly observable. Its structure and behavior must be inferred from partial, indirect, and sometimes contradictory signals.

This course examines how we measure the Internet, what those measurements can and cannot reveal, and how they can be used to understand the systems and services that depend on it. We will study paths and topology, interdomain routing, performance, outages, Internet-wide scanning, services and DNS, traffic engineering, censorship, broadband access, physical infrastructure, and datacenter workloads.

For every topic, we will ask: What question are we precisely trying to answer? What data can we actually observe? What assumptions connect those observations to the underlying system? When methods disagree, what does the disagreement teach us?

Our recurring approach will be:

1. **Observe:** collect a route, BGP update, DNS answer, packet sample, speed test, scan response, or application-level observation.
2. **State the assumptions:** explain what must be true for the observation to stand in for the hidden system.
3. **Infer:** make a bounded claim with an explicit scope and uncertainty.
4. **Test:** compare vantage points, datasets, methods, and any available ground truth.

## Learning objectives

By the end of the course, students should be able to:

- Turn a broad question about the Internet into a precise, measurable claim.
- Choose and combine active, passive, control-plane, and application-layer observations.
- Separate what was directly observed from what was inferred.
- Identify selection effects, vantage-point bias, confounders, and missing ground truth.
- Design ethical and reproducible Internet measurement experiments.
- Reconcile conflicting measurements without forcing them into a single false answer.
- Communicate measurement results with appropriate uncertainty and limitations.

## Course format

Each week pairs research literature with hands-on work. The goal is to understand both how a measurement is built and why its conclusions deserve—or fail to deserve—our trust.

**Research seminar.** We will closely read classic and recent papers. Discussions will compare questions, observations, assumptions, and methods rather than proceed as a sequence of paper summaries.

**Hands-on work.** Short investigations will use real data and tools, including traceroute, BGP archives, DNS, Internet-wide scans, throughput tests, and public measurement platforms.

**Project meetings.** We will hold regular design reviews covering questions, data, ethics, validity, analysis, and communication.

No traditional exams are planned. Evaluation centers on sustained preparation, careful empirical work, and a semester project.

**Expected background.** Graduate students and advanced undergraduates should have prior exposure to computer networking, be comfortable programming in Python or a comparable language, and be willing to work with imperfect real-world datasets. Permission of the instructor can substitute for formal prerequisites.

## Grading

| Component | Weight | Description |
| --- | ---: | --- |
| Measurement notebook | 20% | Concise weekly entries separating the question, observation, assumption, claim, and threat to validity. |
| Lab investigations | 20% | Three small empirical studies developing fluency with measurement tools, data cleaning, and validation. |
| Discussion and synthesis | 15% | Prepared participation, one facilitated class discussion, and short comparisons across readings. |
| Project milestones | 15% | Question memo, ethics and data review, proposal, pilot result, and peer design review. |
| Final project | 30% | A defensible measurement study, presented in class and delivered with a paper and reproducibility package. |

This grading scheme is a planning draft and may change before the course is formally listed.

## Schedule and readings

Main readings anchor each week's discussion. Complementary readings extend, challenge, or provide alternative approaches to the same measurement problem.

### Week 1: What can be known, and how do we measure it well?

**Main reading**

- Vern Paxson. [Strategies for Sound Internet Measurement](https://doi.org/10.1145/1028788.1028824). *ACM IMC, 2004.*

**Complementary readings**

- Neil Spring, David Wetherall, and Thomas Anderson. [Reverse Engineering the Internet](https://doi.org/10.1145/972374.972376). *ACM SIGCOMM Computer Communication Review, 2004.*
- Loqman Salamatian. [The Internet as Sisyphus: Repeating Measurements, Missing Causes](https://burdantes.github.io/assets/pdf/hotnets2025_sisyphus.pdf). *ACM HotNets, 2025.*
- David Dittrich and Erin Kenneally. [The Menlo Report: Ethical Principles Guiding Information and Communication Technology Research](https://www.dhs.gov/sites/default/files/publications/CSD-MenloPrinciplesCORE-20120803_1.pdf). *U.S. Department of Homeland Security, 2012.*

### Week 2: Paths and topology

**Main readings**

- Ethan Katz-Bassett, Harsha V. Madhyastha, Vijay Kumar Adhikari, Colin Scott, Justine Sherry, Peter van Wesep, Thomas Anderson, and Arvind Krishnamurthy. [Reverse Traceroute](https://www.usenix.org/conference/nsdi10-0/reverse-traceroute). *USENIX NSDI, 2010.*
- Alexander Marder, Matthew Luckie, Amogh Dhamdhere, Bradley Huffaker, Kimberly Claffy, and Jonathan M. Smith. [Pushing the Boundaries with bdrmapIT: Mapping Router Ownership at Internet Scale](https://doi.org/10.1145/3278532.3278538). *ACM IMC, 2018.*

**Complementary readings**

- Pietro Marchetta, Valerio Persico, Antonio Pescapé, and Ethan Katz-Bassett. [Don't Trust Traceroute (Completely)](https://doi.org/10.1145/2537148.2537155). *ACM CoNEXT Student Workshop, 2013.*
- Kevin Vermeulen, Justin P. Rohrer, Robert Beverly, Olivier Fourmaux, and Timur Friedman. [Diamond-Miner: Comprehensive Discovery of the Internet's Topology Diamonds](https://www.usenix.org/conference/nsdi20/presentation/vermeulen). *USENIX NSDI, 2020.*
- Kevin Vermeulen, Ege Gürmeriçliler, Ítalo Cunha, David R. Choffnes, and Ethan Katz-Bassett. [Internet Scale Reverse Traceroute](https://doi.org/10.1145/3517745.3561422). *ACM IMC, 2022.*

### Week 3: Interdomain routing

**Main readings**

- Lixin Gao. [On Inferring Autonomous System Relationships in the Internet](https://doi.org/10.1109/90.974527). *IEEE/ACM Transactions on Networking, 2001.*
- Thomas Alfroy, Thomas Holterbach, Thomas Krenc, Kimberly Claffy, and Cristel Pelsser. [The Next Generation of BGP Data Collection Platforms](https://doi.org/10.1145/3651890.3672251). *ACM SIGCOMM, 2024.*

**Complementary readings**

- Ricardo Oliveira, Dan Pei, Walter Willinger, Beichuan Zhang, and Lixia Zhang. [The (In)Completeness of the Observed Internet AS-Level Structure](https://doi.org/10.1109/TNET.2009.2020798). *IEEE/ACM Transactions on Networking, 2010.*
- Thomas Alfroy, Thomas Holterbach, Thomas Krenc, Kimberly Claffy, and Cristel Pelsser. [Measuring Internet Routing from the Most Valuable Points](https://arxiv.org/abs/2405.13172). *arXiv preprint, 2024.*
- Loqman Salamatian, Kevin Vermeulen, Ítalo Cunha, Vasileios Giotsas, and Ethan Katz-Bassett. [metAScritic: Reframing AS-Level Topology Discovery as a Recommendation System](https://doi.org/10.1145/3646547.3688429). *ACM IMC, 2024.*

### Week 4: Performance

**Main reading**

- Udit Paul, Jiamo Liu, Mengyang Gu, Arpit Gupta, and Elizabeth M. Belding. [The Importance of Contextualization of Crowdsourced Active Speed Test Measurements](https://doi.org/10.1145/3517745.3561441). *ACM IMC, 2022.*

**Complementary readings**

- Kyle MacMillan, Tarun Mangla, James Saxon, Nicole P. Marwell, and Nick Feamster. [A Comparative Analysis of Ookla Speedtest and Measurement Labs Network Diagnostic Test (NDT7)](https://doi.org/10.1145/3579448). *Proceedings of the ACM on Measurement and Analysis of Computing Systems, 2023.*
- Amogh Dhamdhere, David D. Clark, Alexander Gamero-Garrido, Matthew Luckie, Ricky K. P. Mok, Gautam Akiwate, Kabir Gogia, Vaibhav Bajpai, Alexander C. Snoeren, and Kimberly Claffy. [Inferring Persistent Interdomain Congestion](https://doi.org/10.1145/3230543.3230549). *ACM SIGCOMM, 2018.*

### Week 5: Outages and reachability

**Main readings**

- Lin Quan, John Heidemann, and Yuri Pradkin. [Trinocular: Understanding Internet Reliability Through Adaptive Probing](https://doi.org/10.1145/2486001.2486017). *ACM SIGCOMM, 2013.*
- David R. Choffnes, Fabián E. Bustamante, and Zihui Ge. [Crowdsourcing Service-Level Network Event Monitoring](https://doi.org/10.1145/1851182.1851228). *ACM SIGCOMM, 2010.*
- Loqman Salamatian, Kevin Vermeulen, David R. Choffnes, Ethan Katz-Bassett, and Phillipa Gill. [HERMES: Repurposing User-Driven Speed Tests to Monitor the Internet](https://burdantes.github.io/assets/pdf/hermes-sigcomm.pdf). *ACM SIGCOMM, 2026.*

**Complementary readings and resources**

- Aaron Schulman and Neil Spring. [Pingin' in the Rain](https://doi.org/10.1145/2068816.2068819). *ACM IMC, 2011.*
- Alberto Dainotti, Claudio Squarcella, Emile Aben, Kimberly C. Claffy, Marco Chiesa, Michele Russo, and Antonio Pescapé. [Analysis of Country-Wide Internet Outages Caused by Censorship](https://doi.org/10.1145/2068816.2068818). *ACM IMC, 2011.*
- Philipp Richter, Ramakrishna Padmanabhan, Neil Spring, Arthur Berger, and David Clark. [Advancing the Art of Internet Edge Outage Detection](https://doi.org/10.1145/3278532.3278563). *ACM IMC, 2018.*
- [IODA: Internet Outage Detection and Analysis](https://ioda.inetintel.cc.gatech.edu/about). *Internet Intelligence Lab, Georgia Institute of Technology.*

### Week 6: Internet-wide active measurement

**Main readings**

- Zakir Durumeric, Eric Wustrow, and J. Alex Halderman. [ZMap: Fast Internet-Wide Scanning and its Security Applications](https://www.usenix.org/conference/usenixsecurity13/technical-sessions/paper/durumeric). *USENIX Security, 2013.*
- Gerry Wan, Liz Izhikevich, David Adrian, Katsunari Yoshioka, Ralph Holz, Christian Rossow, and Zakir Durumeric. [On the Origin of Scanning: The Impact of Location on Internet-Wide Scans](https://doi.org/10.1145/3419394.3424214). *ACM IMC, 2020.*

**Complementary readings**

- Austin Murdock, Frank Li, Paul Bramsen, Zakir Durumeric, and Vern Paxson. [Target Generation for Internet-wide IPv6 Scanning](https://doi.org/10.1145/3131365.3131405). *ACM IMC, 2017.*
- Zakir Durumeric, David Adrian, Phillip Stephens, Eric Wustrow, and J. Alex Halderman. [Ten Years of ZMap](https://doi.org/10.1145/3646547.3689012). *ACM IMC, 2024.*

### Week 7: Services and dependencies

**Main reading**

- Petros Gigis, Matt Calder, Lefteris Manassakis, George Nomikos, Vasileios Kotronis, Xenofontas Dimitropoulos, Ethan Katz-Bassett, and Georgios Smaragdakis. [Seven Years in the Life of Hypergiants' Off-Nets](https://doi.org/10.1145/3452296.3472928). *ACM SIGCOMM, 2021.*

**Complementary reading**

- Aqsa Kashaf, Vyas Sekar, and Yuvraj Agarwal. [Analyzing Third Party Service Dependencies in Modern Web Services: Have We Learned from the Mirai-Dyn Incident?](https://doi.org/10.1145/3419394.3423664). *ACM IMC, 2020.*

### Week 8: DNS as a measurement signal

**Main readings**

- Kyle Schomp, Tom Callahan, Michael Rabinovich, and Mark Allman. [On Measuring the Client-Side DNS Infrastructure](https://doi.org/10.1145/2504730.2504734). *ACM IMC, 2013.*
- Mark Allman. [Putting DNS in Context](https://www.icir.org/mallman/pubs/All20b/). *ACM IMC, 2020.*

**Complementary readings**

- Liz Izhikevich, Gautam Akiwate, Briana Berger, Spencer Drakontaidis, Anna Ascheman, Paul Pearce, David Adrian, and Zakir Durumeric. [ZDNS: A Fast DNS Toolkit for Internet Measurement](https://doi.org/10.1145/3517745.3561434). *ACM IMC, 2022.*
- Audrey Randall, Enze Liu, Gautam Akiwate, Ramakrishna Padmanabhan, Geoffrey M. Voelker, Stefan Savage, and Aaron Schulman. [Trufflehunter: Cache Snooping Rare Domains at Large Public DNS Resolvers](https://doi.org/10.1145/3419394.3423640). *ACM IMC, 2020.*
- Audrey Randall, Enze Liu, Ramakrishna Padmanabhan, Gautam Akiwate, Geoffrey M. Voelker, Stefan Savage, and Aaron Schulman. [Home is Where the Hijacking is: Understanding DNS Interception by Residential Routers](https://doi.org/10.1145/3487552.3487817). *ACM IMC, 2021.*
- Rami Al-Dalky, Michael Rabinovich, and Kyle Schomp. [A Look at the ECS Behavior of DNS Resolvers](https://doi.org/10.1145/3355369.3355586). *ACM IMC, 2019.*
- Giovane C. M. Moura, Sebastian Castro, Wes Hardaker, Maarten Wullink, and Cristian Hesselman. [Clouding Up the Internet: How Centralized is DNS Traffic Becoming?](https://doi.org/10.1145/3419394.3423625). *ACM IMC, 2020.*

### Spring break

No class.

### Week 9: Internet traffic engineering

**Main readings**

- Michael Markovitch, Sharad Agarwal, Rodrigo Fonseca, Ryan Beckett, Chuanji Zhang, Irena Atov, and Somesh Chaturmohta. [TIPSY: Predicting Where Traffic Will Ingress a WAN](https://doi.org/10.1145/3544216.3544234). *ACM SIGCOMM, 2022.*
- Brandon Schlinker, Hyojeong Kim, Timothy Cui, Ethan Katz-Bassett, Harsha V. Madhyastha, Ítalo Cunha, James Quinn, Saif Hasan, Petr Lapukhov, and Hongyi Zeng. [Engineering Egress with Edge Fabric: Steering Oceans of Content to the World](https://doi.org/10.1145/3098822.3098853). *ACM SIGCOMM, 2017.*

**Complementary readings**

- Thomas Koch, Shuyue Yu, Sharad Agarwal, Ryan Beckett, and Ethan Katz-Bassett. [PAINTER: Ingress Traffic Engineering and Routing for Enterprise Cloud Networks](https://doi.org/10.1145/3603269.3604868). *ACM SIGCOMM, 2023.*
- Kok-Kiong Yap, Murtaza Motiwala, Jeremy Rahe, Steve Padgett, Matthew Holliman, Gary Baldus, Marcus Hines, Taeeun Kim, Ashok Narayanan, Ankur Jain, Victor Lin, Colin Rice, Brian Rogan, Arjun Singh, Bert Tanaka, Manish Verma, Puneet Sood, Mukarram Tariq, Matt Tierney, Dzevad Trumic, Vytautas Valancius, Calvin Ying, Mahesh Kallahalla, Bikash Koley, and Amin Vahdat. [Taking the Edge Off with Espresso: Scale, Reliability and Programmability for Global Internet Peering](https://doi.org/10.1145/3098822.3098854). *ACM SIGCOMM, 2017.*

### Week 10: Censorship and interference

**Main readings**

- Arian Akhavan Niaki, Shinyoung Cho, Zachary Weinberg, Nguyen Phong Hoang, Abbas Razaghpanah, Nicolas Christin, and Phillipa Gill. [ICLab: A Global and Longitudinal Internet Censorship Measurement Platform](https://doi.org/10.1109/SP40000.2020.00014). *IEEE Symposium on Security and Privacy, 2020.*
- Ram Sundara Raman, Prerana Shenoy, Katharina Kohls, and Roya Ensafi. [Censored Planet: An Internet-wide, Longitudinal Censorship Observatory](https://doi.org/10.1145/3372297.3417883). *ACM CCS, 2020.*

**Complementary readings and resources**

- Paul Pearce, Ben Jones, Frank Li, Roya Ensafi, Nick Feamster, Nick Weaver, and Vern Paxson. [Global Measurement of DNS Manipulation](https://www.usenix.org/conference/usenixsecurity17/technical-sessions/presentation/pearce). *USENIX Security, 2017.*
- Ram Sundara Raman, Leonid Evdokimov, Eric Wustrow, J. Alex Halderman, and Roya Ensafi. [Investigating Large-Scale HTTPS Interception in Kazakhstan](https://doi.org/10.1145/3419394.3423665). *ACM IMC, 2020.*
- [OONI: Open Observatory of Network Interference](https://ooni.org/). *Measurement platform and open dataset.*
- Loqman Salamatian, Frédérick Douzet, Kavé Salamatian, and Kévin Limonier. [The Geopolitics Behind the Routes Data Travel: A Case Study of Iran](https://doi.org/10.1093/cybsec/tyab018). *Journal of Cybersecurity, 2021.*

### Week 11: Broadband access and inequity

**Main reading**

- Udit Paul, Vinothini Gunasekaran, Jiamo Liu, Tejas Narechania, Arpit Gupta, and Elizabeth M. Belding. [Decoding the Divide: Analyzing Disparities in Broadband Plans Offered by Major US ISPs](https://doi.org/10.1145/3603269.3604831). *ACM SIGCOMM, 2023.*

**Complementary readings**

- Syed Tauhidun Nabi, Zhuowei Wen, Brooke Ritter, and Shaddi Hasan. [Red is Sus: Automated Identification of Low-Quality Service Availability Claims in the US National Broadband Map](https://doi.org/10.1145/3646547.3688441). *ACM IMC, 2024.*
- Zesen Zhang, Alexander Marder, Ricky K. P. Mok, Bradley Huffaker, Matthew Luckie, Kimberly Claffy, and Aaron Schulman. [Inferring Regional Access Network Topologies: Methods and Applications](https://doi.org/10.1145/3487552.3487812). *ACM IMC, 2021.*
- Haarika Manda, Varshika Srinivasavaradhan, Laasya Koduru, Kevin Zhang, Xuanhe Zhou, Udit Paul, Elizabeth Belding, Arpit Gupta, and Tejas N. Narechania. [The Efficacy of the Connect America Fund in Addressing US Internet Access Inequities](https://doi.org/10.1145/3651890.3672272). *ACM SIGCOMM, 2024.*

### Week 12: Hidden and physical infrastructure

**Main readings**

- Ramakrishnan Durairajan, Subhadip Ghosh, Xin Tang, Paul Barford, and Brian Eriksson. [Internet Atlas: A Geographic Database of the Internet](https://doi.org/10.1145/2491159.2491170). *ACM HotPlanet, 2013.*
- Loqman Salamatian, Scott Anderson, Joshua Matthews, Paul Barford, Walter Willinger, and Mark Crovella. [Curvature-Based Analysis of Network Connectivity in Private Backbone Infrastructures](https://doi.org/10.1145/3508025). *Proceedings of the ACM on Measurement and Analysis of Computing Systems, 2022.*

**Complementary readings**

- Shucheng Liu, Zachary S. Bischof, Ishaan Madan, Peter K. Chan, and Fabián E. Bustamante. [Out of Sight, Not Out of Mind: A User-View on the Criticality of the Submarine Cable Network](https://doi.org/10.1145/3419394.3423633). *ACM IMC, 2020.*
- Manaf Gharaibeh, Anant Shah, Bradley Huffaker, Han Zhang, Roya Ensafi, and Christos Papadopoulos. [A Look at Router Geolocation in Public and Commercial Databases](https://doi.org/10.1145/3131365.3131380). *ACM IMC, 2017.*
- Scott Anderson, Carol Barford, and Paul Barford. [Five Alarms: Assessing the Vulnerability of US Cellular Communication Infrastructure to Wildfires](https://doi.org/10.1145/3419394.3423663). *ACM IMC, 2020.*

### Week 13: Datacenter measurement and AI workloads

**Main readings**

- Srikanth Kandula, Sudipta Sengupta, Albert Greenberg, Parveen Patel, and Ronnie Chaiken. [The Nature of Datacenter Traffic: Measurements & Analysis](https://doi.org/10.1145/1644893.1644918). *ACM IMC, 2009.*
- Qinghao Hu, Zhisheng Ye, Zerui Wang, Guoteng Wang, Meng Zhang, Qiaoling Chen, Peng Sun, Dahua Lin, Xiaolin Wang, Yingwei Luo, Yonggang Wen, and Tianwei Zhang. [Characterization of Large Language Model Development in the Datacenter](https://www.usenix.org/conference/nsdi24/presentation/hu). *USENIX NSDI, 2024.*

**Complementary readings: classical datacenter measurement**

- Theophilus Benson, Aditya Akella, and David A. Maltz. [Network Traffic Characteristics of Data Centers in the Wild](https://doi.org/10.1145/1879141.1879175). *ACM IMC, 2010.*
- Theophilus Benson, Ashok Anand, Aditya Akella, and Ming Zhang. [Understanding Data Center Traffic Characteristics](https://doi.org/10.1145/1672308.1672325). *ACM SIGCOMM Computer Communication Review, 2010.*

**Complementary readings: AI workload and failure characterization**

- Yazhou Zu, Alireza Ghaffarkhah, Hoang-Vu Dang, Brian Towles, Steven Hand, Safeen Huda, Adekunle Bello, Alexander Kolbasov, Arash Rezaei, Dayou Du, Steve Lacy, Hang Wang, Aaron Wisner, Chris Lewis, and Henri Bahini. [Resiliency at Scale: Managing Google's TPUv4 Machine Learning Supercomputer](https://www.usenix.org/conference/nsdi24/presentation/zu). *USENIX NSDI, 2024.*
- Zhiyi Yao, Pengbo Hu, Congcong Miao, Xuya Jia, Zuning Liang, Yuedong Xu, Chunzhi He, Hao Lu, Mingzhuo Chen, Xiang Li, Zekun He, Yachen Wang, Xianneng Zou, and Junchen Jiang. [Holmes: Localizing Irregularities in LLM Training with Mega-scale GPU Clusters](https://www.usenix.org/conference/nsdi25/presentation/yao). *USENIX NSDI, 2025.*

**Complementary readings: AI datacenter systems**

- Adithya Gangidi, Rui Miao, Shengbao Zheng, Sai Jayesh Bondu, Guilherme Goes, Hany Morsy, Rohit Puri, Mohammad Riftadi, Ashmitha Jeevaraj Shetty, Jingyi Yang, Shuqiang Zhang, Mikel Jimenez Fernandez, Shashidhar Gandham, and Hongyi Zeng. [RDMA over Ethernet for Distributed AI Training at Meta Scale](https://doi.org/10.1145/3651890.3672233). *ACM SIGCOMM, 2024.*
- Qingkai Meng, Hao Zheng, Zhenhui Zhang, ChonLam Lao, Chengyuan Huang, Baojia Li, Ziyuan Zhu, Hao Lu, Weizhen Dang, Zitong Lin, Weifeng Zhang, Lingfeng Liu, Yuanyuan Gong, Chunzhi He, Xiaoyuan Hu, Yinben Xia, Xiang Li, Zekun He, Yachen Wang, Xianneng Zou, Kun Yang, Gianni Antichi, Guihai Chen, and Chen Tian. [Astral: A Datacenter Infrastructure for Large Language Model Training at Scale](https://doi.org/10.1145/3718958.3750521). *ACM SIGCOMM, 2025.*

### Week 14: Research presentations

Final project presentations and discussion.

## Semester project

Teams of two or three will design and carry out an original measurement study.

Scope matters less than the quality of the inference. Projects may reproduce or challenge a published result, compare methods that claim to measure the same phenomenon, construct a new dataset or measurement tool, or apply an established method in a setting where its assumptions deserve re-examination.

Projects should begin with a question rather than a dataset. Finding an interesting dataset and reporting correlations in it is generally not sufficient; students should be able to explain what property of the underlying Internet they want to learn and why their observations provide evidence about that property.

Project milestones will include:

1. **Question:** Define the claim, its scope, and why it matters.
2. **Observations:** Identify what can actually be measured.
3. **Assumptions:** Make explicit the bridge between observations and the desired claim.
4. **Design:** Choose measurements, vantage points, controls, and comparisons.
5. **Review:** Address ethics, safety, data access, and foreseeable sources of bias.
6. **Pilot:** Test feasibility and deliberately look for disagreement or counterexamples.
7. **Report:** Present results, limitations, alternative explanations, and reproducibility artifacts.

A good project may end with a narrower claim, a failed measurement approach, or a well-explained null result. The course rewards credible reasoning rather than a predetermined headline.

## Course policies

### Ethics and safety

Any measurement that may create load, scan systems, collect user-related data, interact with potentially censored services, or expose vulnerable communities requires instructor review before data collection.

Students must respect platform terms, institutional rules, and applicable law. The fact that a measurement is technically possible does not by itself make it appropriate to perform.

### Reproducibility

Projects should preserve code, queries, parameters, data provenance, measurement timing, vantage-point selection, filtering decisions, and analysis decisions.

When data cannot be shared, teams must document why and provide the strongest safe substitute.

Reproducibility does not imply that repeating an experiment will necessarily produce the same observation. The Internet changes. The goal is to preserve enough information to understand how the observation was produced and to distinguish methodological differences from changes in the underlying system.

### Collaboration and credit

Discussion and teamwork are central to the course. Submitted work must make individual and shared contributions clear, cite sources, and distinguish reused artifacts from original work.

### Access and participation

Please communicate early when access needs, health, caregiving, religious observance, or other circumstances affect participation. We will work within university policy to make a reasonable plan.

The final syllabus will specify submission channels, late-work and generative-AI policies, classroom recording rules, accessibility procedures, and all required [UMD course-related policies](https://www.ugst.umd.edu/courserelatedpolicies.html).
