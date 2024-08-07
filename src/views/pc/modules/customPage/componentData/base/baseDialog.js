export const baseDialog = {
  title:'对话框',
  meta: {
    title: '对话框',
    description: '对话框',
    icon: '',
    type: 'baseDialog',
    searchInput: 'duihuakuang对话框basedialog'
  },
  data: {
    catIdAsDomId: false,
    //标题
    title: 'dialog标题',
    width: '',
    height: '',
    //默认显示
    visible: false,
    //从底部弹出 H5端支持
    fromBottom: true,
    //显示遮罩
    hasMask: true,
    //关闭方式
    closeable: 'click', // click esc
    // 自动聚焦
    autoFocus: true,
    // className
    className: '',
    //底部按钮
    //是否显示
    footer: true,
    //对齐方式
    footerAlign: 'left', //left center right
    //排列方式 0取消 1确定
    footerActions:'1,0',
    //确认按钮
    confirmText: '确定',
    //取消按钮
    cancelText: '取消',
    //确认风格
    confirmStyle: 'primary', //参看ele按钮风格
    //确认状态
    confirmState: 'normal', //normal loading  disabled
    //高级
    catId: 'dialog_123',
    //内部浮层定位
    popupOutDialog: false //弹框内 false  外true
  
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
        title: '从底部弹出',
        description: '属性: fromBottom 仅移动端支持',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'fromBottom',
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
        title: '自动聚焦',
        description: '属性: autoFocus ',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'autoFocus',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: 'className',
        description: '属性: className ',
        type: 'string',
        setterType: 'input',
        dataKey: 'className',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '底部按钮',
        description: '',
        setterType: 'accordion',
        show: true,
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
            show: 'footer',
            options: [
              {
                label: '左',
                value: 'left'
              },
              {
                label: '中',
                value: 'center'
              },
              {
                label: '右',
                value: 'right'
              }
            ]
          },
          {
            title: '排列方式',
            description: '属性: footerActions',
            type: 'array',
            setterType: 'select',
            dataKey: 'footerActions',
            show: 'footer',
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
            show: true
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
                value: 'normal'
              },
              {
                label: '禁用',
                description: 'DISABLED',
                type: 'string',
                setterType: 'string',
                value: 'disabled'
              },
              {
                label: '加载中',
                description: 'LOADING',
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
            dataKey: 'catId',
            show:true
          },
          {
            title: '内部浮层定位',
            setterType: 'block',
            show: true
          },
          {
            title:'是否弹框内',
            setterType: 'switch',
            show: true,
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
  }],
  events: {
    click: {
      name: 'click',
      title: '确定按钮',
      description: '确定按钮',
      parameters: []
    },
    cancelClick: {
      name: 'cancelClick',
      title: '取消按钮',
      description: '取消按钮',
      parameters: []
    }
  }
};
