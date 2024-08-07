export const baseLink = {
  meta: {
    title: '链接',
    description: '链接',
    icon: '',
    type: 'baseLink',
    searchInput: 'lianjie链接baselink'
  },
  data: {
    //内容
    contentLink: '这是一个链接',
    //单行截断
    isOneCut: false,
    //链接类型
    type: 'inside',
    //选择页面内部
    pageUrl: '',
    //外部链接
    url: '',
    //新开页面
    isBlank: false,
    //携带参数
    options: [
      {
        key: 'key',
        value: 'bat'
      }
    ],
    //
    catId: 'link_123',
    size: '',
    desc: '',
    iconName: '',
    slotData: {
      name: '123'
    }
  },
  configure: {
    attribute: [
      {
        title: '内容',
        setterType: 'input',
        show: true,
        description: '属性:content',
        dataKey: 'contentLink'
      },
      {
        title: '单行截断',
        setterType: 'switch',
        show: true,
        description: '属性:isOneCut',
        dataKey: 'isOneCut'
      },
      {
        title: '链接设置',
        setterType: 'block',
        show: true
      },
      {
        title: '链接类型',
        setterType: 'tabs',
        show: true,
        dataKey: 'type',
        options: [
          { label: '内部页面', value: 'inside' },
          { label: '外部链接', value: 'outside' }
        ]
      },
      {
        title: '选择页面',
        setterType: 'input',
        showCondition: 'type',
        show: 'inside',
        dataKey: 'pageUrl'
      },
      {
        title: '链接地址',
        description: '属性:url',
        setterType: 'input',
        showCondition: 'type',
        show: 'outside',
        dataKey: 'url'
      },
      {
        title: '新开页面',
        description: '属性:isBlank',
        setterType: 'switch',
        dataKey: 'isBlank',
        show: true
      },
      {
        title: '携带参数',
        setterType: 'block',
        show: true
      },
      {
        setterType: 'linkParamsSetter',
        show: true,
        options: [
          {
            label: 'key',
            value: 'bat'
          }
        ],
        editInfo: [
          {
            title: '参数名',
            setterType: 'input',
            show: true,
            dataKey: 'label'
          },
          {
            title: '参数值',
            setterType: 'input',
            show: true,
            dataKey: 'value'
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
            show: true,
            dataKey: 'catId'
          }
        ]
      }
    ],
    styles: []
  }
};
