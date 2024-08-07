export const advancedJsx = {
  title: 'JSX',
  meta: {
    title: 'JSX',
    description: 'JSX',
    icon: '',
    type: 'advancedJsx',
    searchInput: 'JSXjsx'
  },
  data: {
    render:function render() {
      return (
        <div>
              此为自定义代码组件，请使用 JSX 语法111
        </div>
      );
    },
    catId:'jsx_llx2kiuk',
    size: '',
    desc: '',
    slotData: {
      name: '123'
    }
  },
  
  configure:{
    attribute:[
      {
        title: 'render',
        description: '属性: render | 说明:可使用JSX代码',
        type: 'function',
        setterType: 'codeEditor',
        dataKey: 'renders',
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