<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function toBoxShadow() {
  router.push('/boxshadowpc');
}

</script>

<template>
  <div class="homeBox">
    <span>Coming soon.....</span>
    <el-button @click="toBoxShadow">boxShadow</el-button>
  </div>
</template>

<style scoped lang="scss">
.homeBox {
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 68px;
  color: #fff;
}
</style>
