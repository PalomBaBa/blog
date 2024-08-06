<script setup>
import pcHome from './pc/index.vue'
import { ref } from 'vue';


const isPc = ref(false);

const isPhone = ref(false)

function isMobile() {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag
}

if (isMobile()) {
  isPhone.value = true;
} else {
  isPc.value = true;
}
</script>

<template>
  <div>
    <pcHome v-if="isPc"/>
  </div>
</template>

<style scoped lang="scss">
.homeBox {
  width: 100vw;
  height: 100vh;
  background-color: var(--bgColor);
}
</style>
