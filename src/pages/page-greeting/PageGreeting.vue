<template>
  <div class="container">
    <h1 class="title">Как тебя зовут, прекрасная незнакомка? 💖</h1>
    <NInput v-model:value="name" placeholder="Напиши своё имя..." size="large" class="input" />
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
@import './styles.css';
</style>
