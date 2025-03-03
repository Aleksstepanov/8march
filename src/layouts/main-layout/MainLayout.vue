<template>
  <div class="layout">
    <AnimatedBlobs />
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AnimatedBlobs } from '@/components/animated-blobs'
</script>
<style scoped>
@import './styles.css';
</style>
