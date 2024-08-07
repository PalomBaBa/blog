export const formContainer = {
  title: '表单容器',
  meta: {
    title: '表单容器',
    description: '表单容器',
    icon: '',
    type: 'formContainer',
    searchInput: 'biaodanrongqi表单容器formcontainer'
  },
  data: {
    content: '<p>这里是自定义HTML内容</p>',
    catId:'formcontainer_llx2kiuk',
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
        description: '属性: content',
        type: 'string',
        setterType: 'richTextEditor',
        dataKey: 'content',
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
    styles: [],
    advanced: []
  },
  children: [{
    title: '插槽1',
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