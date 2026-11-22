<script setup lang="ts">
import { site } from '../content/site'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <p>© {{ currentYear }} {{ site.name }}</p>
      <p>用 Vue 3 搭建 · 保持好奇</p>
      <div class="footer-emails">
        <a v-for="email in site.emails" :key="email" :href="`mailto:${email}`">{{ email }}</a>
      </div>
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

.footer-emails {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 4px 14px;
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

  .footer-emails {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
