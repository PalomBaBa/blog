export const advancedProgress = {
  title: '进度条',
  meta: {
    title: '进度条',
    description: '进度条',
    icon: '',
    type: 'advancedProgress',
    searchInput: 'jindutiao进度条advancedprogress'
  },
  data: {
    //尺寸
    size: 'default', //large default
    //形态sa
    shape:'line',//circle line
    //百分比
    percent:30,
    //状态
    state:'', // success exception
    // 边框
    hasBorder:false,
    // 色彩阶段变化模式
    progressive:false,
    catId:'progress_llx2kiuk',
    
    desc: '',
    slotData: {
      name: '123'
    }
  },
  
  configure:{
    attribute:[
      {
        title: '尺寸',
        setterType: 'tabs',
        dataKey: 'size',
        show: true,
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'default' },
          { label: '大', value: 'large' }
        ]
        
      },
      {
        title: '形态',
        setterType: 'tabs',
        dataKey: 'shape',
        show: true,
        options: [
          { label: '圆形', value: 'circle' },
          { label: '线性', value: 'line' }
        ]
        
      },
      {
        title: '百分比',
        description: '属性: percent',
        type: 'number',
        setterType: 'input',
        dataKey: 'percent',
        show: true,
        fnCode: '() => {}'
      },  
      {
        title: '状态',
        setterType: 'tabs',
        dataKey: 'state',
        show: true,
        options: [
          { label: 'normal', value: '' },
          { label: 'success', value: 'success' },
          { label: 'exception', value: 'exception' }
        ]
        
      },
      {
        title: '边框',
        description: '属性: hasBorder',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'hasBorder',
        show: true,
        fnCode: '() => {}'
      },  
      {
        title: '色彩阶段变化模式',
        description: '属性: progressive',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'progressive',
        show: true,
        fnCode: '() => {}'
      },  
      {
        title: '高级',
        setterType: 'accordion',
   
        show: true,
        children: [
          {
            title: '唯一标识',
            description: '',
            type: 'string',
            setterType: 'input',
            show: true,
            dataKey: 'catId'
          }
        ]
      }
    ],
    styles:[],
    advanced:[]
  },
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