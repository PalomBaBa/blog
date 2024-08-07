export const dataTable = {
  title: '数据表格',
  meta: {
    title: '数据表格',
    description: '数据表格',
    icon: '',
    type: 'dataTable',
    searchInput: 'dataTable数据表格shujubiaoge'
  },
  data: {
    dataModel: {
      linkType: '当前应用',
      formCode: '', // 表单code
      appId: '',
      formId: ''
    },

    match: [
      // // 数据筛选
      // {
      //   key: '', // 字段,
      //   operator: '', // 条件
      //   value: '' // 值
      //  type:'custom' //custom 自定义 omnibox 地址栏
      // }
    ],

    sort: [
      // {
      //   key: 'create_time',
      //   // 排序字段
      //   created_at: -1 // -1降序, 1升序
      // }
    ],
    searchConfig: [
      // 搜索配置
      // {
      //   key: 'name', // 字段,
      //   operator: 'eq', // 条件
      //   value: '', // 值
      //   title:'姓名'
      // }
    ],
    columns: [
      // 表格列
      // {
      //   key: 'name', // 列字段
      //   title: '姓名', // 列名称
      //   width: '', // 列宽度: ''自适应, 200宽度200px
      //   valueType: 'key', // 展示内容: key字段值  value自定义内容
      //   value: '', // 自定义内容
      //   isExport: true, // 导出是否包含字段
      //   align:'left',//对齐方式
      //   isSort:false,//是否排序
      //   fixed:false//冻结
      // }
    ],
    selectColumn: 'none', //数据选择列 radio checkbox none
    EmptyStatusPrompt: '暂无数据', //空状态提示
    rowBgckgorundColor: '#fff', //行背景颜色
    showOperations: true, // 显示操作列
    operationsWidth: 200, // 操作列宽度: 200px
    showEditBtn: true, // 显示编辑按钮
    showDeleteBtn: true, // 显示删除按钮
    showRenovateBtn: true, // 显示刷新按钮
    showGlobalBtn: true, //全局按钮
    showHeightBtn: true, //行高调节按钮
    operations: [
      {
        title: '删除', // 按钮文字
        type: 'danger', // 按钮类型
        actionType: 'system', //  system 系统动作 custom 自定义动作
        actionName: '', //
        actionData: {},
        actionList: [],
        condition: 'function(data) {\n  return true;\n}',
        linkUrl: ''
      }
    ],
    //全局按钮
    operationsConfig: [
      // {
      //   title: '新建', // 按钮文字
      //   type: 'primary', // 按钮类型
      //   actionType: 'system', //  system 系统动作 custom 自定义动作
      //   actionName: '', //
      //   actionData: {},
      //   condition: 'function(data) {\n  return true;\n}'
      // },
      // {
      //   title: '批量删除', // 按钮文字
      //   type: 'danger', // 按钮类型
      //   actionType: 'system', //  system 系统动作 custom 自定义动作
      //   actionName: '', //
      //   actionData: {},
      //   condition: 'function(data) {\n  return true;\n}'
      // }
    ],
    showPagination: true, // 显示分页
    total: 0, // 总条数
    current: 1, // 当前页
    pageSize: 10, // 每页条数
    leftFixed: 'left',
    rightFixed: 'right',
    created_at: '', //排序字段
    tableLineHeight: '40px',
    rowBgColor: '#fff',
    sortKey: '', //选中排序字段
    keyType: '' // 数据筛选
  },

  configure: {
    attribute: [
      {
        title: '数据源',
        type: 'string',
        setterType: 'block',
        children: [
          {
            title: '',
            setterType: 'crossApp',
            dataKey: 'dataModel'
          }
        ]
      },
      {
        title: '数据筛选',
        type: 'string',
        setterType: 'block',
        children: [
          {
            title: '',
            setterType: 'slot',
            componentPath: 'dataFliter',
            dataKey: 'formCode',
            linkType: 'linkType',
            show: true
          }
        ],
        show: true
      },
      {
        title: '排序字段',
        type: 'string',
        setterType: 'block',
        children: [
          {
            title: '',
            type: 'string',
            setterType: 'slot',
            componentPath: 'dataSort'
          }
        ],
        show: true
      },
      {
        title: '排序方式',
        type: 'string',
        setterType: 'block',
        children: [
          {
            title: '',
            description: '属性: created_at',
            type: 'string',
            setterType: 'select',
            dataKey: 'created_at',
            options: [
              {
                label: '升序',

                value: '1'
              },
              {
                label: '降序',

                value: '-1'
              }
            ]
          }
        ],
        show: true
      },
      {
        title: '筛选器',
        type: 'string',
        setterType: 'block',
        children: [
          {
            title: '',
            setterType: 'slot',
            componentPath: 'dataFliterList',
            show: true
          }
        ],
        show: true
      },
      {
        title: '表格列',
        setterType: 'accordion',
        show: true,
        children: [
          {
            title: '',
            type: 'string',
            setterType: 'slot',
            componentPath: 'dataColumns',
            show: true,
            fnCode: '() => {}'
          },

          {
            title: '数据选择列(首列)',
            type: 'string',
            setterType: 'block',
            children: [
              {
                title: '',
                description: '属性: ',
                type: 'string',
                setterType: 'select',
                dataKey: 'selectColumn',
                options: [
                  {
                    label: '多选样式',

                    value: 'checkbox'
                  },
                  {
                    label: '关闭',

                    value: 'none'
                  }
                ]
              }
            ],
            show: true
          },
          {
            title: '左冻结',
            type: 'string',
            setterType: 'block',
            children: [
              {
                title: '',
                setterType: 'slot',
                componentPath: 'dataSelect',
                name: 'fixed',
                dataKey: 'leftFixed'
              }
            ],
            show: true
          },
          {
            title: '右冻结',
            type: 'string',
            setterType: 'block',
            children: [
              {
                title: '',
                setterType: 'slot',
                componentPath: 'dataSelect',
                name: 'fixed',
                dataKey: 'rightFixed'
              }
            ],
            show: true
          }
        ]
      },
      {
        title: '操作列',
        setterType: 'accordion',

        show: true,
        children: [
          {
            title: '',
            setterType: 'switch',
            dataKey: 'showOperations',
            show: true
          },
          {
            title: '宽度',
            type: 'string',
            setterType: 'input',
            dataKey: 'operationsWidth',
            show: true
          },
          {
            title: '操作列管理',
            type: 'string',
            setterType: 'block',
            show: true,
            children: [
              {
                title: '',
                setterType: 'slot',
                componentPath: 'operateTable',
                show: true
              }
            ]
          }
        ]
      },
      // {
      //   title: '表格行',
      //   setterType: 'accordion',

      //   show: true,
      //   children: [
      //     {
      //       title: '空状态提示',
      //       setterType: 'input',
      //       dataKey: 'EmptyStatusPrompt',
      //       show: true
      //     },
      //     {
      //       title: '行背景颜色',
      //       setterType: 'color',
      //       dataKey: 'rowBgColor',
      //       show: true
      //     }
      //   ]
      // },
      {
        title: '分页器',
        setterType: 'accordion',

        show: true,
        children: [
          {
            title: '显示分页器',
            setterType: 'switch',
            dataKey: 'showPagination',
            show: true
          },
          {
            title: '每页行数',
            description: '属性: pageSize',
            type: 'string',
            setterType: 'select',
            dataKey: 'pageSize',
            show: 'showPagination',
            options: [
              {
                label: '10条/页',

                value: 10
              },
              {
                label: '20条/页',

                value: 20
              },
              {
                label: '50条/页',

                value: 50
              },
              {
                label: '100条/页',

                value: 100
              },
              {
                label: '200条/页',

                value: 200
              }
            ]
          },
          // {
          //   title: '每页行数',
          //   setterType: 'input',
          //   dataKey: 'pageSize',
          //   show: 'showPagination'
          // },
          {
            title: 'PC端默认页码',
            setterType: 'input',
            dataKey: 'current',
            show: 'showPagination'
          }
        ]
      },
      {
        title: '操作配置',
        setterType: 'accordion',

        children: [
          {
            title: '全局按钮',
            description: '',
            type: 'string',
            setterType: 'switch',
            dataKey: 'showGlobalBtn',
            show: true
          },
          {
            title: '全局列管理',
            type: 'string',
            setterType: 'block',
            show: true,
            children: [
              {
                title: '',
                setterType: 'slot',
                componentPath: 'operationConfiguration',
                show: true
              }
            ]
          }
        ]
      },
      {
        title: '刷新按钮',
        description: '',
        type: 'string',
        setterType: 'switch',
        dataKey: 'showRenovateBtn',
        show: true
      },
      {
        title: '行高调节按钮',
        description: '',
        type: 'string',
        setterType: 'switch',
        dataKey: 'showHeightBtn',
        show: true
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
  events: {},
  defineExposes: [
    {
      name: 'refresh',
      title: '刷新表格',
      description: '刷新表格',
      parameters: []
    }
  ]
};
