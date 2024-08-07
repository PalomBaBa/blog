export const dataList = {
  title: '数据列表',
  meta: {
    title: '数据列表',
    description: '数据列表',
    icon: '',
    type: 'dataList',
    searchInput: 'dataList数据列表shujuliebiao'
  },
  data: {
    dataModel: {
      linkType: '当前应用',
      formCode: '', // 表单code
      appId: ''
    },
    dataBindList: [
      {
        key: 'base',
        fieldId: '',
        dataKey: '',
        valueKey: ''
      }
    ],
    showPagination: true, // 显示分页
    total: 0, // 总条数
    current: 1, // 当前页
    pageSize: 10 // 每页条数
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
        title: '配置字段绑定关系',
        type: 'string',
        setterType: 'block',
        children: [
          {
            title: '',
            setterType: 'slot',
            componentPath: 'dataListSlot'
          }
        ]
      },
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
            setterType: 'input',
            dataKey: 'pageSize',
            show: 'showPagination'

          },
          {
            title: '默认页码',
            setterType: 'input',
            dataKey: 'current',
            show: 'showPagination'

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
