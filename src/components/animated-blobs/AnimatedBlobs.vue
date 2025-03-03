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
  z-index: -1;
}

.blob {
  position: absolute;
  width: 300px;
  height: 300px;
  background: rgba(255, 183, 197, 0.3);
  filter: blur(100px);
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
  }
  100% {
    transform: scale(1.2) translateY(-30px);
  }
}
</style>
