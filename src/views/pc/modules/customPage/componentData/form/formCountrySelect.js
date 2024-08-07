export const formCountrySelect = {
  meta: {
    title: '国家选择',
    description: '国家选择',
    icon: '',
    type: 'formCountrySelect',
    searchInput: '国家选择formcountryselect'
  },
  data: {
    //标题
    titleModel: '国家选择',
    //标题位置
    titlePosition: 'left',
    //标题宽度
    labelColSpan:0,
    //标题偏移
    labelColOffset:0,
    //占位提示
    placeholder: '请输入',
    //描述信息
    tips: '',
    //尺寸
    size: 'small',
    //状态
    behavior: 'normal',
    //多选模式
    multiple:false,
    //全选功能
    hasSelectAll:false,
    //清除按钮
    hasClear:true,
    
    //可搜搜
    showSearch: true,
  
    //TODO 自定义过滤方法
    //选项数据
    options: [
      {
        value:1,
        label:'中国',
        Selected:false //是否选中
      },
      {
        value:2,
        label:'美国',
        Selected:false
      },
      {
        value:3,
        label:'俄罗斯',
        Selected:false
      }
    ],
   
    //唯一标识
    catId: 'countryselect_123',
    //表单标识
    formId: '',
    slotData: {
      name: '123'
    }
  },

  configure: {
    attribute: [
      {
        title: '标题',
        description: '属性: label',
        type: 'string',
        setterType: 'input',
        dataKey: 'titleModel',
        show: true,
        dataName: 'titleModel',
        fnCode: '() => {}'
      },
    
      {
        title: '标题位置',
        description: '属性: labelAlign',
        setterType: 'tabs',
        dataKey: 'titlePosition',
        show: true,
        options: [
          {
            label: '左',
            description: '左侧',
            type: 'string',
            setterType: 'text',
            value: 'left'
          },
          {
            label: '上',
            description: '上',
            type: 'string',
            setterType: 'text',
            value: 'top'
          },
          {
            label: '内部',
            description: '上',
            type: 'string',
            setterType: 'text',
            value: 'inside'
          }
        ],
        fnCode: '() => {}'
      },
      {
        title: '标题宽度',
        description: '属性:labelColSpan',
        dataKey: 'labelColSpan',
        setterType: 'input',
        show: 'left',
        showCondition: 'titlePosition'
      }, {
        title: '标题偏移',
        description: '属性:labelColOffset',
        dataKey: 'labelColOffset',
        setterType: 'input',
        show: 'left',
        showCondition: 'titlePosition'
      },
      {
        title: '描述信息',
        description: '属性: tips|说明: 属性: tips',
        type: 'string',
        setterType: 'richTextEditor',
        dataKey: 'tips',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },

      {
        title: '尺寸',
        setterType: 'tabs',
        description: '属性: size',
        dataName: '',
        dataKey: 'size',
        show: true,
        options: [
          {
            label: '小',
            value: 'small'
          },
          {
            label: '中',
            value: 'default'
          },
          {
            label: '大',
            value: 'large'
          }
        ]
      },
      {
        title: '状态',
        setterType: 'tabs',
        description: '属性: behavior | 说明: 属性:behaviore',
        dataName: '',
        dataKey: 'behavior',
        show: true,
        options: [
          {
            label: '普通',
            value: 'normal'
          },
          {
            label: '禁用',
            value: 'disabled'
          },
          {
            label: '只读',
            value: 'readonly'
          },
          {
            label: '隐藏',
            value: 'hidden'
          }
        ]
      },
      {
        title: '多选模式',
        description: '属性: multiple',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'multiple',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '全选功能',
        description: '属性: hasSelectAll说明: 仅 PC端支持',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'hasSelectAll',
        show: 'multiple'
      },
      {
        title: '清除按钮',
        description: '属性: hasClear',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'hasClear',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
   
      {
        title: '可搜索',
        description: '属性: showSearch',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'showSearch',
        dataName: '',
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
            description:
							'属性: fieldld|说明: 组件的唯一标识符，不能够与其它组件重名不能够为空，且只能够使用以字母开头的，下划线以及数字的组合。',
            type: 'string',
            setterType: 'input',
            dataKey: 'catId',
            show:true
          },
          {
            title: '表单标识',
            description:
							'属性: fieldName]说明: 作为表单提交的 key;当没有该标识时.fie将使用唯一标识作为表单提交 key',
            type: 'string',
            setterType: 'input',
            dataKey: 'formId',
            show:true
          }
        ]
      }
      // {
      //   type: 'slot',
      //   componentPath: 'formCountrySelect'
      // }
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
