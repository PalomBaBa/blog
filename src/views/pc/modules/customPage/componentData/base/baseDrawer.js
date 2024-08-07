export const baseDrawer = {
  meta: {
    title: 'Drawer',
    description: 'Drawer',
    icon: '',
    type: 'baseDrawer',
    searchInput: 'drawer'
  },
  data: {
    //标题
    title: 'Drawer标题',
    width: '',
    height: '',
    //默认显示
    visible: false,
    //移动端宽度
    mobileWidth:'',
    mobileHeight:'',
    //显示遮罩
    hasMask: true,
    //关闭方式
    closeable: 'click', // click esc
    //弹出位置
    placement:'ltr',//ttb rtl btt ltr
   
    //底部按钮
    //是否显示
    footer: true,
    //对齐方式
    footerAlign: 'right', //left center right
    //排列方式 0取消 1确定
    footerActions: '0,1',
    //确认按钮
    confirmText: '确定',
    //取消按钮
    cancelText: '取消',
    //确认风格
    confirmStyle: 'primary', //参看ele按钮风格
    //确认状态
    confirmState: 'normal', //normal loading  disabled
    //高级
    catId: 'drawer_123',
    //内部浮层定位
    popupOutDialog: false, //弹框内 false  外true
    slotData: {
      name: '123'
    }
  },
  configure: {
    attribute: [
      {
        title: '标题',
        description: '属性: title',
        type: 'string',
        setterType: 'input',
        dataKey: 'title',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '宽度',
        description: '属性: width',
        type: 'number',
        setterType: 'input',
        dataKey: 'width',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '高度',
        description: '属性: height',
        type: 'number',
        setterType: 'input',
        dataKey: 'height',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '默认显示',
        description: '属性: visible',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'visible',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '移动端宽度',
        description: '属性: mobileWidth',
        type: 'number',
        setterType: 'input',
        dataKey: 'mobileWidth',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '移动端高度',
        description: '属性: mobileHeight',
        type: 'number',
        setterType: 'input',
        dataKey: 'mobileHeight',
        show: true,
        fnCode: '() => {}'
      },
    
      {
        title: '显示遮罩',
        description: '属性: hasMask ',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'hasMask',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '关闭方式',
        description: '属性: closeable ',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'closeable',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label:'click',
            value:'click'
          },
          {
            label:'esc',
            value:'esc'
          }
        ]
      },
      {
        title: '弹出位置',
        description: '属性:  placement ',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'placement',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label: '顶部',
            description: '属性: ttb ',
            type: 'string',
            setterType: 'tabs',
            value: 'ttb',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: '右侧',
            description: '属性: rtl ',
            type: 'string',
            setterType: 'tabs',
            value: 'rtl',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: '底部',
            description: '属性: btt ',
            type: 'string',
            setterType: 'tabs',
            value: 'btt',
            show: true,
            fnCode: '() => {}'
          },
          {
            label: '左侧',
            description: '属性: ltr ',
            type: 'string',
            setterType: 'tabs',
            value: 'ltr',
            show: true,
            fnCode: '() => {}'
          }
        ]
      },
      {
        title: '底部按钮配置',
        description: '',
        setterType: 'block',
        children: [
          {
            title: '是否显示',
            description: '属性: footer',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'footer',
            show: true,
            fnCode: '() => {}'
          },
          {
            title: '对齐方式',
            description: '属性: footerAlign',
            type: 'string',
            setterType: 'tabs',
            dataKey: 'footerAlign',
            options: [
              {
                label: '左',
                description: '属性: left',
                type: 'string',
                setterType: 'text',
                value: 'left',
                show: true,
                fnCode: '() => {}'
              },
              {
                label: '中',
                description: '属性: center',
                type: 'string',
                setterType: 'text',
                value: 'center',
                show: true,
                fnCode: '() => {}'
              },
              {
                label: '右',
                description: '属性: right',
                type: 'string',
                setterType: 'text',
                value: 'right',
                show: true,
                fnCode: '() => {}'
              }
            ]
          },
          {
            title: '排列方式',
            description: '属性: footerActions',
            type: 'array',
            setterType: 'select',
            dataKey: 'footerActions',
            options: [
              {
                label: '确定,取消',
                description: '',
                type: 'string',
                setterType: 'text',
                value: '1,0',
                show: true,
                fnCode: '() => {}'
              },
              {
                label: '取消,确定',
                description: '',
                type: 'string',
                setterType: 'text',
                value: '0,1',
                show: true,
                fnCode: '() => {}'
              },
              {
                label: '确定',
                description: '',
                type: 'string',
                setterType: 'text',
                value: '1',
                show: true,
                fnCode: '() => {}'
              },
              {
                label: '取消',
                description: '',
                type: 'string',
                setterType: 'text',
                value: '0',
                show: true,
                fnCode: '() => {}'
              }
            ]
          },
          {
            title: '确认按钮',
            description: '属性: confirmText',
            type: 'string',
            setterType: 'input',
            dataKey: 'confirmText',
            show: true,
            fnCode: '() => {}'
          },
          {
            title: '取消按钮',
            description: '属性: cancelText',
            type: 'string',
            setterType: 'input',
            dataKey: 'cancelText',
            show: true,
            fnCode: '() => {}'
          },
          {
            title: '确认风格',
            description: '属性: confirmStyle',
            type: 'string',
            setterType: 'btnTypeSelector',
            dataKey: 'confirmStyle',
            show: true,
            options: [
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'primary',
                show: true,
                plain:false,
                round:false,
                fnCode: '() => {}'
              },
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'success',
                show: true,
                plain:false,
                round:false,
                fnCode: '() => {}'
              },
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'warning',
                show: true,
                plain:false,
                round:false,
                fnCode: '() => {}'
              },
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'danger',
                show: true,
                plain:false,
                round:false,
                fnCode: '() => {}'
              },
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'primary',
                show: true,
                plain:true,
                round:false,
                fnCode: '() => {}'
              },
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'success',
                show: true,
                plain:true,
                round:false,
                fnCode: '() => {}'
              },
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'warning',
                show: true,
                plain:true,
                round:false,
                fnCode: '() => {}'
              },
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'danger',
                show: true,
                plain:true,
                round:false,
                fnCode: '() => {}'
              },
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'primary',
                show: true,
                plain:false,
                round:true,
                fnCode: '() => {}'
              },
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'success',
                show: true,
                plain:false,
                round:true,
                fnCode: '() => {}'
              },
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'warning',
                show: true,
                plain:false,
                round:true,
                fnCode: '() => {}'
              },
              {
                label: '按钮',
                description: '',
                type: 'string',
                setterType: 'text',
                value: 'danger',
                show: true,
                plain:false,
                round:true,
                fnCode: '() => {}'
              }
            ]
          },
          {
            title: '确认状态',
            setterType: 'tabs',
            description: '属性: confirmState',
            dataKey: 'confirmState',
            show: true,
            options: [
              {
                label: '普通',
                description: 'NORMAL',
                type: 'string',
                setterType: 'string',
                show: true,
                value: 'normal'
                
              },
              {
                label: '禁用',
                description: 'DISABLED',
                type: 'string',
                setterType: 'string',
                show: true,
                value: 'disabled'
              },
              {
                label: '加载中',
                description: 'LOADING',
                show: true,
                type: 'string',
                setterType: 'string',
                value: 'loading'
              }
            ]
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
            description: '',
            type: 'string',
            setterType: 'input',
            show: true,
            dataKey: 'catId'
          }
        ]
      },
      {
        title: '内部浮层定位',
        setterType: 'accordion',
        dataKey: 'popupOutDialog',
        show: true,
        children: [
          {
            title: '弹框内/外',
            description: '',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'popupOutDialog'
          }
        ]
      }
    ],
    styles: [],
    advanced: []
  },
  children: [{
    title: '插槽1',
    type: 'slot',
    value: []
  }]
};
