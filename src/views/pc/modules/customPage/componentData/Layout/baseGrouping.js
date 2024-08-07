export const baseGrouping = {
  meta: {
    title: '分组',
    description: '分组',
    icon: '',
    type: 'baseGrouping',
    searchInput: 'fenzu分组basegrouping'
  },
  data: {
    catId: 'grouping_123',
    title: '分组',
    icon: '',
    visible: 'normal',
    showHeader: true,
    toolTip: '',
    subTitle: '',
    extra: '',
    showHr: true,
    PCBorder: false,
    PCMargin: false,
    PCPadding: true,
    H5Border: false,
    H5Margin: false,
    H5Padding: false
  },
  configure: {
    attribute: [
      {
        title: '默认状态',
        description: '属性:visible',
        setterType: 'tabs',
        dataKey: 'visible',
        show: true,
        options: [
          {
            label: '普通',
            value: 'normal'
          },
          { label: '隐藏', value:'hidden' }
        ]
      },
      {
        title: '分组头部',
        setterType: 'block',
        show:true
      },
      {
        title: '显示头部',
        description: '属性:showHeader',
        show: true,
        setterType: 'switch',
        dataKey: 'showHeader'
      },
      {
        title: '分组标题',
        description: '属性:title',
        show: 'showHeader',
        setterType: 'input',
        dataKey:'title'
      },
      {
        title: '图标',
        description: '属性:Icon',
        show: 'showHeader',
        setterType: 'iconSelector',
        dataKey: 'icon'
      },
      {
        title: '用户提示',
        description: '属性:toolTip',
        show: 'showHeader',
        setterType: 'input',
        dataKey: 'toolTip'
      },
      {
        title: '副标题插槽',
        setterType: 'block',
        show:'showHeader'
      },
      {
        setterType: 'input',
        show: 'showHeader',
        dataKey: 'subTitle'
      },
      {
        title: '扩展区插槽',
        setterType: 'block',
        show: 'showHeader'
      },
      {
        setterType: 'input',
        show: 'showHeader',
        dataKey: 'extra'
      },
      {
        title: '头部分割线',
        setterType: 'switch',
        show: 'showHeader',
        dataKey: 'showHr'
      },
      {
        title: 'PC 端设置',
        setterType: 'accordion',
        show: true,
        children: [
          {
            title: '显示边框',
            setterType: 'switch',
            dataKey: 'PCBorder',
            show:true
          },
          {
            title: '外边距',
            setterType: 'switch',
            dataKey: 'PCMargin',
            show: true
          },
          {
            title: '内填充',
            setterType: 'switch',
            dataKey: 'PCPadding',
            show: true
          }
        ]
      },
      {
        title: 'Mobile 端设置',
        setterType: 'accordion',
        show: true,
        children: [{
          title: '显示边框',
          setterType: 'switch',
          dataKey: 'H5Border',
          show: true
        },
        {
          title: '外边距',
          setterType: 'switch',
          dataKey: 'H5Margin',
          show: true
        },
        {
          title: '内填充',
          setterType: 'switch',
          dataKey: 'H5Padding',
          show: true
        }
        ]
      },
      {
        title: '高级',
        setterType: 'accordion',
        show: true,
        children: [
          {
            title: '唯一标识',
            description: '属性:catId',
            setterType: 'input',
            dataKey: 'catId',
            show: true
          }
        ]
      }
    ],
    styles: [],
    advanced: []
    // styles: [],
    // advanced: []
  },
  children: [{
    title: '插槽1',
    type: 'slot',
    value: []
  }]
};