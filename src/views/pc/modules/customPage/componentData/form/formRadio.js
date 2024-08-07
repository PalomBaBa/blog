export const formRadio = {
  meta: {
    title: '单选',
    description: '单选',
    icon: '',
    type: 'formRadio',
    searchInput: 'danxuan单选formRadio'
  },
  data: {
    //标题
    titleModel: '单选框',
  
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
    //  展示形式
    shape: 'default',
    //排列方式
    itemDirection: 'hoz',
    //移动端平铺
    useDrawerlnMobile: false,
    //移动端Icon位置
    iconPosition: 'left',
    // 选中数据
    data:'',
    //选项数据
    options: [{
      id: 1,
      value: 1,
      label: '选择一',
      Selected: false //是否选中
    },
    {
      id: 2,
      value: 2,
      label: '选择二',
      Selected: false
    },
    {
      id: 3,
      value: 3,
      label: '选择三',
      Selected: false
    }
    ],
    
    //  是否支持反选
    supportinverse: false,
    //校验
    //必填
    required: false,
    // TODO定制渲染
    //TODO定制渲染只读态
    //唯一标识
    catId: 'radio_123',
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
        setterType: 'radio',
        show: true,
        dataKey: 'data',
        editInfo: [{
          title: '显示值',
          setterType: 'input',
          show: true,
          dataKey: 'label'
        },
        {
          title: '选项值',
          setterType: 'input',
          show: true,
          dataKey: 'value'
        },
        {
          title: '默认选中',
          setterType: 'switch',
          show: true,
          dataKey: 'Selected'
        }
        ]
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
        title: '展示形式',
        setterType: 'tabs',
        dataKey: 'shape',
        description: '属性: shape ',
        show: true,
        //
        options: [
          {
            label: '默认',
            description: 'default',
            type: 'string',
            setterType: 'string',
            value: 'default'
          },
          {
            label: '按钮',
            description: 'button',
            type: 'string',
            setterType: 'string',
            value: 'button'
          }
        ]
      },
      {
        title: '排列方式',
        setterType: 'tabs',
        dataKey: 'itemDirection',
        description: '属性: itemDirection | 说明: 仅PC端生效',
        show: true,
        //
        options: [
          {
            label: '水平排列',
            description: '',
            type: 'string',
            setterType: 'string',
            value: 'hoz'
          },
          {
            label: '垂直排列',
            description: '',
            type: 'string',
            setterType: 'string',
            value: 'ver'
          }
        ]
      },
      {
        title: '移动端icon位置',
        setterType: 'accordion',
        show: true,
        children: [
          {
            setterType: 'tabs',
            dataKey: 'iconPosition',
            show: true,
            options: [
              {
                label: '左侧',
                value: 'left'
              }, {
                label: '右侧',
                value: 'right'
              }
            ]
          }
          
        ]
      },
     
      {
        title: '是否支持反选',
        description: '属性: supportlnverse]说明: 再次点击选项可取消选择',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'supportinverse',
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
      //   componentPath: 'formRadio'
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
