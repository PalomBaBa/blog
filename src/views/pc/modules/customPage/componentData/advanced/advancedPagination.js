export const advancedPagination = {
  title: '翻页器',
  meta: {
    title: '翻页器',
    description: '翻页器',
    icon: '',
    type: 'advancedPagination',
    searchInput: 'fanyeqi翻页器advancedPagination'
  },
  data: {
    //总页数
    total: 100,
    //当前页码
    current: 1,
    //每页条数
    pageSize: 10,
    //对齐方式
    align: 'left',
    //分页尺寸
    size: 'small', //large
    //分页类型
    type: 'normal', //background
    //前进后退按钮样式
    shape: 'normal',
    //每页显示选择器类型
    pageSizeSelector: 'dropdown', //dropdown
    //每页显示选择器可选值
    pageSizeList: '5, 10, 20',
    // 每页显示选择器在组件中的位置
    pageSizePosition: 'start', //end
    //其他设置
    //显示总条数
    showTotal: false,
    //当分页数为1时，是否隐藏分页器
    hideOnlyOnePage: false,
    // 显示跳转输入框与按钮
    showJump: true,
    catId: 'pagination_llx2kiuk',
    desc: '',
    slotData: {
      name: '123'
    }
  },

  configure: {
    attribute: [
      {
        title: '总记录数',
        description: '属性: total',
        type: 'number',
        setterType: 'input',
        dataKey: 'total',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '当前页码',
        description: '属性: current',
        type: 'number',
        setterType: 'input',
        dataKey: 'current',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '每页条数',
        description: '属性: pageSize',
        type: 'number',
        setterType: 'input',
        dataKey: 'pageSize',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '对齐方式',
        description: '属性: align',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'align',
        show: true,
        fnCode: '() => {}',
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
        title: '分页尺寸',
        description: '属性: size',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'size',
        show: true,
        fnCode: '() => {}',
        options: [
          {
            label: '小',
            value: 'small'
          },

          {
            label: '大',
            value: 'large'
          }
        ]
      },
      {
        title: '分页类型',
        description: '属性: type',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'type',
        show: true,
        fnCode: '() => {}',
        options: [
          {
            label: 'normal',
            value: 'normal'
          },

          {
            label: 'background',
            value: 'background'
          }
        ]
      },
      {
        title: '前进后退按钮样式',
        description: '属性: shape',
        type: 'string',
        setterType: 'accordion',
        dataKey: 'shape',
        show: true,
        fnCode: '() => {}',
        children: [
          {
            title: '',
            setterType: 'tabs',
            show: true,
            dataKey: 'shape',
            options: [
              {
                label: 'normal',
                value: 'normal'
              },

              {
                label: 'arrow-only',
                value: 'arrow-only'
              },
              {
                label: 'arrow-prev-only',
                value: 'arrow-prev-only'
              },
              {
                label: 'no-border',
                value: 'no-border'
              }
            ]
          }
        ]
      },
      {
        title: '每页显示选择器类型',
        description: '属性: pageSizeSelector',
        type: 'string',
        setterType: 'accordion',
        dataKey: 'pageSizeSelector',
        show: true,
        fnCode: '() => {}',
        children: [
          {
            title: '',
            setterType: 'tabs',
            show: true,
            dataKey: 'pageSizeSelector',
            options: [
              {
                label: '不显示',
                value: 'none'
              },
             
              {
                label: 'dropdown',
                value: 'dropdown'
              }
            ]
          }
        ]
      },
      {
        title: '每页显示选择器可选值',
        description: '属性: pageSizeList',
        type: 'number',
        setterType: 'accordion',
        dataKey: 'pageSizeList',
     
        show:true,
        fnCode: '() => {}',
        children: [
          {
            title: '',
            description: '',
            type: 'string',
            setterType: 'input',
            show: true,
            dataKey: 'pageSizeList'
          }
        ]
      },
      {
        title: '每页显示选择器在组件中的位置',
        description: '属性: pageSizePosition',
        type: 'string',
        setterType: 'accordion',
        dataKey: 'pageSizePosition',
        show: true,
        fnCode: '() => {}',
        children: [
          {
            title: '',
            setterType: 'tabs',
            show: true,
            dataKey: 'pageSizePosition',
            options: [
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'end',
                value: 'end'
              }
            ]
          }
        ]
      },
      {
        title: '其他设置',
        setterType: 'accordion',
        description: '',
        show: true,
        children:[
          {
            title: '显示总条数',
            description: '属性: showTotal',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'showTotal',
            show: true,
            fnCode: '() => {}'
          },
          {
            title: '当分页数为1时，是否隐藏分页器',
            description: '属性: hideOnlyOnePage',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'hideOnlyOnePage',
            show: true,
            fnCode: '() => {}'
          },
          {
            title: '显示跳转输入框与按钮',
            description: '属性: showJump',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'showJump',
            show: true,
            fnCode: '() => {}'
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
