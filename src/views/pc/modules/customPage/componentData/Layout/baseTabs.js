export const baseTabs = {
  meta: {
    title: '选项卡',
    description: '选项卡',
    icon: '',
    type: 'baseTabs',
    searchInput: 'xuanxiangka选项卡basetabs'
  },
  data: {
    catId: 'tabs_123',
    type: '',
    Tabs: [
      {
        slotName: '插槽',
        label: '标签项',
        disabled: false
      },
      {
        slotName: '插槽',
        label: '标签项',
        disabled: false
      }
    ],
    size: 'small',
    contentPadding: '',
    excessMode: 'slide',
    unmountInactiveTabs: false,
    needBadge:false
  },
  configure: {
    attribute: [
      {
        id: 1,
        title: '标签项',
        value: [
          {
            title: '插槽1',
            type: 'slot',
            value: []
          }
        ]
      },
      {
        setterType: 'setTabsItem',
        show: true
      },
      {
        title: '形态',
        description: '属性:type',
        setterType: 'tabs',
        dataKey: 'type',
        show: true,
        options: [
          {
            label: '普通',
            value: ''
          },
          {
            label: '卡片型',
            value: 'card'
          },
          {
            label: '带边框卡片型',
            value: 'border-card'
          }
        ]
      },
      {
        title: '大小',
        description: '属性:size',
        setterType: 'tabs',
        dataKey: 'size',
        show: true,
        options: [
          {
            label: '小',
            value: 'small'
          },
          {
            label: '大',
            value: 'big'
          }
        ]
      },
      {
        title: '内容边距',
        description: '属性:contentPadding',
        setterType: 'input',
        dataKey: 'contentPadding',
        show:true
      },
      {
        title: '选项卡过多时的滑动模式',
        description: '属性:excessMode',
        setterType: 'block',
        show: true
      },
      {
        setterType: 'tabs',
        dataKey: 'excessMode',
        show: true,
        options: [
          {
            label: '滑动',
            value: 'slide'
          },
          {
            label: '下拉',
            value: 'drop'
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
            show:true
          },
          {
            title: '切换销毁',
            description: '属性:unmountInactiveTabs',
            setterType: 'switch',
            value: 'unmountInactiveTabs',
            show:true
          },
          {
            title: '开启徽标',
            description: '属性:needBadge',
            setterType: 'switch',
            dataKey: 'needBadge',
            show:true
          }
        ]
      }
    ],
    styles: [],
    advanced: []
  },
  children: [
    {
      title: '标签项0',
      type:'slot',
      value: []
    },
    {
      title: '标签项1',
      type: 'slot',
      value: []
    }
  ]
};