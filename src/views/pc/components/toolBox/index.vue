<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()
function toBoxShadow() {
  router.push('/boxshadowpc');
}
</script>

<template>
  <div class="toolBox">
    <div class="toolBox__divider">
      <el-divider content-position="left">小工具</el-divider>
    </div>
    <div class="toolBox__list">
      <el-row :gutter="20" style="width: 100%;">
        <el-col :span="6">
          <div class="toolBox__list__item" @click="toBoxShadow">
            <div class="toolBox__list__item__boxShadowIcon"></div>
            <div class="toolBox__list__item__title">CSS盒子阴影</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-divider__text) {
  background: #000;
  color: #c5c5c5;
  font-weight: normal;
}

:deep(.el-divider--horizontal) {
  border-top: 1px solid #c5c5c5;
}

.toolBox__list {
  .toolBox__list__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    border-radius: 10px;
    cursor: pointer;

    .toolBox__list__item__boxShadowIcon {
      width: 40px;
      height: 40px;
      background: #fff;
      margin-bottom: 16px;
      animation-name: boxShadow;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }

    .toolBox__list__item__title {
      color: #fff;
      font-size: 20px;
    }
  }

  .toolBox__list__item:hover {
    animation-name: example;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
}

@keyframes example {
  0% {
    background-color: rgba(255, 255, 255, 0);
    box-shadow: none;
  }

  100% {
    background-color: rgba(255, 255, 255, .1);
    box-shadow: 0px 10px 15px -3px rgba(255, 255, 255, 0.2);
  }
}

@keyframes boxShadow {
  0% {
    box-shadow: 18px -20px 15px -3px rgba(255, 255, 255, 0.3);
  }

  25% {
    box-shadow: 18px 20px 15px -3px rgba(255, 255, 255, 0.3);
  }

  50% {
    box-shadow: -18px 20px 15px -3px rgba(255, 255, 255, 0.3);
  }

  75% {
    box-shadow: -18px -20px 15px -3px rgba(255, 255, 255, 0.3);
  }

  100% {
    box-shadow: 18px -20px 15px -3px rgba(255, 255, 255, 0.2);
  }
}
</style>
