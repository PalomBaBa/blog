export const formUploadImge = {
  meta: {
    title: '上传图片',
    description: '上传图片',
    icon: '',
    type: 'formUploadImge',
    searchInput: 'shangchuangtupian上传图片formuploadimge'
  },
  data: {
    //标题
    titleModel: '上传图片',
    //默认值
    value: '[]',
    //标题位置
    titlePosition: 'top',
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
    islabelTips: false,
    //提示图标
    labelTipsIcon:'',
    //提示内容
    labelTipsText:'',
    
    //校验
    //必填
    required: false,
    //上传详情设置
    //上传类型
    type:'normal',// normal card drag
    //列表样式
    normalListType:'text', //text image
    //按钮内容
    buttonText:'上传图片',
    //按钮类型
    buttonType:'default',//primary default text
    //多选
    multiple:false,
    //上传超时 ms
    timeout:300,
    //name
    name:'',
    //额外参数
    data:{},
    //TODO上传前处理
    beforeUpload:function(){
      console.log(111);
    },
    //数据处理
    //最大上传文件个数
    limit:9,
    //单个文件上传大小MB
    maxFileSize:50,
    //是否允许携带cookie
    withCredentials:false,
    //自动上传
    autoUpload:true,
    //上传文件类型(多个以英文逗号 , 分隔)
    accept:'image/*',
    //唯一标识
    catId: 'uploadimge_123',
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
        setterType: 'codeEditor',
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
        ]
      },
      {
        title: '标题宽度',
        description: '属性:labelColSpan',
        dataKey: 'labelColSpan',
        setterType: 'input',
        show: 'left',
        showCondition:'titlePosition'
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
        show: true,
        dataKey: 'behavior',
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
        description: '属性: labelTipsTypes',
        setterType: 'switch',
        show: true,
        dataKey: 'islabelTips'
      },
      {
        title: '提示图标',
        description: '属性:labelTipsIcon',
        dataKey: 'labelTipsIcon',
        show: 'islabelTips',
        setterType:'iconSelector'
      },
      {
        title: '提示内容',
        description: '属性:labelTipsText',
        dataKey: 'labelTipsText',
        setterType: 'input',
        show: 'islabelTips'
      },
      {
        title: '校验',
        setterType: 'accordion',
        show: true,
        children: [
          {
            title: '必填',
            description: '',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'required',
            show:true
          }
        ]
      },
      {
        title: '上传类型设置',
        setterType: 'accordion',
        show: true,
        children: [
          {
            title: '按钮内容',
            description: '属性:  buttonText | 说明: 仅PC',
            type: 'string',
            setterType: 'input',
            dataKey: 'buttonText',
            dataName: '',
            show: true,
            fnCode: '() => {}'
          },
          {
            title: '上传类型',
            setterType: 'tabs',
            description: '属性: type',
            dataKey: 'type',
            show: true,
            options: [ //primary default text
              {
                label: '点击',
                value: 'normal'
              },
              {
                label: '卡片',
                value: 'card'
              },
              {
                label: '拖拽',
                value: 'drag'
              }
            ]
          },
          {
            title: '按钮类型',
            setterType: 'tabs',
            description: '属性: buttonType',
            dataKey: 'buttonType',
            show: true,
            options: [ //primary default text
              {
                label: '主要按钮',
                value: 'primary'
              },
              {
                label: '次要按钮',
                value: 'default'
              },
              {
                label: '文字按钮',
                value: 'text'
              }
            ]
          }, {
            title: '多选',
            description: '属性:  multiple',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'multiple',
            dataName: '',
            show: true,
            fnCode: '() => {}'
          }, {
            title: '上传超时',
            description: '属性:  timeout | 说明: 设置上传超时单位ms',
            type: 'number',
            setterType: 'input',
            dataKey: 'timeout',
            dataName: '',
            show: true,
            fnCode: '() => {}'
          }, {
            title: 'name',
            description: ' name]说明:上传时发送给服务端的name',
            type: 'string',
            setterType: 'input',
            dataKey: 'name',
            dataName: '',
            show: true,
            fnCode: '() => {}'
          }, {
            title: '最大上传文件个数',
            description: '属性：limit',
            type: 'number',
            setterType: 'input',
            dataKey: 'limit',
            dataName: '',
            show: true,
            fnCode: '() => {}'
          }, {
            title: '单个文件上传大小(MB)',
            description: '属性：maxFileSize',
            type: 'number',
            setterType: 'input',
            dataKey: 'maxFileSize',
            dataName: '',
            show: true,
            fnCode: '() => {}'
          }, {
            title: '是否允许携带cookie',
            description: '属性：withCredentials',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'withCredentials',
            dataName: '',
            show: true,
            fnCode: '() => {}'
          }, {
            title: '自动上传',
            description: '属性：autoUpload',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'autoUpload',
            dataName: '',
            show: true,
            fnCode: '() => {}'
          }, {
            title: '上传文件类型(多个以英文逗号 , 分隔)',
            description: '属性：accept',
            type: 'string',
            setterType: 'input',
            dataKey: 'accept',
            dataName: '',
            show: true,
            fnCode: '() => {}'
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
            show:true
          },
          {
            title: '表单标识',
            description:
							'属性: fieldName|说明: 作为表单提交的 key;当没有该标识时.fie将使用唯一标识作为表单提交 key',
            type: 'string',
            setterType: 'input',
            dataKey: 'formId',
            show:true
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
