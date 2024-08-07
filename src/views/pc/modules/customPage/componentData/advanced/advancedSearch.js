export const advancedSearch = {
  title: '搜索',
  meta: {
    title: '搜索',
    description: '搜索',
    icon: '',
    type: 'advancedSearch',
    searchInput: 'soushuo搜索advancedsearch'
  },
  data: {
    //提示文字
    placeholder:'请输入',
    //默认值
    defaultValue:'',
    //按钮名称
    searchText:'搜索',
    //尺寸
    size:'default', 
    //类型
    type:'primary',//primary success 
    // 形状
    shape:'normal', //simple normal
    //自动聚焦
    autoFocus:false,
    //是否禁用
    disabled:false,
    //清除按钮
    hasClear:false,
    // 搜索框下拉联想列表
    dataSource:`[
      {
        'label': '天猫',
        'value': 'value1'
      },
      {
        'label': '淘宝',
        'value': 'value2'
      },
      {
        'label': '阿里巴巴',
        'value': 'value3'
      }
    ]`,
    isFilter:false,
    // 选择器数据
    filter:`[
      {
        'label': 'one',
        'value': 'one'
      },
      {
        'label': 'two',
        'value': 'two'
      },
      {
        'label': 'three',
        'value': 'three'
      }
    ]`,
    // 选择器默认值
    defaultFilterValue:'one',
    catId:'search_llx2kiuk',
   
    desc: '',
    slotData: {
      name: '123'
    }
  },
  
  configure:{
    attribute:[
      {
        title: '提示文字',
        description: '属性: placeholder',
        type: 'string',
        setterType: 'input',
        dataKey: 'placeholder',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '默认值',
        description: '属性: defaultValue',
        type: 'string',
        setterType: 'input',
        dataKey: 'defaultValue',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '按钮名称',
        description: '属性: searchText',
        type: 'string',
        setterType: 'input',
        dataKey: 'searchText',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '尺寸',
        description: '属性: size',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'size',
        show: true,
        fnCode: '() => {}',
        options:[
         
          { label: '中', value: 'default' },
          { label: '大', value: 'large' }
          
        ]
      },
      {
        title: '类型',
        description: '属性: type',
        type: 'string',
        setterType: 'select',
        dataKey: 'type',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label: '主要的',
            description: '属性:  primary',
            type: 'string',
            setterType: 'text',
            value: 'primary',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: '成功的',
            description: '属性:  success',
            type: 'string',
            setterType: 'text',
            value: 'success',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: '常规的',
            description: '属性:  ',
            type: 'string',
            setterType: 'text',
            value: '',
            show: true,
            fnCode: '() => {}'
          }
        ]
      },
      {
        title: '形状',
        description: '属性: shape',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'shape',
        show: true,
        fnCode: '() => {}',
        options:[
         
          { label: 'normal', value: 'normal' },
          { label: 'simple', value: 'simple' }
          
        ]
      },
      {
        title: '自动聚焦',
        description: '属性: autoFocus',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'autoFocus',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '是否禁用',
        description: '属性: disabled',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'disabled',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '清除按钮',
        description: '属性: hasClear',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'hasClear',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '搜索框下拉联想列表(仅 PC 端支持)',
        setterType: 'accordion',
       
        show: true,
        children: [
          {
            title: '编辑代码',
            show: true,
            description: '',
            type: 'array',
            setterType: 'codeEditor',
            dataKey: 'dataSource'
          },
          {
            title: '开启选择器(仅 PC 端支持)',
            show: true,
            description: '',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'isFilter'
          },
          {
            title: '选择器数据',
            show: 'isFilter',
            description: '',
            type: 'array',
            setterType: 'codeEditor',
            dataKey: 'filter'
          }
        ]
      },
      {
        title: '高级',
        setterType: 'accordion',
        dataKey:'catId',
        show: true,
        children: [
          {
            title: '唯一标识',
            show: true,
            description: '',
            type: 'string',
            setterType: 'input',
            dataKey: 'catId'
          }
        ]
      }
    ],
    styles:[],
    advanced:[]
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