<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="layout">
      <AnimatedBlobs />
      <router-view v-slot="{ Component }">
        <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AnimatedBlobs } from '@/components/animated-blobs'
import { inject } from 'vue'
import { NConfigProvider } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
import gsap from 'gsap'

const themeOverrides = inject<GlobalThemeOverrides | null>('themeOverrides', null)

const beforeEnter = (el: Element) => {
  gsap.set(el, { opacity: 0, y: 50 })
}

const enter = (el: Element, done: () => void) => {
  gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', onComplete: done })
}

const leave = (el: Element, done: () => void) => {
  gsap.to(el, { opacity: 0, y: -50, duration: 0.5, ease: 'power2.in', onComplete: done })
}
</script>

<style scoped>
@import './styles.css';
</style>
