export const formRate = {
  meta: {
    title: '评分',
    description: '评分',
    icon: '',
    type: 'formRate',
    searchInput: 'pingfen评分formrate'
  },
  data: {
    //标题
    titleModel: '评分',
    //默认值
    value: 2.5,
    //标题位置
    titlePosition: 'left',
    //标题宽度
    labelColSpan:0,
    //标题偏移
    labelColOffset:0,
    //描述信息
    tips: '',
    //尺寸
    size: 'small',
    //状态
    behavior: 'normal',
    // 标题提示
    labelTipsTypes: 'none',
    //提示图标
    labelTipsIcon:'',
    //提示内容
    labelTipsText:'',
    //评分总数
    count:5,
    //半星评分
    allowHalf:false,
    //显示分数
    showGrade:false,
    //校验
    //必填
    required: false,
  
  
    //唯一标识
    catId: 'rate_123',
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
        type: 'number',
        setterType: 'input',
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
            value: 'left'
          },
          {
            label: '上',
            value: 'top'
          }
        ],
        fnCode: '() => {}'
      },
      {
        title: '标题宽度',
        description: '属性:labelColSpan',
        showCondition: 'titlePosition',
        show: 'left',
        dataKey: 'labelColSpan',
        setterType:'input'
      },
      {
        title: '标题偏移',
        description: '属性:labelColOffset',
        showCondition: 'titlePosition',
        show: 'left',
        dataKey: 'labelColOffset',
        setterType:'input'
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
        title: '评分总数',
        description: '属性:  count',
        type: 'number',
        setterType: 'input',
        dataKey: 'count',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '半星评分',
        description: '属性:  allowHalf',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'allowHalf',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '显示分数',
        description: '属性:  showGrade',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'showGrade',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
   
      {
        title: '校验',
        setterType: 'accordion',
        dataKey: 'required',
        show: true,
        children: [
          {
            title: '必填',
            description: '',
            type: 'boolean',
            setterType: 'switch',
            show: true,
            dataKey: 'required'
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
							'属性: fieldName|说明: 作为表单提交的 key;当没有该标识时.fie将使用唯一标识作为表单提交 key',
            type: 'string',
            setterType: 'input',
            dataKey: 'formId'
          }
        ]
      }
      // {
      //   type: 'slot',
      //   componentPath: 'formRate'
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
