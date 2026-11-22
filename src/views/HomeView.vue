<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { site } from '../content/site'

const featuredProjects = site.projects.slice(0, 2)
</script>

<template>
  <div class="page home-page">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__copy">
        <p class="eyebrow">Personal site · Vue 3</p>
        <h1 id="hero-title">{{ site.headline }}</h1>
        <p class="lead">{{ site.intro }}</p>

        <div class="button-row">
          <RouterLink class="button button--primary" to="/projects">看看我的项目</RouterLink>
          <RouterLink class="button button--ghost" to="/about">认识我</RouterLink>
        </div>

        <p class="availability">
          <span class="availability__dot" aria-hidden="true"></span>
          {{ site.availability }}
        </p>
      </div>

      <aside class="now-card" aria-label="当前状态">
        <div class="now-card__top">
          <span>Now</span>
          <span>{{ site.location }}</span>
        </div>
        <p class="now-card__label">最近在做</p>
        <ol class="focus-list">
          <li v-for="(item, index) in site.currentFocus" :key="item">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            {{ item }}
          </li>
        </ol>
        <a class="text-link" :href="`mailto:${site.emails.join(',')}`">
          一起聊聊
          <span aria-hidden="true">↗</span>
        </a>
      </aside>
    </section>

    <section class="section" aria-labelledby="featured-projects-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Selected work</p>
          <h2 id="featured-projects-title">最近的项目</h2>
        </div>
        <RouterLink class="text-link" to="/projects"
          >查看全部 <span aria-hidden="true">→</span></RouterLink
        >
      </div>

      <div class="project-grid">
        <article
          v-for="(project, index) in featuredProjects"
          :key="project.title"
          class="project-card"
        >
          <div class="project-card__meta">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <span>{{ project.status }}</span>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div v-if="project.link || project.giteeLink" class="project-card__links">
            <a
              v-if="project.link"
              class="project-card__link"
              :href="project.link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub 仓库
              <span aria-hidden="true">↗</span>
            </a>
            <a
              v-if="project.giteeLink"
              class="project-card__link"
              :href="project.giteeLink"
              target="_blank"
              rel="noreferrer"
            >
              Gitee 仓库
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ul class="tag-list" aria-label="项目标签">
            <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="contact-panel" aria-labelledby="contact-title">
      <p class="eyebrow">Say hello</p>
      <div class="contact-panel__row">
        <h2 id="contact-title">有想法，欢迎来信。</h2>
        <div class="contact-emails">
          <a
            v-for="email in site.emails"
            :key="email"
            class="button button--light"
            :href="`mailto:${email}`"
          >
            {{ email }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
