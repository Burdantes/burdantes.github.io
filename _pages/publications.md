---
layout: page
permalink: /publications/
title: Publications
description: Publications by categories in reversed chronological order.
nav: true
nav_order: 1
years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018]
---

<style>
  .post-header .post-title {
    display: none;
  }
</style>

<div style="margin-bottom: 40px;">
  <h1 style="color: #2c3e50; font-weight: 300; font-size: 2.2em; letter-spacing: -0.5px; margin: 0 0 10px 0; border-bottom: 2px solid #2c3e50; padding-bottom: 10px;">Publications</h1>
</div>

<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  {% bibliography -f papers -q @*[year={{y}}]* --template bib %}
{% endfor %}

</div>
