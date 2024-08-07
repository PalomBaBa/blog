export const advancedPopover = {
  title: '气泡提示框',
  meta: {
    title: '气泡提示框',
    description: '气泡提示框',
    icon: '',
    type: 'advancedPopover',
    searchInput: 'qipaotishikuang气泡提示框advancedpopover'
  },
  data: {
    effect:'dark',
    triggerType: 'hover',
    hideAfter:'200',
    placement:'top',
    catId:'popover_llx2kiuk',
    size: '',
    desc: '',
    slotData: {
      name: '123'
    }
  },
  
  configure:{
    attribute:[
      {
        title: '主题',
        description: '属性:  effect',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'effect',
        show: true,
        fnCode: '() => {}',
        options:[
         
          { label: 'dark', value: 'dark' },
          { label: 'light', value: 'light' }
         
        ]
      },
         
      {
        title: '位置',
        description: '属性:  placement',
        type: 'string',
        setterType: 'select',
        dataKey: 'placement',
        show: true,
        fnCode: '() => {}',
        options:[
          { label: 'top', value: 'top' },
          { label: 'top-start', value: 'top-start' },
          { label: 'top-end', value: 'top-end' },
          { label: 'bottom', value: 'bottom' },
          { label: 'bottom-start', value: 'bottom-start' },
          { label: 'bottom-end', value: 'bottom-end' },
          { label: 'left', value: 'left' },
          { label: 'left-start', value: 'left-start' },
          { label: 'left-end', value: 'left-end' },
          { label: 'right', value: 'right' },
          { label: 'right-start', value: 'right-start' },
          { label: 'right-end', value: 'right-end' }
        ]
      },
      {
        title: 'PC端设置',
        setterType: 'accordion',   
        show: true,
        children: [
     
          {
            title: '触发行为',
            description: '属性:  triggerType',
            type: 'string',
            setterType: 'tabs',
            dataKey: 'triggerType',
            show: true,
            fnCode: '() => {}',
            options:[
             
              { label: 'Hover', value: 'hover' },
              { label: 'Click', value: 'click' },
              { label: 'Focus', value: 'focus' }
            ]
          },
          {
            title: '延迟关闭',
            description: '属性:  hide-after',
            type: 'string',
            setterType: 'input',
            dataKey: 'hideAfter',
            show: true
    
         
          }
     
        ]
      },
     
      {
        title: '高级',
        setterType: 'accordion',
        dataKey:'catId',
        show: true,
        children: [
          {
            title: '唯一标识',
            description: '',
            type: 'string',
            setterType: 'input',
            dataKey: 'catId',
            show: true
          }
        ]
      }
      
    ],
    styles:[],
    advanced:[]
  },
  children: [{
    title: '插槽1',
    type: 'slot',
    value: []
  },
  {
    title: '插槽2',
    type: 'slot',
    value: []
  }],
  events: {
    change: {
      name: 'change',
      title: '内容发生变化',
      description: '输入内容变化时触发',
      parameters: [
        {
          name: '新的输入值',
          type: 'string',
          description: '新的输入值',
          key: 'value'
        }
      ]
    }
  }
};