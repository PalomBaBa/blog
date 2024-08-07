export const advancedCollapse = {
  title: '折叠面板',
  meta: {
    title: '折叠面板',
    description: '折叠面板',
    icon: '',
    type: 'advancedCollapse',
    searchInput: 'zhediemianban折叠面板advancedcollapse'
  },
  data: {
    //面板单项
    item:'1',
    //手风琴模式
    accordion:false,
    // 子面板分离模式
    separated:false,
    catId:'collapse_llx2kiuk',
    size: '',
    desc: '',
    slotData: {
      name: '123'
    },
    options: [{
      id: 1,
      label: '面板项',
      value: '1',
      Selected: false
    },
    {
      id: 2,
      label: '面板项',
      value: '2',
      Selected: false
    }
    ],
    editInfo: [{
      title: '显示值',
      setterType: 'input',
      show: true,
      dataKey: 'label'
    },
    {
      title: '选项值',
      setterType: 'input',
      show: true,
      dataKey: 'value'
    }

    ]
  },
  
  configure:{
    attribute:[
      {
        setterType: 'radio',
        show: true,
        dataKey:'item'
      },
      {
        title: '手风琴模式',
        description: '属性: accordion',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'accordion',
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
  },
  children: [{
    title: '插槽1',
    type: 'slot',
    value: []
  }]
};