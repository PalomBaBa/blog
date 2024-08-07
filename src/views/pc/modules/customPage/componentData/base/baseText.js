
export const baseText = {
  title: '基本文本框',
  meta: {
    title: '基本文本框',
    description: '基本文本框',
    icon: '',
    type: 'baseText',
    searchInput: 'jibenwenbenkuang基本文本框basetext'
  },
  data: {
    contentModel: '文本',
    isTitileShow: false,
    customTitle: '',
    state: 'normal', // normal hidden
    maxRow: 0,
    mobilePadding: '0',
    catId: 'text_llx2kiuk',
    size: '',
    desc: '',
    slotData: {
      name: '123'
    }
  },

  configure: {
    attribute: [
      {
        title: '内容',
        description: '属性: contentModel',
        setterType: 'block',
        show: true
      },
      {
        label: '内容',
        type: 'string',
        setterType: 'textarea',
        dataKey: 'contentModel'
      },
      {
        title: '显示标题',
        description: '属性: showTitle]说明: 将内容显示为html标签的title',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'isTitileShow',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '自定义标题',
        description: '属性: title|说明:自定义标题如果定义了则显示自定义标题，否则默认显示内容作为title',
        type: 'string',
        setterType: 'textarea',
        dataKey: 'customTitle',
        show: 'isTitileShow',
        fnCode: '() => {}'
      },
      {
        title: '默认状态',
        description: '属性: behavior',
        setterType: 'tabs',
        dataKey: 'state',
        show: true,
        options: [
          {
            label: '普通',
            description: 'NORMAL: 控件的基本功能均可提作',
            type: 'string',
            setterType: 'string',
            value: 'normal'
          },
          {
            label: '隐藏',
            description: 'HIDDEN: 运行态时不显示。对应表单数据默认不会提交，可在高级-数据提交中进行配置',
            type: 'string',
            setterType: 'string',
            value: 'hidden'
          }
        ]
      },
      {
        title: '最大行数',
        description: '属性: maxLine | 说明: 超出时自动省略号显示',
        type: 'number',
        setterType: 'input',
        dataKey: 'maxRow',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: 'Mobile 端设置',
        setterType: 'accordion',
        dataName: 'mobilePadding',
        children: [
          {
            title: '左右间距',
            description: '属性: contentPaddingMobile',
            type: 'string',
            setterType: 'tabs',
            dataKey: 'mobilePadding',
            show: true,
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