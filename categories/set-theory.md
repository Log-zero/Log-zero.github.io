---
layout: page
title: A. 집합론
permalink: /categories/set-theory/
---

<div class="post-list">
{% for post in site.categories["set-theory"] %}
  <article class="post-item">
    <a class="post-link" href="{{ post.url | relative_url }}">
      <h2 class="post-title">{{ post.title }}</h2>

      <div class="post-meta">
        {{ post.date | date: "%Y-%m-%d" }}
      </div>

    </a>
  </article>
{% endfor %}
</div>