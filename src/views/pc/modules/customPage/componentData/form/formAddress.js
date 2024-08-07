export const formAddress = {
  meta: {
    title: '地区选择',
    description: '地区选择',
    icon: '',
    type: 'formAddress',
    searchInput: 'diquxuanzhe地区选择formAddress'
  },
  data: {
    //标题
    titleModel: '地区选择',

    //标题位置
    titlePosition: 'left',
    //标题宽度
    labelColSpan: 0,
    //标题偏移
    labelColOffset: 0,
    //占位提示
    placeholder: '请输入',
    //描述信息
    tips: '',
    //尺寸
    size: 'small',
    //状态
    behavior: 'normal',
    //类型
    addressType: '4',
    //子标题
    subLabel: '详细地址',
    //快速定位(仅移动端)
    enableLocation: true,
    //清除按钮
    hasClear: false,
    //选项宽度自适应
    optionAutoWidth: true,
    //默认值
    //地区选址
    addressOptions: [],
    //详细地址
    addressValue: '',
    //唯一标识
    catId: 'address_123',
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
          }
          // {
          //   label: '内部',
          //   description: '内部',
          //   type: 'string',
          //   setterType: 'text',
          //   value: 'inside'
          // }
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
        title: '选项宽度自适应',
        description:
					'属性: optionAutoWidth 说明: 当选项内容长度超出输入框长度时，下拉菜单宽度是否限制和输入框宽度',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'optionAutoWidth',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '快速定位(仅移动端)',
        description: '属性: enableLocation',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'enableLocation',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '类型',
        setterType: 'select',
        dataKey: 'addressType',
        show: true,
        options: [
          {
            label: '省 / 市 / 区 / 详细地址',
            description: '',
            type: 'string',
            setterType: 'entry',
            value: 4,
            Selected: false
          },
          {
            label: '省 / 市 / 区',
            description: '',
            type: 'string',
            setterType: 'entry',
            value: 3,
            Selected: false
          },
          {
            label: '省 / 市',
            description: '',
            type: 'string',
            setterType: 'entry',
            value: 2,
            Selected: false
          },
          {
            label: '省',
            description: '',
            type: 'string',
            setterType: 'entry',
            value: 1,
            Selected: false
          }
        ]
      },
      {
        title: '子标题',
        description: '属性: subLabel',
        type: 'string',
        setterType: 'input',
        dataKey: 'subLabel',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '默认值',
        setterType: 'block',
        show: true
      },
      {
        title: '地区选址',
        setterType: 'addressCascader',
        dataKey: 'addressOptions',
        show: true,
        options: []
      },

      {
        title: '详细地址',
        description: '属性: addressValue',
        type: 'string',
        setterType: 'textarea',
        dataKey: 'addressValue',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '校验',
        setterType: 'accordion',
        dataKey: 'required', //TODO
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
      //   componentPath: 'formSelect'
      // }
    ],
    styles: [],
    advanced: []
  },
  events: {
    addressChange: {
      name: 'addressChange',
      title: '地区选择改变',
      description: '地区选择改变',
      parameters: [
        {
          name: '新的输入值',
          type: 'string',
          description: '新的输入值',
          key: 'value'
        }
      ]
    },
    addressDetails: {
      name: 'addressDetails',
      title: '详细地址改变',
      description: '详细地址改变',
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
