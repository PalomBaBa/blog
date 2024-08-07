export const formEmployee = {
  title: '人员搜索框',
  meta: {
    title: '人员搜索框',
    description: '人员搜索框',
    icon: '',
    type: 'formEmployee',
    searchInput: 'renyuansousuokuang人员搜索框formemployee'
  },
  data: {
    //标题
    titleModel: '人员搜索',
    //默认值
    value: '[]',
    //标题位置
    titlePosition: 'top',
    //标题宽度
    labelColSpan: 0,
    //标题偏移
    labelColOffset: 0,
    //占位提示
    placeholder: '请选择',

    //描述信息
    tips: '',
    //尺寸
    size: 'small',
    //状态
    behavior: 'normal',
    // 标题提示
    labelTipsTypes: 'none',
    //提示图标
    labelTipsIcon: '',
    //提示内容
    labelTipsText: '',
    //显示员工ID
    shoWEmplId: false,
    //清除按钮
    hasClear: true,
    //数据类型
    dataType: 'url', //data dataSource
    // 接口请求 接口配置

    //接口地址
    url: '',
    // 参数处理
    beforeSearch: '',
    // 数据处理
    fit: '',
    // 下属接口
    // 参数处理2
    //数据源 人员数据
    dataSource: '[]',
    //其他属性
    //搜索延迟
    searchDelay: 0,
    //自动请求
    fetchDataOnMount: true,
    //头像
    showAvater: true,
    //结果工号
    emplldInLabel: true,
    //部门描述
    // 职位描述
    //验证
    validation: false,
    catId: 'employee_llx2kiuk',
    formId: '',
    desc: '',
    slotData: {
      name: '123'
    }
  },

  configure: {
    attribute: [
      {
        title: '标题',
        description: '属性: titleModel',
        type: 'string',
        setterType: 'input',
        dataKey: 'titleModel',
        show: true,
        fnCode: '() => {}'
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
        title: '默认值',
        description: '属性: value',
        type: 'string',
        setterType: 'codeEditor',
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
        title: '编辑描述',
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
        dataName: '',
        dataKey: 'labelTipsTypes',
        show: true,
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
        title: '显示员工ID',
        description: '属性: shoWEmplId',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'shoWEmplId',
        dataName: '',
        fnCode: '() => {}'
      },
      {
        title: '清除按钮',
        description: '属性: hasClear',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'hasClear',
        dataName: '',
        fnCode: '() => {}'
      },

      {
        title: '数据类型',
        setterType: 'tabs',
        dataKey: 'dataType',
        show: true,
        options: [
          {
            label: '接口请求',
            description: '',
            type: 'string',
            setterType: 'input',
            value: 'url',
            show: true
          },
          {
            label: '数据源',
            description: '',
            type: 'string',
            setterType: 'input',
            value: 'dataSource',
            show: true
          }
        ]
      },
      {
        title: '接口地址',
        description: '属性: url',
        type: 'string',
        setterType: 'input',
        dataKey: 'url',
        dataName: '',
        show: 'url',
        showCondition: 'dataType',
        fnCode: '() => {}'
      },
      {
        title: '参数处理',
        description: '属性: beforeSearch',
        type: 'string',
        setterType: 'input',
        dataKey: 'beforeSearch',
        dataName: '',
        show: 'url',
        showCondition: 'dataType',
        fnCode: '() => {}'
      },
      {
        title: '数据处理',
        description: '属性: fit',
        type: 'string',
        setterType: 'input',
        dataKey: 'fit',
        dataName: '',
        show: 'url',
        showCondition: 'dataType',
        fnCode: '() => {}'
      },
      {
        title: '人员数据',
        description: '属性: dataSource',
        type: 'string',
        setterType: 'codeEditor',
        dataKey: 'dataSource',
        dataName: '',
        show: 'dataSource',
        showCondition: 'dataType',
        fnCode: '() => {}'
      },
      {
        title: '其他属性',
        setterType: 'accordion',

        show: true,
        children: [
          {
            title: '搜索延迟',
            description: '',
            type: 'number',
            setterType: 'input',
            dataKey: 'searchDelay',
            show: true
          },
          {
            title: '自动请求',
            description: '',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'fetchDataOnMount',
            show: true
          },
          {
            title: '头像',
            description: '',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'showAvater',
            show: true
          },
          {
            title: '结果工号',
            description: '',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'emplldInLabel',
            show: true
          }
        ]
      },
      {
        title: '校验',
        setterType: 'block',

        show: true
      },
      {
        title: '必填',
        description: '',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'validation',
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
          },
          {
            title: '表单标识',
            description: '',
            type: 'string',
            setterType: 'input',
            dataKey: 'formId',
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
