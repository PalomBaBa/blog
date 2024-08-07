export const formSelectMultiple = {
  meta: {
    title: '下拉多选',
    description: '下拉多选',
    icon: '',
    type: 'formSelectMultiple',
    searchInput: 'xialaduoxuan下拉多选formselectmultiple'
  },
  data: {
    //标题
    titleModel: '下拉多选',
    //默认值
    value: '',
    //标题位置
    titlePosition: 'left',
    //标题宽度
    labelColSpan:0,
    //标题偏移
    labelColOffset:0,
    //占位提示
    placeholder: '请选择',
    //描述信息
    tips: '',
    //尺寸
    size: 'small',
    //状态
    behavior: 'normal',
    // 标题提示
    labelTipsTypes:'none',
    //提示图标
    labelTipsIcon:'',
    //提示内容
    labelTipsText:'',
    options:[
      {
        id:1,
        value:1,
        label:'选择一',
        Selected:false //是否选中
      },
      {
        id:2,
        value:2,
        label:'选择二',
        Selected:false
      },
      {
        id:3,
        value:3,
        label:'选择三',
        Selected:false
      }
    ],
    editInfo: [
      {
        title: '显示值',
        setterType: 'input',
        show: true,
        dataKey:'label'
      },
      {
        title: '选项值',
        setterType: 'input',
        show: true,
        dataKey:'value'
      },
      {
        title: '默认选中',
        setterType: 'switch',
        show: true,
        dataKey:'Selected'
      }
    ],
    //下拉菜单宽度限制
    autoWidth: false,
    //全选功能
    hasSelectAll:false,
    //可搜搜
    showSearch: true,
    //本地过滤
    filterLocal: false,
    //TODO 自定义过滤方法
    //选项数据
    dataSource: [
    
    ],
    //  value 使用对象类型{label, value}
    useDetailValue:false,
    //校验
    //必填
    required: false,
    //其他配置
    //为空文案
    notFoundContent:'暂无数据',
    //下拉箭头
    hasArrow:true,
    //边框
    hasBorder:true,
    //下拉等宽
    oautoWidth:true,
    // 搜索延迟
    searchDelay:300,
    //TODO定制渲染只读态
    //唯一标识
    catId: 'selectmultiple_123',
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
        title: '默认值',
        description: '属性: value',
        type: 'string',
        setterType: 'block',
        dataKey: 'value',
        dataName: '',
        show: true,
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
            description: '内部',
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
      },
      {
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
            description: '小号尺寸',
            type: 'string',
            setterType: 'string',
            value: 'small'
          },
          {
            label: '中',
            description: '正常尺寸',
            type: 'string',
            setterType: 'string',
            value: 'default'
          },
          {
            label: '大',
            description: '大号尺寸',
            type: 'string',
            setterType: 'string',
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
            description: 'NORMAL: 控件的基本功能均可提作',
            type: 'string',
            setterType: 'string',
            value: 'normal'
          },
          {
            label: '禁用',
            description: 'DISABLED: UI呈现禁用效果的特定样式',
            type: 'string',
            setterType: 'string',
            value: 'disabled'
          },
          {
            label: '只读',
            description: 'READONLY: 仅显示控件的预置数据的内容，控件不可编辑',
            type: 'string',
            setterType: 'string',
            value: 'readonly'
          },
          {
            label: '隐藏',
            description:
							'HIDDEN: 运行态时不显示。对应表单数据默认不会提交，可在高级-数据提交中进行配置',
            type: 'string',
            setterType: 'string',
            value: 'hidden'
          }
        ]
      },
      {
        title: '标题提示',
        description: '属性: labelTipsTypes',
        setterType: 'tabs',
        show: true,
        dataName: '',
        dataKey: 'labelTipsTypes',
        options: [
          {
            label: '无',
            description: 'none',
            type: 'string',
            setterType: 'string',
            value: 'none'
          },
          {
            label: '文本',
            description: 'text',
            type: 'string',
            setterType: 'string',
            value: 'text'
          },
          {
            label: '自定义',
            description: 'render',
            type: 'string',
            setterType: 'string',
            value: 'render'
          }
        ]
      },

      {
        title: '提示图标',
        description: '属性: labelTipsIcon',
        type: 'string',
        setterType: 'iconSelector',
        dataKey: 'labelTipsIcon',
        dataName: '',
        show: 'render',
        showCondition: 'labelTipsTypes',
        fnCode: '() => {}'
      },
      {
        title: '提示内容',
        description: '属性: labelTipsText',
        type: 'string',
        setterType: 'richTextEditor',
        dataKey: 'labelTipsText',
        dataName: '',
        show: 'render',
        showCondition: 'labelTipsTypes',
        fnCode: '() => {}'
      },
      {
        title: '提示图标',
        description: '属性: labelTipsIcon',
        type: 'string',
        setterType: 'iconSelector',
        dataKey: 'labelTipsIcon',
        dataName: '',
        show: 'text',
        showCondition: 'labelTipsTypes',
        fnCode: '() => {}'
      },
      {
        title: '提示内容',
        description: '属性: labelTipsText',
        type: 'string',
        setterType: 'input',
        dataKey: 'labelTipsText',
        dataName: '',
        show: 'text',
        showCondition: 'labelTipsTypes',
        fnCode: '() => {}'
      },
      {
        title: '下拉宽度限制',
        description: '属性:  autoWidth说明: 当选项内容长度超出输入框长度时，下拉菜单宽度是否限制和输入框宽度',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'autoWidth',
        dataName: '',
        show: true,
        
        fnCode: '() => {}'
      },
      {
        title: '全选功能',
        description: '属性:  hasSelectAll',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'hasSelectAll',
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
        title: '本地过滤',
        description: '属性:  filterLocal|说明: 根据搜索关键词过油数据源，在数据源为远程的时候需要关闭此项',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'filterLocal',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      }, 
      {
        title: '选项',
        setterType: 'block',
        show: true
      },
      {
        setterType: 'setCheckBoxItem',
        show: true,
        dataKey:'dataSource',
        options:[
          {
            id:1,
            value:1,
            label:'选择一',
            Selected:false //是否选中
          },
          {
            id:2,
            value:2,
            label:'选择二',
            Selected:false
          },
          {
            id:3,
            value:3,
            label:'选择三',
            Selected:false
          }
        ],
        editInfo: [
          {
            title: '显示值',
            setterType: 'input',
            show: true,
            dataKey:'label'
          },
          {
            title: '选项值',
            setterType: 'input',
            show: true,
            dataKey:'value'
          },
          {
            title: '默认选中',
            setterType: 'switch',
            show: true,
            dataKey:'Selected'
          }
        ]
      },
      {
        title: 'value 使用对急类型{label, value]',
        description: '属性: useDetailValue',
      
        setterType: 'block',
     
        show: true,
        fnCode: '() => {}'
      }, 
      {
        title: '',
        description: '属性: useDetailValue',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'useDetailValue',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      }, 
      {
        title: '校验',
        setterType: 'accordion',
        dataKey: 'required',//TODO
        show: true,
        children: [
          {
            title: '必填',
            description: '',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'required'
          }
        ]
      },
      {
        title: '其他配置',
        setterType: 'accordion',
        show: true,
        children: [
          {
            title: '为空文案',
            description: '属性: notFoundContent',
            type: 'string',
            setterType: 'input',
            dataKey: 'notFoundContent'
          },
          {
            title: '下拉箭头',
            description: '属性: hasArrow',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'hasArrow'
          },
          {
            title: '边框',
            description: '属性: hasBorder',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'hasBorder'
          },
          {
            title: '下拉等宽',
            description: '属性: autoWidth',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'oautoWidth'
          },
          {
            title: '搜索延迟',
            description: '属性: searchDelay',
            type: 'number',
            setterType: 'input',
            dataKey: 'searchDelay'
          }
        ]
      },
      {
        title: '高级',
        setterType: 'accordion',
        dataKey: 'catId',
        show: true,
        children: [
          {
            title: '唯一标识',
            description:
							'属性: fieldld|说明: 组件的唯一标识符，不能够与其它组件重名不能够为空，且只能够使用以字母开头的，下划线以及数字的组合。',
            type: 'string',
            setterType: 'input',
            dataKey: 'catId'
          },
          {
            title: '表单标识',
            description:
							'属性: fieldName]说明: 作为表单提交的 key;当没有该标识时.fie将使用唯一标识作为表单提交 key',
            type: 'string',
            setterType: 'input',
            dataKey: 'formId'
          }
        ]
      }
      // {
      //   type: 'slot',
      //   componentPath: 'formSelectMultiple'
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
