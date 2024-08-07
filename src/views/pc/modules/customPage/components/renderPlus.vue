<script setup>
import { ref } from 'vue';
import useEventEmitter from '@/hooks/eventEmitter'

const renderList = ref([])

const group = {
  name: 'componentsList'
};

const { eventEmitter } = new useEventEmitter();

eventEmitter.on('componentClone', (data) => { 
  renderList.value.push(data)
})
</script>

<template>
  <div class="renderPlusBox">
    <VueDraggable :group="group" :sort="false" class="draggable-list">
      
    </VueDraggable>
  </div>
</template>

<style scoped lang="scss">
.renderPlusBox{
  width: 100%;
  height: 100%;
  padding: 20px;
  .draggable-list{
    width: 100%;
    height: 100%;
    display: block;
  }
  .draggable-list:empty{
    background-color: #f2f2f2;
    border: 1px dashed #b9b9b9;
  }
}
</style>
