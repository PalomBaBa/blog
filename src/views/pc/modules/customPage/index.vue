<script setup>
import { useRouter } from 'vue-router';
import componetsList from './components/componentsList.vue'
import renderPlus from './components/renderPlus.vue'


const router = useRouter();

function backToHome() {
  router.push('/')
}
</script>

<template>
  <div class="customPageBox">
    <div class="customPageBox__nav">
      <div class="customPageBox_title">
        <div class="customPageBox_title_returnIcon">
          <el-icon style="cursor: pointer;" @click="backToHome">
            <ArrowLeft />
          </el-icon>
        </div>
        <span>自定义页面</span>
      </div>
      <div class="customPageBox_showCodeBtn">
        <el-button>预览</el-button>
        <el-button type="primary">HTML代码</el-button>
      </div>
    </div>
    <div class="customPageBox__content">
      <div class="customPageBox__content__componentList">
        <componetsList />
      </div>
      <div class="customPageBox__content__renderArea">
        <renderPlus />
      </div>
      <div class="customPageBox__content__attributeArea"></div>
    </div>
    <div class="customPageBox__footer">

    </div>
  </div>
</template>

<style scoped lang="scss">
.customPageBox {
  .customPageBox__nav {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #b9b9b9;
    padding: 0 30px;

    .customPageBox_title {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: bolder;

      .customPageBox_title_returnIcon {
        align-items: center;
        display: flex;
        margin-right: 10px;
      }
    }

    .customPageBox_showCodeBtn {
      .el-button--primary {
        font-size: 16px;
      }
    }
  }

  .customPageBox__content {
    display: flex;
    height: calc(100vh - 64px - 64px);

    .customPageBox__content__componentList {
      width: 320px;
      border-right: 1px solid #b9b9b9;
    }

    .customPageBox__content__renderArea {
      flex: 1;
    }

    .customPageBox__content__attributeArea {
      width: 400px;
      border-left: 1px solid #b9b9b9;
    }
  }

  .customPageBox__footer {
    height: 64px;
    border-top: 1px solid #b9b9b9;
  }
}
</style>
