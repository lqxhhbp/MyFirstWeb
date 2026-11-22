<script setup lang="ts">
import { site } from '../content/site'

const projectsIntro =
  '一些已经完成、正在完善和刚刚开始的事情。每个项目都可以替换成你的真实作品，并补充截图、链接和结果。'
</script>

<template>
  <div class="page projects-page">
    <header class="page-intro">
      <p class="eyebrow">Selected work</p>
      <h1>项目与练习</h1>
      <p class="lead">{{ projectsIntro }}</p>
    </header>

    <section aria-label="项目列表">
      <div class="project-grid">
        <article
          v-for="(project, index) in site.projects"
          :key="project.title"
          class="project-card"
        >
          <div class="project-card__meta">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <span>{{ project.status }}</span>
          </div>
          <h2>{{ project.title }}</h2>
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
      <p class="projects-note">更多作品会在这里持续整理和更新。</p>
    </section>
  </div>
</template>

<style scoped>
.project-card h2 {
  margin-top: auto;
  padding-top: 70px;
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 3vw, 2.8rem);
  font-weight: 500;
}

@media (max-width: 560px) {
  .project-card h2 {
    padding-top: 52px;
  }
}
</style>
