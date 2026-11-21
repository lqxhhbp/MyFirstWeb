<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <a class="skip-link" href="#main-content">跳到主要内容</a>
  <div class="site-shell">
    <SiteHeader />
    <main id="main-content" class="site-main" tabindex="-1">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
