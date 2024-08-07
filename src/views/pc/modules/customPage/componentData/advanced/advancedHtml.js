export const advancedHtml = {
  title: 'HTML',
  meta: {
    title: 'HTML',
    description: 'HTML',
    icon: '',
    type: 'advancedHtml',
    searchInput: 'HTMLhtml'
  },
  data: {
    content: '<p>这里是自定义HTML内容</p>',
    catId:'html_llx2kiuk',
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