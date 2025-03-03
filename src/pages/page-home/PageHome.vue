<template>
  <div class="container">
    <h1 class="title">💖 {{ name }}, с 8 Марта! 💖</h1>
    <p class="text">{{ randomGreeting }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{ name?: string }>()

const name = computed(() => props.name || 'Незнакомка')

const greetings = [
  `Дорогая ${name.value}, пусть этот день будет полон радости и улыбок!`,
  `${name.value}, желаю счастья, вдохновения и море цветов! 🌸`,
  `С 8 Марта, ${name.value}! Ты прекрасна! 💖`,
  `Милая ${name.value}, пусть твоя жизнь будет наполнена теплом и любовью! 💐`
]

const randomGreeting = computed(() => greetings[Math.floor(Math.random() * greetings.length)])
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Marck Script', cursive;
  color: #e91e63;
}

.text {
  font-size: 1.5rem;
  max-width: 600px;
  line-height: 1.5;
  font-style: italic;
  color: #6d214f;
}

/* Анимация */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
