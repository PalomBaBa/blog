<script setup>
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus'
import componentData from '../componentData/index.js';
import useEventEmitter from '@/hooks/eventEmitter'


const { eventEmitter } = new useEventEmitter();

const group = {
  name: 'componentsList',
  pull: 'clone',
  put: false,
  sort: false
};

const searchText = ref('');

function componentClone(data) {
  console.log('data: ', data);
  // eventEmitter.emit('componentClone', data)
}
</script>

<template>
  <div class="componentsListBox">
    <div class="componentsListBox__title">组件列表</div>
    <div class="componentsListBox__searchArea">
      <el-input v-model="searchText" placeholder="请输入搜索关键字"></el-input>
    </div>
    <div class="componentsListBox__listArea">
      <div class="componentsListBox__listArea__item" v-for="item in componentData.data" :key="item.title">
        <div class="componentsListBox__listArea__item__title">{{ item.title }}</div>
        <div class="componentsListBox__listArea__item__componentList">
          <VueDraggable v-model="item.data" :group="group" :sort="false" class="draggable-list" :clone="componentClone">
            <div class="componentsListBox__listArea__item__componentList__item" v-for="item2 in item.data"
              @click="componentClone(item2)">
              {{ item2.meta.title }}
            </div>
          </VueDraggable>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.componentsListBox {
  width: 100%;
  height: 100%;

  .componentsListBox__title {
    font-size: 20px;
    font-weight: bold;
    padding: 20px 20px 0;
  }

  .componentsListBox__searchArea {
    margin-top: 10px;
    padding: 0 20px 10px;
  }

  .componentsListBox__listArea {
    height: calc(100% - 48px - 43px - 10px);
    padding: 10px 20px;
    overflow: auto;

    .componentsListBox__listArea__item {
      margin-bottom: 16px;

      .componentsListBox__listArea__item__title {
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: bold;
      }

      .componentsListBox__listArea__item__componentList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .draggable-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .componentsListBox__listArea__item__componentList__item {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          width: 134px;
          margin-bottom: 10px;
          border: 1px solid #b9b9b9;
          padding: 6px 20px;
          cursor: pointer;
        }

        .componentsListBox__listArea__item__componentList__item:hover {
          color: #409eff;
          border: 1px solid #409eff;
        }
      }
    }
  }
}
</style>
