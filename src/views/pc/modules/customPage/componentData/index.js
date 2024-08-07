import baseData from './base/index';
import formData from './form/index';
import layoutData from './Layout/index';
import advancedData from './advanced/index';
const data = [{
    title: '布局',
    data: layoutData
  },
  {
    title: '基础',
    data: baseData
  },
  {
    title: '表单',
    data: formData
  },
  {
    title: '高级',
    data: advancedData
  }
];

const componentList = [...baseData, ...layoutData, ...formData, ...advancedData];
export default {
  data,
  componentList
};
