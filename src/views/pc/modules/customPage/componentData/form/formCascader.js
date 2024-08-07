
export const formCascader = {
  title: '级联选择器',
  meta: {
    title: '级联选择器',
    description: '级联选择器',
    icon: '',
    type: 'formCascader',
    searchInput: 'jilianxuanzheqi级联选择器formcascader'
  },
  data: {
    //标题
    titleModel: '级联选择器',
    //默认值
    value: 'part_b',
    //选择任意一级选项
    checkStrictly: false,
    //标题位置
    titlePosition: 'top',
    //标题宽度
    labelColSpan: 0,
    //标题偏移
    labelColOffset: 1,
    //占位提示
    placeholder: '请选择',
    // 列表样式
    listStyle: '{}',
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
    //触发行为
    expandTriggerType: 'click',
    //下拉箭头
    hasArrow: true,
    /// 边框
    hasBorder: true,
    // 搜索框
    showSearch: false,
    //清除按钮
    hasClear: true,
    //选项数据
    dataSource: `[
      {
        value: 'part',
        label: '部门',
        children: [
          {
            value: 'part_a',
            label: 'A部门'
          },
          {
            value: 'part_b',
            label: 'B部门'
          }
        ]
      },
      {
        value: 'product',
        label: '产品',
        children: [
          {
            value: 'product_a',
            label: 'a产品'
          },
          {
            value: 'product_b',
            label: 'b产品'
          }
        ]
      }
    ]`,
  
    //开启异步加载
    isLoadData:false,
    // loadData函数
    loadData:`function loadData(node){
      return new Promise((resolve) => {
        resolve();
      })
    }`,
    //无匹配选项时的内容
    notFoundContent:'暂无数据',
    //选项宽度自适应
    optionAutoWidth:false,
    //校验
    //必填
    required: false,
    //最大长度
    maxLenth: 1,
    //TODO定制渲染只读态
    renderView:'',
    //唯一标识
    catId: 'cascader_123',
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
        description: '属性: value 说明 | 数据源中最进后一个节点的 value',
        type: 'string',
        setterType: 'input',
        dataKey: 'value',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '任意一级选项',
        description: '属性: checkStrictly',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'checkStrictly',
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
          }
        ],
        fnCode: '() => {}'
      },
      {
        title: '标题宽度',
        description: '属性:labelColSpan 说明 | 1代表1/24',
        dataKey: 'labelColSpan',
        setterType: 'input',
        show: 'left',
        showCondition: 'titlePosition'
      },
      {
        title: '标题偏移',
        description: '属性:labelColOffset 说明 | 1代表1/24',
        dataKey: 'labelColOffset',
        setterType: 'input',
        show: 'left',
        showCondition: 'titlePosition'
      },
      {
        title: '占位提示',
        description: '属性: placeholder',
        type: 'string',
        setterType: 'input',
        dataKey: 'placeholder',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '列表样式',
        description: '属性: listStyle',
        type: 'object',
        setterType: 'codeEditor',
        dataKey: 'listStyle',
        show: true,
        fnCode: '() => {}'
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
        show: true,
        dataKey: 'behavior',
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
        title: '绑定动作',
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
        title: '触发行为',
        description: '属性: expandTriggerType',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'expandTriggerType',
        dataName: '',
        show: true,
        fnCode: '() => {}',
        options:[ 
          {
            label: 'click',
            description: '属性: click',
            type: 'string',
            setterType: 'tabs',
            value: 'click',
            dataName: '',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: 'hover',
            description: '属性: hover',
            type: 'string',
            setterType: 'tabs',
            value: 'hover',
            dataName: '',
            show: true,
            fnCode: '() => {}'
          }
        ]
      },
      {
        title: '下拉箭头',
        description: '属性: hasArrow',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'hasArrow',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '边框',
        description: '属性: hasBorder',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'hasBorder',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '搜索框',
        description: '属性: showSearch',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'showSearch',
        dataName: '',
        show: true,
        fnCode: '() => {}'
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
        title: '选项数据',
        description: '属性: dataSource',
        type: 'array',
        setterType: 'codeEditor',
        dataKey: 'dataSource',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '开启异步加载',
        description: '属性: isLoadData',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'isLoadData',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: 'loadData函数',
        description: '属性: loadData',
        type: 'function',
        setterType: 'codeEditor',
        dataKey: 'loadData',
        show: 'isLoadData',
        fnCode: '() => {}'
      },
      {
        title: '无匹配选项时的内容',
        description: '属性: notFoundContent',
        type: 'string',
        setterType: 'input',
        dataKey: 'notFoundContent',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '选项宽度自适应',
        description: '属性: optionAutoWidth',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'optionAutoWidth',
        dataName: '',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: 'TODO定制渲染只读态',
        setterType: 'accordion',
        dataKey: 'required',
        show: true,
        children: [
          {
            title: '绑定动作',
            description: '',
            type: 'string',
            setterType: 'input',
            dataKey: 'renderView',
            show: true
          }
        ]
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
            dataKey: 'required',
            show: true
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
            dataKey: 'catId',
            show: true
          },
          {
            title: '表单标识',
            description:
							'属性: fieldName|说明: 作为表单提交的 key;当没有该标识时.fie将使用唯一标识作为表单提交 key',
            type: 'string',
            setterType: 'input',
            dataKey: 'formId',
            show: true
          }
        ]
      }
      // {
      //   type: 'slot',
      //   componentPath: ''
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
