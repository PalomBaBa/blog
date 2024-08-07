export const advancedIframe = {
  title: 'iframe',
  meta: {
    title: 'iframe',
    description: 'advancedIframe',
    icon: '',
    type: 'advancedIframe',
    searchInput: 'iframeadvancedIframe'
  },
  data: {
    title: 'iframe组件',
    src:'https://www.baidu.com/',
    //高度自适应
    autoFit:false,
    catId:'iframe_llx2kiuk',
    size: '',
    desc: '',
    slotData: {
      name: '123'
    }
  },
  
  configure:{
    attribute:[
      {
        title: '内容',
        description: '属性: title',
        type: 'string',
        setterType: 'input',
        dataKey: 'title',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: 'iFrame 地址',
        description: '属性: src',
        type: 'string',
        setterType: 'input',
        dataKey: 'src',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '高度自适应',
        description: '属性: autoFit',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'autoFit',
        show: true,
        fnCode: '() => {}'
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