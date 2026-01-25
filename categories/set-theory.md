---
layout: page
title: A. 집합론
permalink: /categories/set-theory/
---

{% raw %}
{% assign category = "set-theory" %}

<ul class="post-list">
{% for post in site.categories[category] %}
  <li>
    <a href="{{ post.url | relative_url }}">
      {{ post.title }}
    </a>
    <span class="post-meta">
      {{ post.date | date: "%Y-%m-%d" }}
    </span>
  </li>
{% endfor %}
</ul>
{% endraw %}