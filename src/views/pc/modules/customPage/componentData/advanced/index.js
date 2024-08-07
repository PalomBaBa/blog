//白名单 剔除数据 文件名称 baseBtn

const whiteList = [''];
import { advancedJsx } from './advancedJsx.jsx';
// import { dataTable } from './dataTable.js';

let data = [advancedJsx ];
let advanced = { advancedJsx };

const components = import.meta.glob('../advanced/*.js', { eager: true });

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
