export const advancedTimeline = {
  title: '时间线',
  meta: {
    title: '时间线',
    description: '时间线',
    icon: '',
    type: 'advancedTimeline',
    searchInput: 'shijianxian时间线advancedtimeline'
  },
  data: {
    //时间线数据
    dataSource: `[
      {
        content: '春天',
        timestamp: '2023-04-12 20:46',
        size: 'large', //'normal' | 'large'
        type: 'primary', //'primary' | 'success' | 'warning' | 'danger' |
        icon: ''
      },
      {
        content: '夏天',
        timestamp: '2023-07-12 20:46',
        size: 'large', //'normal' | 'large'
        type: '', //'primary' | 'success' | 'warning' | 'danger' |
        icon: ''
      },
      {
        content: '秋天',
        timestamp: '2023-10-12 20:46',
        size: 'large', //'normal' | 'large'
        type: '', //'primary' | 'success' | 'warning' | 'danger' |
        icon: ''
      },
      {
        content: '冬天',
        timestamp: '2023-12-12 20:46',
        size: 'large', //'normal' | 'large'
        type: '', //'primary' | 'success' | 'warning' | 'danger' |
        icon: ''
      }
    ]`,
    //折叠配置
    fold: [
      {
        foldArea: [1, 2],
        foldShow: false
      }
    ],
    //动画
    animation: true,
    catId: 'timeline_llx2kiuk',
    size: '',
    desc: '',
    slotData: {
      name: '123'
    }
  },

  configure: {
    attribute: [
    
     
      {
        title: '步骤数据',
        setterType: 'codeEditor',
        dataKey: 'dataSource',
        show: true
      },
      {
        title: '动画',
        description: '属性: animation',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'animation',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '高级',
        setterType: 'accordion',
        dataKey: 'catId',
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
