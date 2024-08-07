export const formDatePicker = {
  meta: {
    title: '日期',
    description: '日期',
    icon: '',
    type: 'formDatePicker',
    searchInput: 'riqi日期formdatepicker'
  },
  data: {
    //标题
    titleModel: '日期',
    //默认值
    datevalue:'',
    //标题位置
    titlePosition: 'left',//inside
    //标题宽度
    labelColSpan:0,
    //标题偏移
    labelColOffset:0,
    //占位提示
    placeholder: '请选择',
    //描述信息
    tips:'',
    //尺寸
    size: 'small',
    //状态
    behavior:'normal',
    //格式
    format:'YYYY',
    //返回类型
    returnType: 'timeStamp', //strings moment
    
    labelIconType:'',
    //提示图标
    labelTipsIcon: '',
    //提示内容
    labelTipsText:'',
   
    //清除按钮
    hasClear: false,
    resetTime:true,
    //限制范围
    datatype:'none',
    start:'',
    end:'',
    //校验
    //必填
    required:false,
    //最小长度
    min:0,
   
    //唯一标识
    catId:'datepicker_123',
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
        description: '属性: datevalue',
        type: 'datetime',
        setterType: 'datePicker',
        dataKey: 'datevalue',
        dataName:'',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '标题位置',
        description: '属性: labelAlign',
        setterType: 'tabs',
        dataKey:'titlePosition',
        show: true,
        options: [
          {
            label: '左',
            value: 'left'
          },
          {
            label: '上',
            value: 'top'
          },
          {
            label: '内部',
            value: 'inside'
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
        title: '占位提示',
        description: '属性: placeholder',
        type: 'string',
        setterType: 'input',
        dataKey: 'placeholder',
        dataName:'',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '描述信息',
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
        dataName:'',
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
        title: '格式',
        description: '属性: format',
        type: 'string',
        setterType: 'select',
        dataKey: 'format',
        dataName:'',
        
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label: 'YYYY',
            description: '',
            type: 'string',
            setterType: 'string',
            value: 'YYYY',
            dataName:'',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: 'YYYY-MM',
            description: '',
            type: 'string',
            setterType: 'string',
            value: 'YYYY-MM',
            dataName:'',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: 'YYYY-MM-DD',
            description: '',
            type: 'string',
            setterType: 'string',
            value: 'YYYY-MM-DD',
            dataName:'',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: 'YYYY-MM-DD HH:mm',
            description: '',
            type: 'string',
            setterType: 'string',
            value: 'YYYY-MM-DD HH:mm',
            dataName:'',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: 'YYYY-MM-DD HH:mm:ss',
            description: '',
            type: 'string',
            setterType: 'string',
            value: 'YYYY-MM-DD HH:mm:ss',
            dataName:'',
            show: true,
            fnCode: '() => {}'
          }
        ]
      },
      {
        title: '返回类型',
        description: '属性:  returnType',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'returnType',
        dataName:'',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label: '时间戳',
            value: 'timeStamp'
          },
          {
            label: '字符串',
            value: 'strings'
          },
          {
            label: 'Moment',
            value: 'moment'
          }
        ]
      },
      {
        title: '标题提示',
        description: '属性: labelTipsTypes',
        setterType: 'tabs',
        dataKey: 'labelIconType',
        show: true,
        options: [
          { label: '无', value: 'none' },
          { label: '文本', value: 'text' }
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
        title: '清除按钮',
        description: '属性: hasClear',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'hasClear',
        dataName:'',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '每次选择日期时是否重置时间',
        description:'属性:resetTime',
        setterType: 'block',
        show:true
      },
      {
        setterType: 'switch',
        show: true,
        dataKey: 'resetTime'
      },
      {
        title: '可选时间区间',
        setterType: 'accordion',
        show: true,
        children: [
          {
            title: '限制范围',
            description: '属性：type',
            type: 'string',
            setterType: 'select',
            dataKey: 'datatype',
            show: true,
            options:[
              { //TODO
                label: '无限制',
                description: '无限制',
                type: 'string',
                setterType: 'string',
                value: 'none',
                dataName:'',
                show: true,
                fnCode: '() => {}'
              },
              { 
                label: '可选今天之后(含今天)',
                description: '可选今天之后(含今天)',
                type: 'string',
                setterType: 'string',
                value: 'next',
                dataName:'',
                show: true,
                fnCode: '() => {}'
              },
              { 
                label: '可选今天之前(含今天)',
                description: '可选今天之前(含今天)',
                type: 'string',
                setterType: 'string',
                value: 'back',
                dataName:'',
                show: true,
                fnCode: '() => {}'
              },
              { 
                label: '不可选区间(含今天和结束)',
                description: '不可选区间(含今天和结束)',
                type: 'string',
                setterType: 'string',
                value: '',
                dataName:'',
                show: true,
                fnCode: '() => {}'
              }
            ]
          },
          {
            title: '开始时间',
            description: '属性: start 说明 | 不可选区间(含今天和结束)',
            type: 'datetime',
            setterType: 'datePicker',
            dataKey: 'start',
            dataName:'',
            show: true,
           
            fnCode: '() => {}'
          },
          {
            title: '结束时间',
            description: '属性: end 说明 | 不可选区间(含今天和结束)',
            type: 'datetime',
            setterType: 'datePicker',
            dataKey: 'end',
            dataName:'',
            show: true,
           
            fnCode: '() => {}'
          }
        ]
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
            show:true
          },
          {
            title: '表单标识',
            description: '属性: fieldName]说明: 作为表单提交的 key;当没有该标识时.fie将使用唯一标识作为表单提交 key',
            type: 'string',
            setterType: 'input',
            dataKey: 'formId',
            show:true
          }
        ]
      }
      // {
      //   type: 'slot',
      //   componentPath: 'formDatePicker'
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
