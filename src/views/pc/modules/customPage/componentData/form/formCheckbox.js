export const formCheckbox = {
  meta: {
    title: '多选框',
    description: '多选框',
    icon: '',
    type: 'formCheckbox',
    searchInput: 'duoxuankuang多选框formcheckbox'
  },
  data: {
    //标题
    titleModel: '多选框',
   
    //标题位置
    titlePosition: 'right',
    //标题宽度
    labelColSpan: 0,
    //标题偏移
    labelColOffset: 0,
    //描述信息
    tips: '',
    //尺寸
    size: 'small',
    //状态
    behavior: 'normal',
    // 标题提示
    labelIconType: 'none',
    //提示图标
    labelTipsIcon: '',
    //提示内容
    labelTipsText: '',
    //排列方式
    itemDirection: 'hoz',
    //移动端平铺
    useDrawerlnMobile: false,
    //移动端Icon位置
    iconPosition: 'left',
    checkData: [],
    //选项数据
    dataSource: [],

    // 选项
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
    

    //校验
    //必填
    required: false,
    //最大长度
    maxLenth: 1,
    //TODO定制渲染只读态
    //唯一标识
    catId: 'checkbox_123',
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
            value: 'left'
          },
          {
            label: '上',
            value: 'top'
          }
        ]
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
        title: '编辑描述',
        description: '属性: tips|说明: 属性: tips',
        type: 'string',
        setterType: 'richTextEditor',
        dataKey: 'tips',
        show: true
      },

      {
        title: '尺寸',
        setterType: 'tabs',
        description: '属性: size',
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
        title: '标题提示',
        description: '属性: labelIconType',
        setterType: 'tabs',
        dataKey: 'labelIconType',
        show: true,
        options: [
          {
            label: '无',
            value: 'none'
          },
          {
            label: '文本',
            value: 'text'
          }
        ]
      },
      {
        title: '提示图标',
        setterType: 'iconSelector',
        show: 'text',
        dataKey: 'labelTipsIcon',
        showCondition: 'labelIconType'
      },
      {
        title: '提示内容',
        setterType: 'input',
        showCondition: 'labelIconType',
        show: 'text',
        dataKey: 'labelTipsText'
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
            value: 'hoz'
          },
          {
            label: '垂直排列',
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
              },
              {
                label: '右侧',
                value: 'right'
              }
            ]
          }
        ]
      },
      {
        title: '选项',
        setterType: 'block',
        show: true
      },
      {
        setterType: 'setCheckBoxItem',
        dataKey: 'dataSource',
        show: true,
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
            show: true
          },
          {
            title: '表单标识',
            description:
							'属性: fieldName]说明: 作为表单提交的 key;当没有该标识时.fie将使用唯一标识作为表单提交 key',
            type: 'string',
            setterType: 'input',
            dataKey: 'formId',
            show: true
          }
        ]
      }
      // {
      //   type: 'slot',
      //   componentPath: 'formCheckbox'
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
