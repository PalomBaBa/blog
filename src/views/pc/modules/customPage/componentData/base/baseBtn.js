export const baseBtn = {
  meta: {
    title: '按钮',
    description: '按钮',
    icon: '',
    type: 'baseBtn',
    searchInput: 'anniu按钮basebtn'
  },
  data: {
    content: '按钮',
    type: 'default',
    size: 'small', //large default
    state: 'normal',// normal hidden disabled
    icon: '',
    otherIcon: '',
    isLoading: false,
    isClick: false,
    H5Padding: '0',
    catId: 'btn_123',
    desc: '',
    iconName: '',
    slotData: {
      name: '123'
    }
  },
  configure: {
    attribute: [
      {
        title: '标题',
        setterType: 'input',
        show: true,
        dataKey: 'content'
      },
      {
        title: '按钮类型',
        setterType: 'btnTypeSelector',
        show: true,
        dataKey: 'type'
      },
      {
        title: '按钮尺寸',
        setterType: 'tabs',
        dataKey: 'size',
        show: true,
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'default' },
          { label: '大', value: 'large' }
        ]
      },
      {
        title: '状态',
        setterType: 'tabs',
        dataKey: 'state',
        show: true,
        options: [
          {
            label: '普通',
            value: 'normal'
          },
          {
            label: '隐藏',
            value: 'hidden'
          },
          {
            label: '禁用',
            value: 'disabled'
          }
        ]
      },
      {
        title: '基础图标',
        setterType: 'iconSelector',
        dataKey: 'icon',
        show: true
      },
      {
        title: '其他图标',
        setterType: 'input',
        dataKey: 'otherIcon',
        show: true
      },
      {
        title: '加载状态',
        setterType: 'switch',
        dataKey: 'isLoading',
        show: true
      },
      {
        title: '加载点击',
        description: '说明:当按钮为加载状态时，是否响应动作',
        setterType: 'switch',
        dataKey: 'isClick',
        show: true
      },
      {
        title: 'Mobile端设置',
        setterType: 'accordion',
        show: true,
        children: [
          {
            title: '左右间距',
            setterType: 'tabs',
            show: true,
            dataKey: 'H5Padding',
            options: [
              { label: '无间距', value: '0' },
              { label: '16px', value: '16' }
            ]
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
            setterType: 'input',
            show: true,
            dataKey: 'catId'
          }
        ]
      }
    ],
    styles: [
   
    ],
    advanced: []
  },
  events: {
    click: {
      name: 'click',
      title: '点击按钮',
      description: '点击按钮',
      parameters: []
    }
  }
};