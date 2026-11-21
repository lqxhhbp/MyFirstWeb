<script setup lang="ts">
import { site } from '../content/site'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <p>© {{ currentYear }} {{ site.name }}</p>
      <p>用 Vue 3 搭建 · 保持好奇</p>
      <a :href="`mailto:${site.email}`">{{ site.email }}</a>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: min(100% - 40px, var(--content-width));
  margin: 0 auto;
}

.site-footer__inner {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 0 32px;
  color: var(--color-muted);
  border-top: 1px solid var(--color-line);
  font-size: 0.76rem;
}

.site-footer a:hover {
  color: var(--color-accent-dark);
}

@media (max-width: 700px) {
  .site-footer {
    width: min(100% - 28px, var(--content-width));
  }

  .site-footer__inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }
}
</style>
