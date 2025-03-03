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
import type { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides = inject<GlobalThemeOverrides | null>('themeOverrides', null)
</script>
<style scoped>
@import './styles.css';
</style>
