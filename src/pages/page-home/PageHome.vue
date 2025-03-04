<template>
  <div class="container">
    <h1 ref="titleRef" class="title">💖 {{ name }}, с 8 Марта! 💖</h1>
    <p ref="textRef" class="text">{{ greeting }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { useGreetings } from '@/composibles/useGreetings.ts'

const props = defineProps<{ name?: string }>()

const titleRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)

const name = computed(() => props.name ?? 'Незнакомка')
const greeting = useGreetings(name)

onMounted(() => {
  gsap.from(titleRef.value, { opacity: 0, y: -50, duration: 1, ease: 'power2.out' })
  gsap.from(textRef.value, { opacity: 0, y: 50, duration: 1.2, ease: 'power2.out', delay: 0.5 })
})
</script>

<style scoped>
@import './styles.css';
</style>
