export const advancedTable = {
  title: '表格',
  meta: {
    title: '表格',
    description: '表格',
    icon: '',
    type: 'advancedTable',
    searchInput: 'biaoge表格advancedTable'
  },
  data: {
    //数据列
    columns: '[]',
    columnsAcitive: '',
    aas:'',
    columnsOptions: [
      {
       
        value: 'name',
        label: '姓名'
      },
      {
       
        value: 'entryDate',
        label: '入职时间'
      },
      {
       
        value: 'contractDate',
        label: '合同时间'
      },
      {
       
        value: 'salary',
        label: '月薪'
      }
    ],
    //数据源
    data: `[ {
      'contractDate': {
        'start': 1534942658570,
        'end': 1534944858570
      },
      'entryDate': 1534942658570,
      'children': [
        {
          'contractDate': {
            'start': 1534942658570,
            'end': 1534944858570
          },
          'entryDate': 1534942658570,
          'name': '小王1',
          'id': '11',
          'salary': 35000,
          'email': 'xw@abc.com',
          'moneyRange': {
            'lower': 108,
            'upper': 944
          }
        },
        {
          'contractDate': {
            'start': 1534942658570,
            'end': 1534944858570
          },
          'entryDate': 1534942658570,
          'name': '小王2',
          'id': '111',
          'salary': 35000,
          'email': 'xw@abc.com',
          'moneyRange': {
            'lower': 108,
            'upper': 944
          }
        }
      ],
      'name': '小王',
      'id': '1',
      'type': '1',
      'salary': 35000,
      'email': 'xw@abc.com',
      'moneyRange': {
        'lower': 108,
        'upper': 944
      }
    },
    {
      'contractDate': {
        'start': 1534942658570,
        'end': 1534944858570
      },
      'entryDate': 1534942658570,
      'name': '小李',
      'id': '2',
      'type': '-1',
      'salary': 25000,
      'email': 'xl@abc.com',
      'moneyRange': {
        'lower': 214,
        'upper': 1077
      }
    }]`,
    //数据主键
    primaryKey: 'id',
    //加载状态
    loading: false,
    //操作列
    actionTitle: '操作',
    actionWidth: '150',
    actionType: 'link', //button
    actionFixed: 'right',
    actionHidden: false,
    maxWebShownActionCount: 2,
    actionColumn: '',
    options: [
      {
        id: 1,
        value: 1,
        label: '详情'
      }
    ],
  
    //顶部操作
    //显示操作条
    showActionBar: true,
    //操作条
    actionBar: '',
    //显示外链条
    showLinkBar: false,
    // 外链操作条
    linkBar: '',
    // 显示搜索条
    showSearch: true,
    //搜索条占位符
    searchBarPlaceholder: '请搜索',
    //风格和样式
    //主题
    theme: 'stripe', //split border stripe
    //显示表头
    hasHeader: true,
    //表头是否固定
    fixedHeader: false,
    //表头是否sticky
    stickyHeader: false,
    //虚拟滚动
    useVirtual: false,
    //行选择器
    showRowSelector: false,
    //l类型 single
    mode: 'multiple',
    //分页设置
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

    //可折叠/树形表格
    isTree: false,
    isLazy: false,
    //隐藏边距
    catId: 'tablePc_llx2kiuk',

    slotData: {
      name: '123'
    }
  },

  configure: {
    attribute: [
     
      {
        title: '数据列',
        setterType: 'accordion',
      
        show: true,
        children: [
          {
            setterType: 'tabRadio',
            show: true,
            dataKey: 'columnsAcitive',
            options:'columnsOptions',
            editInfo: [
              {
                title: '显示值',
                setterType: 'input',
                show: true,
                dataKey: 'label'
              },
              {
                title: '数据字段',
                setterType: 'input',
                show: true,
                dataKey: 'value'
              }
            ]
          }
        ]
      },
      {
        title: '数据源',
        description: '属性:  data',
        type: 'string',
        setterType: 'codeEditor',
        dataKey: 'data',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '数据主键',
        description:
					'属性:  primaryKey | 说明: 数据主键用于区分数据中不同的行，对行选择和行编最功能非常重要，不同的行主键值不可重复，一般采用数据库中自增ID 字段',
        type: 'string',
        setterType: 'input',
        dataKey: 'primaryKey',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '加载状态',
        description: '属性: loading',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'loading',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '操作列',
        setterType: 'entry',
        show: true,
        children: [
          {
            title: '标题',
            description: '属性: actionTitle',
            type: 'string',
            setterType: 'input',
            dataKey: 'actionTitle',
            show: true
          },
          {
            title: '宽度',
            description: 'actionWidth | 说明: 开启[列固定] 时必须指定宽度',
            type: 'string',
            setterType: 'input',
            dataKey: 'actionWidth',
            show: true
          },
          {
            title: '按钮类型',
            description: '属性: actionType',
            type: 'string',
            setterType: 'tabs',
            dataKey: 'actionType',
            show: true,
            options: [
              {
                label: '链接',
                value: 'link'
              },
              {
                label: '按钮',
                value: 'button'
              }
            ]
          },
          {
            title: '列固定',
            description:
							'属性:  actionFixed | 说明: 开启[列固定]时必须指定宽度',
            type: 'string',
            setterType: 'tabs',
            dataKey: 'actionFixed',
            show: true,
            options: [
              {
                label: '无',
                value: 'none'
              },
              {
                label: '左',
                value: 'left'
              },
              {
                label: '右',
                value: 'right'
              }
            ]
          },
          {
            title: '是否隐藏',
            description: '属性: actionHidden',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'actionHidden',
            show: true
          },
          {
            title: '最大展示数量',
            description: '属性: maxWebShownActionCount',
            type: 'string',
            setterType: 'input',
            dataKey: 'maxWebShownActionCount',
            show: true
          },
          {
            setterType: 'radio',
            show: true,
            dataKey: 'actionColumn',
            editInfo: [
              {
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
              }
            ]
          }
        ]
      },
  
      {
        title: '行选择器',
        setterType: 'entry',
        show: true,
        children: [
          {
            title: '是否显示',
            description: '属性: showRowSelector',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'showRowSelector',
            show: true
          },
          {
            title: '类型',
            description: '属性: mode',
            type: 'string',
            setterType: 'tabs',
            dataKey: 'mode',
            show: true,
            options: [
              {
                label: '复选',
                value: 'multiple'
              },
              {
                label: '单选',
                value: 'single'
              }
            ]
          }
        ]
      },
      {
        title: '顶部操作',
        setterType: 'entry',
        show: true,
        children: [
          {
            title: '显示操作条',
            description: '属性: showActionBar',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'showActionBar',
            show: true
          },
          {
            title: '显示外链条',
            description: '属性: showLinkBar',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'showLinkBar',
            show: 'showActionBar'
          },
          {
            title: '显示搜索条',
            description: '属性: showSearch',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'showSearch',
            show: 'showActionBar'
          },
          {
            title: '搜索占位符',
            description: '属性: searchBarPlaceholder',
            type: 'string',
            setterType: 'input',
            dataKey: 'searchBarPlaceholder',
            show: 'showActionBar'
          }
        ]
      },
      {
        title: '风格和样式',
        setterType: 'entry',
        show: true,
        children: [
          {
            title: '主题',
            description: '属性: theme',
            type: 'string',
            setterType: 'tabs',
            dataKey: 'theme',
            show: true,
            options: [
              {
                label: '斑马线',
                value: 'stripe'
              },
              {
                label: '分割线',
                value: 'split'
              },
              {
                label: '边框',
                value: 'border'
              }
            ]
          },
          {
            title: '显示表头',
            description: '属性: hasHeader',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'hasHeader',
            show: true
          },
          {
            title: '表头是否固定',
            description:
							'属性: fixedHeader | 说明: 该属性配合maxBodyHeight使用，当内客区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'fixedHeader',
            show: true
          }
        ]
      },
      {
        title: '分页设置',
        setterType: 'entry',
        show: true,
        children: [
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

            show: true,
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
            children: [
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
          }
        ]
      },
      {
        title: '树形结构',
        description: '属性: isTree',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'isTree',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '树形结构懒加载',
        description: '属性: isLazy',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'isLazy',
        show: true,
        fnCode: '() => {}'
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
