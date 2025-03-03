<template>
  <div class="container">
    <h1 class="title">Как тебя зовут, прекрасная незнакомка? 💖</h1>
    <NInput
      v-model:value="name"
      placeholder="Напиши своё имя..."
      size="large"
      class="input"
    />
    <NButton type="primary" size="large" class="button" @click="goToHome"> Продолжить ✨ </NButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NInput, NButton } from 'naive-ui'

const name = ref('')
const router = useRouter()

const goToHome = () => {
  if (name.value.trim()) {
    router.push({
      name: 'home',
      query: { name: name.value }
    })
  }
}
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
  z-index: 20;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeIn 2s ease-in-out forwards;
}

.input {
  width: 80%;
  max-width: 300px;
  margin-bottom: 20px;
  animation: fadeInUp 1.5s ease-in-out 0.3s forwards;
  opacity: 0;
}

.button {
  background-color: #e91e63; /* Нежно-розовый */
  border: none;
  color: white;
  font-size: 1.1rem;
  padding: 10px 20px;
  border-radius: 8px;
  transition:
    background 0.3s ease-in-out,
    transform 0.2s ease;
  font-family: 'Marck Script', cursive;
}

.button:hover {
  background-color: #d81b60; /* Темнее при наведении */
  transform: scale(1.05);
}

.button:active {
  transform: scale(0.95);
}

/* Анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
