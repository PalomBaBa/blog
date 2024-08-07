export const advancedSteps = {
  title: '步骤条',
  meta: {
    title: '步骤条',
    description: '步骤条',
    icon: '',
    type: 'advancedSteps',
    searchInput: 'buzhoutiao步骤条advancedsteps'
  },
  data: {
    //步骤数据
    dataSource:` [
      {
        title: 'step1',
        status: '', //wait process finish error success
        content: 'Some description',
        icon: '',
        percent: 0,
        disabled: false,
        dataKey: 'step1',
        show: true
      },
      {
        title: 'step2',
        status: '',
        content: 'Some description',
        icon: 'UploadFilled',
        percent: 0,
        disabled: false,
        dataKey: 'step2',
        show: true
      },
      {
        title: 'step3',
        status: '',
        content: 'Some description',
        icon: '',
        percent: 0,
        disabled: false,
        dataKey: 'step3',
        show: true
      },
      {
        title: 'step4',
        status: '',
        content: 'Some description',
        icon: '',
        percent: 0,
        disabled: false,
        dataKey: 'step4',
        show: true
      }
    ]`,
    //当前步骤
    current: 1,
    //类型
    shape: 'circle', //circle  simple
    //展示方向
    direction: 'horizontal',//vertical
    //内容排列
    labelPlacement: 'vertical',
    //只读模式
    readOnly: false,
    //开启动效
    animation: true,
    //内容自定义渲染
    contentRender: '',
    catId: 'steps_llx2kiuk',
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
        description: '属性: dataSource',
        type: 'array',
        setterType: 'codeEditor',
        dataKey: 'dataSource',
        show: true,
        fnCode: '() => {}'
    
      },
    
      {
        title: '当前步骤',
        description: '属性: current',
        type: 'number',
        setterType: 'input',
        dataKey: 'current',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '类型',
        description: '属性: shape',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'shape',
        show: true,
        fnCode: '() => {}',
        options: [
          {
            label: 'circle',
            description: 'circle',
            type: 'string',
            setterType: 'tabs',
            value: 'circle',
            show: true,
            fnCode: '() => {}'
          },

          {
            label: 'simple',
            description: 'simple',
            type: 'string',
            setterType: 'tabs',
            value: 'simple',
            show: true,
            fnCode: '() => {}'
          }
        ]
      },
      {
        title: '展示方向',
        description: '属性: direction',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'direction',
        show: true,
        fnCode: '() => {}',
        options: [
          {
            label: '水平',
            description: '属性：horizontal',
            type: 'string',
            setterType: 'tabs',
            value: 'horizontal',
            show: true,
            fnCode: '() => {}'
          },

          {
            label: '垂直',
            description: '属性：vertical',
            type: 'string',
            setterType: 'tabs',
            value: 'vertical',
            show: true,
            fnCode: '() => {}'
          }
        ]
      },
      {
        title: '内容排列',
        description: '属性: labelPlacement',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'labelPlacement',
        show: true,
        fnCode: '() => {}',
        options: [
          {
            label: '水平',
            description: '属性：horizontal',
            type: 'string',
            setterType: 'tabs',
            value: 'horizontal',
            show: true,
            fnCode: '() => {}'
          },

          {
            label: '垂直',
            description: '属性：vertical',
            type: 'string',
            setterType: 'tabs',
            value: 'vertical',
            show: true,
            fnCode: '() => {}'
          }
        ]
      },
      {
        title: '只读模式',
        description: '属性: readOnly',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'readOnly',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '开启动效',
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
