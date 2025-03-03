<template>
  <div class="container">
    <h1 class="title">💖 {{ name }}, с 8 Марта! 💖</h1>
    <p class="text">{{ greeting }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useGreetings } from '@/composibles/useGreetings.ts'

const props = defineProps<{ name?: string }>()
const name = computed(() => props.name ?? 'Незнакомка')
const greeting = useGreetings(name)
</script>

<style scoped>
@import './styles.css';
</style>
