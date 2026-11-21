<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found">
    <div class="not-found__content">
      <p class="not-found__code">404</p>
      <h1>这个页面还不存在</h1>
      <p>可能是地址写错了，也可能它还在路上。</p>
      <RouterLink class="button button--primary" to="/">回到首页</RouterLink>
    </div>
  </div>
</template>
