export const dataAdd = {
  title: '数据新增',
  meta: {
    title: '数据新增',
    description: '数据新增',
    icon: '',
    type: 'dataAdd',
    searchInput: 'dataAdd数据新增shujuxinzeng'
  },
  data: {
    dataModel: {
      linkType: '当前应用',
      formCode: '', // 表单code
      appId: ''
    },
    showFieldConfigs: false,
    fieldConfigs: [],
    isPc: true
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
        title: 'pc控件',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'isPc'
      },
      {
        title: '自定义显示字段',
        type: 'string',
        setterType: 'block',
        children: [
          {
            title: '',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'showFieldConfigs'
          },
          {
            title: '',
            type: 'string',
            setterType: 'fieldConfigsSetting',
            dataKey: 'fieldConfigs',
            show: 'showFieldConfigs'
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
            show: true
          }
        ]
      }
    ],
    styles: [],
    advanced: []
  },
  events: {
    addSuccess: {
      name: 'addSuccess',
      title: '提交成功',
      description: '提交成功',
      parameters: []
    },
    addCancelSubmit: {
      name: 'addCancelSubmit',
      title: '确定取消',
      description: '确定取消',
      parameters: []
    }
  }
};
