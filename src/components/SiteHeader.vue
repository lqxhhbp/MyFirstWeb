<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { site } from '../content/site'
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink class="brand" to="/" :aria-label="`${site.name}的首页`">
        <span class="brand__mark" aria-hidden="true">{{ site.initials }}</span>
        <span class="brand__name">{{ site.name }}</span>
      </RouterLink>

      <nav class="site-nav" aria-label="主要导航">
        <RouterLink to="/" exact-active-class="is-active">首页</RouterLink>
        <RouterLink to="/projects" active-class="is-active">项目</RouterLink>
        <RouterLink to="/about" active-class="is-active">关于</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  width: min(100% - 40px, var(--content-width));
  margin: 0 auto;
  padding: 28px 0;
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--color-line);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  font-size: 0.92rem;
  font-weight: 700;
}

.brand__mark {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  color: #fffdf7;
  background: var(--color-ink);
  border-radius: 50%;
  font-family: var(--font-display);
  font-size: 1rem;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.site-nav a {
  padding: 8px 13px;
  color: var(--color-muted);
  border-radius: 999px;
  font-size: 0.86rem;
  font-weight: 600;
  transition:
    color 160ms ease,
    background-color 160ms ease;
}

.site-nav a:hover,
.site-nav a.is-active {
  color: var(--color-ink);
  background: rgba(255, 253, 247, 0.64);
}

@media (max-width: 560px) {
  .site-header {
    width: min(100% - 28px, var(--content-width));
    padding-top: 20px;
  }

  .site-header__inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }

  .site-nav {
    width: 100%;
    justify-content: space-between;
  }

  .site-nav a {
    padding-inline: 12px;
  }
}
</style>
