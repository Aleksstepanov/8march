<template>
  <div class="blobs">
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
  </div>
</template>

<style scoped>
.blobs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 5;
}

.blob {
  position: absolute;
  width: 20vw;
  height: 20vw;
  max-width: 400px;
  max-height: 400px;
  background: radial-gradient(circle, rgba(255, 100, 150, 0.8) 30%, rgba(255, 140, 197, 0.5) 100%);
  filter: blur(10vw);
  border-radius: 50%;
  animation: moveBlobs 10s infinite alternate ease-in-out;
}

.blob:nth-child(1) {
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.blob:nth-child(2) {
  top: 50%;
  left: 60%;
  animation-delay: 2s;
}

.blob:nth-child(3) {
  top: 80%;
  left: 30%;
  animation-delay: 4s;
}

@keyframes moveBlobs {
  0% {
    transform: scale(1) translateY(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.3) translateY(-5vh);
    opacity: 0.5;
  }
}
@media (max-width: 768px) {
  .blob {
    width: 40vw;
    height: 40vw;
    filter: blur(15vw);
  }
}
</style>
