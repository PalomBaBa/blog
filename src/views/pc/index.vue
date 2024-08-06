<script setup>
import studyNotes from './components/studyNotes/index.vue';
import toolBox from './components/toolBox/index.vue';

</script>

<template>
  <div class="homeBox">
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
    <div class="homeBox__footer">
      <div class="homeBox__footer__text"><a href="https://beian.miit.gov.cn">粤ICP备2023141498号-1</a></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.homeBox {
  width: 100vw;
  height: 100vh;
  background-color: black;
  padding: 60px 90px;
  position: relative;

  .homeBox__titleArea {
    .title {
      font-size: 160px;
      font-weight: 900;
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline;
    }

    .subTitle {
      font-size: 20px;
      color: #fff;
    }
  }

  .homeBox__studyNotes {
    padding: 40px 0;
  }

  .homeBox__footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 30px;

    .homeBox__footer__text a{
      text-decoration: none;
      width: 100%;
      color: #fff;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
