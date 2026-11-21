<script setup lang="ts">
import { site } from '../content/site'

const storyParagraphs = [
  '这段文字是你的个人简介。可以写你现在在做什么、过去做过什么，以及你希望接下来探索的方向。保持具体、真诚，比堆砌形容词更容易让人记住你。',
  '这个网站用来展示作品、记录想法，也为未来的合作留下一扇门。内容不必一次写满，从一小段介绍和一两个真实项目开始就已经足够。',
]
</script>

<template>
  <div class="page about-page">
    <header class="page-intro">
      <p class="eyebrow">About me</p>
      <h1>关于我</h1>
      <p class="lead">
        我是{{ site.name }}，{{ site.role }}。我关心那些看似微小、却能让日常生活更顺手的想法。
      </p>
    </header>

    <div class="about-grid">
      <section class="prose" aria-labelledby="story-title">
        <h2 id="story-title">我的故事</h2>
        <p v-for="paragraph in storyParagraphs" :key="paragraph">{{ paragraph }}</p>
      </section>

      <aside class="fact-card" aria-label="基本信息">
        <p class="fact-card__label">Quick facts</p>
        <dl>
          <div>
            <dt>所在地</dt>
            <dd>{{ site.location }}</dd>
          </div>
          <div>
            <dt>方向</dt>
            <dd>{{ site.role }}</dd>
          </div>
          <div>
            <dt>联系</dt>
            <dd>
              <a class="inline-link" :href="`mailto:${site.email}`">{{ site.email }}</a>
            </dd>
          </div>
        </dl>
      </aside>
    </div>

    <section class="section principles" aria-labelledby="principles-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Principles</p>
          <h2 id="principles-title">我在意的事</h2>
        </div>
      </div>
      <ol class="principle-list">
        <li v-for="(principle, index) in site.principles" :key="principle.title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="contact-panel" aria-labelledby="contact-title">
      <p class="eyebrow">Get in touch</p>
      <div class="contact-panel__row">
        <h2 id="contact-title">想一起做点有趣的事？</h2>
        <a class="button button--light" :href="`mailto:${site.email}`">发一封邮件</a>
      </div>
    </section>
  </div>
</template>
