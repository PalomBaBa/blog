export const baseImge = {
  meta: {
    title: '图片',
    description: '图片',
    icon: '',
    type: 'baseImge',
    searchInput: 'tupian图片baseimge'
  },
  data: {
    contentModel: '',
    // 图片地址
    src:'https://img2.baidu.com/it/u=3400094401,844673487&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
    // 宽度
    width:0,
    // 宽度自适应
    autoWidth:true,
    // 高度
    height:0,
    // 高度自适应
    autoHight:true,
    // 摆放方式
    fit:'cover', // contain fil
    // 圆角
    round:'0',
    // 圆角大小
    roundRadius:0,
    // title
    title:'',
    // 替换文本
    alt:'',
    // 开启图片预览
    review:false,
    size: '',
    desc: '',
    catId:'image_123',
    slotData: {
      name: '123'
    }
  },
  configure:{
    attribute:[
      {
        title: '图片地址',
        description: '属性: src',
        type: 'string',
        setterType: 'input',
        dataKey: 'src',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '宽度',
        description: '属性: width',
        type: 'number',
        setterType: 'input',
        dataKey: 'width',
        show: true,
        fnCode: '() => {}'
      },
     
      {
        title: '宽度自适应',
        description: '属性: autoWidth',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'autoWidth',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '高度',
        description: '属性: height',
        type: 'number',
        setterType: 'input',
        dataKey: 'height',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '高度自适应',
        description: '属性: autoHight',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'autoHight',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '摆放方式',
        description: '属性: fit | 说明:摆放方式',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'fit',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label: '铺满Cover',
            value: 'cover'
          },
          {
            label: '适合Contain',
            value: 'contain'
          },
          {
            label: '拉伸',
            value: 'fil'
          }
        ]
      },
      {
        title: '圆角',
        description: '属性: round | 说明:圆角',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'round',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label: '大(16px)',
            description: '',
            type: 'string',
            setterType: 'string',
            value: '16'
          },
          {
            label: '中(8px)',
            description: '',
            type: 'string',
            setterType: 'string',
            value: '8'
          },
          {
            label: '小(4px)',
            description: '',
            type: 'string',
            setterType: 'string',
            value: '4'
          },
          {
            label: '无(0px)',
            description: '',
            type: 'string',
            setterType: 'string',
            value: '0'
          },
          {
            label: '自定义',
            description: '',
            type: 'string',
            setterType: 'string',
            value: ''
          }
        ]
      },
      {
        title: '圆角大小',
        description: '属性: roundRadius',
        type: 'nubmer',
        setterType: 'input',
        dataKey: 'roundRadius',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: 'title',
        description: '属性:title|说明: html 原生title',
        type: 'string',
        setterType: 'input',
        dataKey: 'title',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '替换文本',
        description: '属性:alt|说明:图片加载失败的占位文字',
        type: 'string',
        setterType: 'input',
        dataKey: 'alt',
        show: true,
        fnCode: '() => {}'
      },
      
      {
        title: '开启图片预览',
        description: '属性:review|说明: 开启图片预览',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'review',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '高级',
        setterType: 'accordion',
        show: true,
        children: [
          {
            title: '唯一标识',
            description: 'fieldl|说明: 组件的唯一标识符，不能够与其它组件重名不能够为空，且只能够使用以字母开头的，下划线以及数字的组合。',
            type: 'string',
            setterType: 'input',
            dataKey: 'catId',
            show:true
          }
        ]
      }
    ],
    styles: [],
    advanced: []
  },
  events: {
    click: {
      name: 'click',
      title: '点击图片',
      description: '点击图片',
      parameters: []
    }
  }
};
