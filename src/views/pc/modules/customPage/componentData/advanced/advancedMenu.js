export const advancedMenu = {
  title: '菜单',
  meta: {
    title: '菜单',
    description: '菜单',
    icon: '',
    type: 'advancedMenu',
    searchInput: 'caidanadvancedmenu菜单'
  },
  data: {
    dataSource: `{
      defaultOpenKeys:[
        "key1"
      ],
      defaultSelectedKeys:"key1-1",
      menu:[
        {
          "label": "菜单项一",
          "key": "key1",
          "children": [
            {
              "label": "选项一",
              "key": "key1-1",
              "tag": {
                "text": "初始化",
                "color": "blue"
              }
            },
            {
              "label": "选项二",
              "key": "key1-2"
            }
          ]
        },
      
        {
          "label": "菜单项二",
          "key": "key2",
          "children": [
            {
              "label": "选项一",
              "key": "key2-1"
            },
            {
              "label": "选项二",
              "key": "key2-2"
            }
          ]
        },
        {
          "label": "菜单项三",
          "key": "key3",
          "disabled": true
        }
      ]
    }`,
    mode:'vertical',
    trigger:'click',
    opened:true,
    collapseTransition:true,
    textColor:'#fff',
    backgroundColor:'#000',
    catId: 'menu_llx2kiuk',
    size: '',
    desc: '',
    slotData: {
      name: '123'
    }
  },

  configure: {
    attribute: [
      {
        title: '数据源',
        description: '属性: dataSource | 说明: 点击查看数据格式',
        type: 'string',
        setterType: 'codeEditor',
        dataKey: 'dataSource',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '菜单展示模式',
        description: '属性: mode',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'mode',
        show: true,
        fnCode: '() => {}',
        options:[
         
          { label: '水平', value: 'horizontal' },
          { label: '垂直', value: 'vertical' }
          
        ]
      },
      {
        title: '触发方式',
        description: '子菜单打开的触发方式，只在 mode 为 horizontal 时有效。',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'trigger',
        show: true,
        fnCode: '() => {}',
        options:[
         
          { label: 'hover', value: 'hover' },
          { label: 'click', value: 'click' }
          
        ]
      },
      {
        title: '是否只保持一个子菜单的展开',
        description: '',
        setterType: 'block',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '',
        description: '',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'opened',
        show: true
      },
      {
        title: '是否开启折叠动画',
        description: '',
        setterType: 'block',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '',
        description: '',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'collapseTransition',
        show: true
      },
      {
        title: '文字颜色',
        description: '',
        type: 'string',
        setterType: 'color',
        dataKey: 'textColor',
        show: true
      },
      {
        title: '背景颜色',
        description: '',
        type: 'string',
        setterType: 'color',
        dataKey: 'backgroundColor',
        show: true
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
