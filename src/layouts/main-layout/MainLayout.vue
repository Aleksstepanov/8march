<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="layout">
      <AnimatedBlobs />
      <router-view />
    </div>
  </n-config-provider>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AnimatedBlobs } from '@/components/animated-blobs'
import { inject } from 'vue'
import { NConfigProvider } from 'naive-ui'

const themeOverrides = inject('themeOverrides')
</script>
<style scoped>
@import './styles.css';
</style>
