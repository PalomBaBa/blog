export const advancedRichText = {
  title: '图文展示',
  meta: {
    title: '图文展示',
    description: '图文展示',
    icon: '',
    type: 'advancedRichText',
    searchInput: 'tuwenzhanshi图文展示richText'
  },
  data: {
    content: '图文展示',

    behavior: 'normal', // normal hidden
    //图片预览
    imagePreview: 'none', //none pc h5 all
    //左右间距
    mobilePadding: '0',
    //是否折叠
    isFold: false,
    //折叠高度
    foldHeight: 50,
    catId: 'richText_llx2kiuk',
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
        description: '属性: content',
        type: 'string',
        setterType: 'richTextEditor',
        dataKey: 'content',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '状态',
        setterType: 'tabs',
        description: '属性: behavior | 说明: 属性:behaviore',
        dataName: '',
        type: 'string',
        dataKey: 'behavior',
        show: true,
        options: [
            
          { label: '普通', value: 'normal' },
          { label: '隐藏', value: 'hidden' }
          
        ]
      },
      {
        title: '图片预览',
        description: '属性:  imagePreview',
        type: 'string',
        setterType: 'select',
        dataKey: 'imagePreview',
        show: true,
        fnCode: '() => {}',
        options: [
          {
            label: '不支持',
            description: '属性:  none',
            type: 'string',
            setterType: 'text',
            value: 'none',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: '仅PC端支持',
            description: '属性:  pc',
            type: 'string',
            setterType: 'text',
            value: 'pc',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: '仅无线端支持',
            description: '属性: h5',
            type: 'string',
            setterType: 'text',
            value: 'h5',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: 'PC端,无线端都支持',
            description: '属性: all',
            type: 'string',
            setterType: 'text',
            value: 'all',
            show: true,
            fnCode: '() => {}'
          }
        ]
      },
      {
        title: 'Mobile 端设置',
        setterType: 'accordion',

        show: true,
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
