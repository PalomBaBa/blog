// import { formCheckbox } from './formCheckbox';
// import { formDatePicker } from './formDatePicker';
// import { formDateTimePicker} from './formDateTimePicker';
// import { formInput } from './formInput';
// import { formNumberInput } from './formNumberInput';
// import { formRadio } from './formRadio';
// import { formSelect } from './formSelect';
// import { formSelectMultiple} from './formSelectMultiple';
// import {formTextarea} from './formTextarea';
// const formData = [formCheckbox, formDatePicker, formDateTimePicker, formInput, formNumberInput, formRadio, formSelect, formSelectMultiple, formTextarea];
// export default formData;

// import { baseBtn } from './baseBtn';
// import { baseDialog } from './baseDialog';
// import { baseDrawer } from './baseDrawer';
// import { baseIcon } from './baseIcon';
// import { baseImge } from './baseImge';
// import { baseLink } from './baseLink';
// import { baseLinkBlock } from './baseLinkBlock';
// import { baseText } from './baseText';
// import { baseVideo } from './baseVideo';

// const baseData = [baseBtn, baseDialog, baseDrawer, baseIcon, baseImge, baseLink, baseLinkBlock, baseText, baseVideo];

// export default baseData;

//白名单 剔除数据 文件名称 baseBtn

const whiteList = [''];

let data = [];
let advanced = {};
const components = import.meta.glob('../form/*.js', { eager: true });

for (const [key, value] of Object.entries(components)) {
  let componentName = key.replace('./', '');
  componentName = componentName.split('.')[0];
  whiteList.forEach(its => {
    if (its !== componentName) {
      advanced[componentName] = value[componentName];
      data.push(value[componentName]);
    }
  });
}

export { advanced };
export default data;
