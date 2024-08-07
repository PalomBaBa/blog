
export const baseConenter = {
  title:'容器',
  meta: {
    title: '容器',
    description: '容器',
    icon: '',
    type: 'baseContener',
    searchInput: 'rongqi容器basecontener'
  },
  data: {
    catId: 'contener_123',
    visible: 'normal',
    width: '',
    height: '',
    catIdAsDomId: false,
    customStyle:''
  },
  configure: {
    attribute: [
      {
        title: '默认状态',
        description: '属性:visible',
        show: true,
        setterType: 'tabs',
        dataKey: 'visible',
        options: [
          { label: '普通', value: 'normal' },
          { label:'隐藏', value: 'hidden'}
        ]
      },
      {
        title: '宽度',
        description: '属性:width',
        show: true,
        setterType: 'input',
        dataKey:'width'
      },
      {
        title: '高度',
        description: '属性:height',
        show: true,
        setterType: 'input',
        dataKey: 'height'
      },
      {
        title: '高级',
        setterType: 'accordion',
        show: true,
        children: [
          {
            title: '唯一标识',
            description: '属性:catId',
            type: 'string',
            setterType: 'input',
            dataKey: 'catId',
            show:true
          },
          {
            title: '将唯一标识用作DomId',
            setterType: 'block',
            show: true
          },
          {
            setterType: 'switch',
            show: true,
            dataKey:'catIdAsDomId'
          },
          {
            title: '自定义样式表',
            setterType: 'block',
            show: true
          },
          {
            setterType: 'input',
            show: true,
            dataKey: 'customStyle'
          }
        ]
      }
    ],
    styles: [],
    advanced: [],
    rootStyles:''
    // styles: [],
    // advanced: []
  },
  children: [{
    title: '插槽1',
    type: 'slot',
    value: []
  }],
  events: {
    click: {
      title: '点击容器',
      description: '点击容器',
      name: 'click',
      value: []
    },
    init: {
      title: '初始化容器',
      description: '初始化容器',
      name: 'init',
      value: []
    }
  }
};
