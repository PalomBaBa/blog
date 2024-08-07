export const formInput = {
  meta: {
    title: '单行输入框',
    description: '单行输入框',
    icon: '',
    type: 'formInput',
    searchInput: 'danhangshurukuang单行输入框forminput'
  },
  data: {
    //标题
    titleModel: '输入框',
    //默认值
    value:'',
    //标题位置
    titlePosition: 'top',//inside
    //标题宽度
    labelColSpan:0,
    //标题偏移
    labelColOffset:0,
    //占位提示
    placeholder: '请输入',
    //描述信息
    tips:'',
    //尺寸
    size: 'small',
    //状态
    behavior:'normal',
    // 标题提示
    isLabelTips:false,
    //提示图标
    labelTipsIcon: '',
    //提示内容
    labelTipsText:'',
    //类型
    HtmlType:'text',
    //状态
    state:'normal',
    //计数器
    hasLimitHint:false,
    //字数上限
    maxLength:200,
    //清除按钮
    hasClear:false,
    //自定去除头尾空字符
    trim:false,
    //自动聚焦
    autoFocus:false,
    //输入框前附加内容
    addonBefore:'',
    //输入框后附加内容
    addonAfter:'',
    //校验
    //必填
    required:false,
    //最小长度
    min:0,
    //最大长度
    max:0,
    //唯一标识
    catId:'input_123',
    //表单标识
    formId:'',
    slotData: {
      name: '123'
    }
  },
  
  configure:{
    attribute: [  
      {
        title: '标题',
        description: '属性: label',
        type: 'string',
        setterType: 'input',
        dataKey: 'titleModel',
        show: true,
        dataName:'titleModel',
        fnCode: '() => {}'
      },
      {
        title: '默认值',
        description: '属性: value',
        type: 'string',
        setterType: 'input',
        dataKey: 'value',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '标题位置',
        description: '属性:titlePosition',
        setterType: 'tabs',
        dataKey: 'titlePosition',
        options: [
          { label: '左', value: 'left' },
          { label: '上', value: 'top' },
          { label: '内', value: 'inside' }
        ]
      },
      {
        title: '标题宽度',
        description: '属性:labelColSpan',
        setterType: 'input',
        dataKey: 'labelColSpan',
        show: 'left',
        showCondition: 'titlePosition'
      },
      {
        title: '标题偏移',
        description: '属性:labelColOffset',
        setterType: 'input',
        dataKey: 'labelColOffset',
        show: 'left',
        showCondition: 'titlePosition'
      },
      {
        title: '占位提示',
        description: '属性: placeholder',
        type: 'string',
        setterType: 'input',
        dataKey: 'placeholder',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '编辑描述',
        description: '属性: tips|说明: 属性: tips',
        type: 'string',
        setterType: 'richTextEditor',
        dataKey: 'tips',
        dataName:'',
        show: true,
        fnCode: '() => {}'
      },
      
      {
        title: '尺寸',
        setterType: 'tabs',
        description: '属性: size',
        dataName:'',
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
        dataName:'',
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
            description: 'HIDDEN: 运行态时不显示。对应表单数据默认不会提交，可在高级-数据提交中进行配置',
            type: 'string',
            setterType: 'string',
            value: 'hidden'
          }
        ]
      },
      {
        title: '标题提示',
        description: '属性: labelTipsTypes',
        setterType: 'switch',
        dataName:'',
        show: true,
        dataKey: 'isLabelTips'
      },
      {
        title: '提示图标',
        description: '属性:labelTipsIcon',
        setterType: 'iconSelector',
        dataKey: 'labelTipsIcon',
        show: 'isLabelTips'
      },
      {
        title: '提示内容',
        description: '属性:labelTipsText',
        setterType: 'input',
        dataKey: 'labelTipsText',
        show:'isLabelTips'
      },
      {
        title: '类型',
        description: '属性: HtmlType',
        setterType: 'tabs',
        dataKey: 'HtmlType',
        show: true,
        options: [
          {
            label: '单行',
            description: 'text',
            type: 'string',
            setterType: 'string',
            value: 'text'
          },
          {
            label: '多行',
            description: 'textarea',
            type: 'string',
            setterType: 'string',
            value: 'textarea'
          },
          {
            label: '密码',
            description: 'password',
            type: 'string',
            setterType: 'string',
            value: 'password'
          }
        ]
      },
      {
        title: '状态',
        description: '属性: state',
        setterType: 'tabs',
        dataName:'',
        show: true,
        dataKey: 'state',
        options: [
          {
            label: '正常',
            description: '',
            type: 'string',
            setterType: 'string',
            value: 'normal'
          },
          {
            label: '失败',
            description: 'error',
            type: 'string',
            setterType: 'string',
            value: 'error'
          },
          {
            label: '加载中',
            description: 'loading',
            type: 'string',
            setterType: 'string',
            value: 'loading'
          },
          {
            label: '成功',
            description: 'success',
            type: 'string',
            setterType: 'string',
            value: 'success'
          }
        ]
      },
      {
        title: '计数器',
        description: '属性: hasLimitHint',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'hasLimitHint',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '字数上限',
        description: '属性: maxLength',
        type: 'number',
        setterType: 'input',
        dataKey: 'maxLength',
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
        title: '自动去除头尾空字符',
        description: '属性: trim',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'trim',
        show: true,
        fnCode: '() => {}'
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
        title: '输入框前附加内容',
        setterType: 'accordion',
        description: '属性: addonBefore',
        show: true,
        children: [
          {
            description: '',
            type: 'string',
            setterType: 'input',
            dataKey: 'addonBefore',
            show:true
          }
        ]
      },
      {
        title: '输入框后附加内容',
        setterType: 'accordion',
        description: '属性: addonAfter',
        show: true,
        children: [
          {
            description: '',
            type: 'string',
            setterType: 'input',
            dataKey: 'addonAfter',
            show:true
          }
        ]
      },
      {
        title: '校验',
        setterType: 'accordion',
        show: true,
        checkValue:'titleModel',
        children: [
          {
            title: '必填',
            description: '',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'required'
          },
          {
            title: '最小长度',
            description: '',
            type: 'number',
            setterType: 'input',
            dataKey: 'min'
          },
          {
            title: '最大长度',
            description: '',
            type: 'number',
            setterType: 'input',
            dataKey: 'max'
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
            description: '属性: fieldld|说明: 组件的唯一标识符，不能够与其它组件重名不能够为空，且只能够使用以字母开头的，下划线以及数字的组合。',
            type: 'string',
            setterType: 'input',
            dataKey: 'catId',
            show: true
          },
          {
            title: '表单标识',
            description: '属性: fieldName]说明: 作为表单提交的 key;当没有该标识时.fie将使用唯一标识作为表单提交 key',
            type: 'string',
            setterType: 'input',
            dataKey: 'formId',
            show: true
          }
        ]
      }
      // {
      //   type: 'slot',
      //   componentPath: 'formInput'
      // }
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
