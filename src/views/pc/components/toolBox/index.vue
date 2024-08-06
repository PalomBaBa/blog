<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';


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
            <div class="toolBox__list__item__boxShadowIcon">
              
            </div>
            <div class="toolBox__list__item__title">CSS盒子阴影</div>
          </div>
        </el-col>
        <el-col :span="6" >
          <div class="toolBox__list__item" >
            <div class="toolBox__list__item__customPageIcon">
              <i class="iconfont icon-yemian" style="color: var(--textColor);font-size: 40px;"></i>
            </div>
            <div class="toolBox__list__item__title">自定义页面</div>
            <div class="toolBox__list__item__subTitle">coming soon...</div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<style scoped lang="scss">
:deep(.el-divider__text) {
  background: var(--divideTextBgColor);
  color: var(--divideTextColor);
  font-weight: normal;
}

:deep(.el-divider--horizontal) {
  border-top: 1px solid var(--divideTextColor);
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
      background: var(--textColor);
      margin-bottom: 16px;
      animation-name: boxShadow;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }

    .toolBox__list__item__customPageIcon{
      width: 40px;
      height: 40px;
      margin-bottom: 16px;
    }

    .toolBox__list__item__title {
      color: var(--textColor);
      font-size: 20px;
    }

    .toolBox__list__item__subTitle{
      color: var(--textColor);
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
    background-color: var(--animationStartColor);
    box-shadow: none;
  }

  100% {
    background-color: var(--animationEndColor);
    box-shadow: 0px 10px 15px -3px var(--boxShadowColor);
  }
}

@keyframes boxShadow {
  0% {
    box-shadow: 18px -20px 15px -3px var(--boxShadowColor);
  }

  25% {
    box-shadow: 18px 20px 15px -3px var(--boxShadowColor);
  }

  50% {
    box-shadow: -18px 20px 15px -3px var(--boxShadowColor);
  }

  75% {
    box-shadow: -18px -20px 15px -3px var(--boxShadowColor);
  }

  100% {
    box-shadow: 18px -20px 15px -3px var(--boxShadowColor);
  }
}
</style>
