<script setup>
import { ref } from 'vue';
import studyNotes from './components/studyNotes/index.vue';
import toolBox from './components/toolBox/index.vue';


const theme = ref(false);

const changeTheme = () => {
  document.documentElement.setAttribute('data-theme', theme.value ? 'light' : 'dark')
}
</script>

<template>
  <div class="homeBox">
    <div class="homeBox__nav">
      <div class="homeBox__changeTheme">
        <el-switch @change="changeTheme" v-model="theme" size="large" active-text="Light" inactive-text="Dark" />
      </div>
    </div>
    <div class="homeBox__content">
      <div class="homeBox__titleArea">
        <div class="title">Palom</div>
        <div class="subTitle">一名努力往全栈方向的前端工程师</div>
      </div>
      <div class="homeBox__studyNotes">
        <studyNotes />
      </div>
      <div class="homeBox__toolBox">
        <toolBox />
      </div>
    </div>
    <div class="homeBox__footer">
      <div class="homeBox__footer__text"><a href="https://beian.miit.gov.cn">粤ICP备2023141498号-1</a></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.homeBox {
  min-height: 100vh;
  background-color: var(--bgColor);
  position: relative;

  .homeBox__nav {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }

  .homeBox__content {
    min-height: calc(100vh - 60px - 42px);
    padding: 60px 90px ;

    .homeBox__titleArea {
      .title {
        font-family: 'Microsoft YaHei', '微软雅黑', 'Arial', sans-serif;
        font-size: 160px;
        font-weight: 900;
        background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline;
      }

      .subTitle {
        font-size: 20px;
        color: var(--textColor);
      }
    }

    .homeBox__studyNotes {
      padding: 40px 0;
    }
  }



  .homeBox__footer {
    padding: 10px;

    .homeBox__footer__text a {
      text-decoration: none;
      width: 100%;
      color: var(--textColor);
      display: flex;
      justify-content: center;
    }
  }
}
</style>
