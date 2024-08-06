<script setup>

const studyNotesList = [
  {
    title: 'JavaScript',
    icon: 'https://47.121.190.242:21633/down/QCTXvqrgfcg5.png',
    iconStyle:{width:'30px',height:'30px'}
  },
  {
    title: 'Vue',
    icon: 'https://47.121.190.242:21633/down/8eDe2QsudQDc.png',
    iconStyle: { width: '30px', height: '28px' }
  },
  {
    title: 'React',
    icon: 'https://47.121.190.242:21633/down/M4OBpc4Dn56w.png',
    iconStyle: { width: '30px', height: '30px' }
  }
]
</script>

<template>
  <div class="studyNotesBox">
    <div class="studyNotesBox__divider">
      <el-divider content-position="left">前端学习心得</el-divider>
    </div>
    <div class="studyNotesBox__list">
      <el-row :gutter="20" style="width: 100%;">
        <el-col :span="6" v-for="item in studyNotesList" :key="item.title">
          <div class="studyNotesBox__list__item">
            <div class="studyNotesBox__list__item__icon"><img :style="item.iconStyle" :src="item.icon" /></div>
            <div class="studyNotesBox__list__item__title">{{ item.title }}</div>
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

.studyNotesBox__list {
  .studyNotesBox__list__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    border-radius: 10px;
    cursor: pointer;

    .studyNotesBox__list__item__icon {
      width: 30px;
      height: 30px;
      margin-bottom: 16px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .studyNotesBox__list__item__title {
      color: #fff;
      font-size: 20px;
    }
  }

  .studyNotesBox__list__item:hover {
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
</style>
