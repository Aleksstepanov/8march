<template>
  <div class="blobs">
    <div v-for="(_, index) in blobs" :key="index" ref="blobRefs" class="blob"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

// Цвета для пятен
const randomColors = [
  'radial-gradient(circle, rgba(255, 0, 100, 0.9) 10%, rgba(255, 100, 150, 0.5) 70%)',
  'radial-gradient(circle, rgba(255, 140, 0, 0.9) 10%, rgba(255, 200, 100, 0.5) 70%)',
  'radial-gradient(circle, rgba(0, 150, 255, 0.9) 10%, rgba(100, 200, 255, 0.5) 70%)',
  'radial-gradient(circle, rgba(0, 255, 100, 0.9) 10%, rgba(100, 255, 150, 0.5) 70%)'
]

const blobs = ref(new Array(10).fill(null))
const blobRefs = ref<HTMLElement[]>([])

onMounted(() => {
  blobRefs.value.forEach((blob, index) => {
    blob.style.background = randomColors[Math.floor(Math.random() * randomColors.length)]

    gsap.set(blob, {
      x: 0,
      y: 0,
      scale: 0,
      opacity: 1
    })

    gsap.to(blob, {
      scale: Math.random() * 3 + 2,
      opacity: 0,
      x: (Math.random() - 0.5) * window.innerWidth * 1.5,
      y: (Math.random() - 0.5) * window.innerHeight * 1.5,
      rotation: Math.random() * 360,
      duration: 1.2 + Math.random(),
      ease: 'power4.out',
      delay: index * 0.1,
      repeat: -1,
      yoyo: true
    })
  })
})
</script>

<style scoped>
.blobs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
}

.blob {
  position: absolute;
  width: 20vw;
  height: 20vw;
  max-width: 300px;
  max-height: 300px;
  border-radius: 50%;
  filter: blur(20px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
