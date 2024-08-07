export const dataEdit = {
  title: '数据编辑',
  meta: {
    title: '数据编辑',
    description: '数据编辑',
    icon: '',
    type: 'dataEdit',
    searchInput: 'dataEdit数据编辑shujubianji'
  },
  data: {
    dataModel: {
      linkType: '当前应用',
      formCode: '', // 表单code
      appId: ''
    },
    value: '', //默认值
    typeOption: 'customization', //选项类型
    isRead: false,
    showFieldConfigs: false,
    fieldConfigs: [],
    cancelEditApprove: false //是否取消编辑时审批 为true时表示强制取消审批 否则跟随接口返回的数据情况是否审批
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
        title: '选项类型',
        setterType: 'select',
        dataKey: 'typeOption',
        options: [
          {
            id: '1',
            label: '自定义',
            value: 'customization'
          },
          {
            id: '2',
            label: '地址栏获取',
            value: 'routerQuery'
          }
        ]
      },
      {
        title: '默认值',
        setterType: 'input',
        show: true,
        // showCondition: 'customization',
        dataKey: 'value'
      },

      {
        title: '是否只读',
        setterType: 'switch',
        dataKey: 'isRead'
      },
      {
        title: '取消审批',
        setterType: 'switch',
        dataKey: 'cancelEditApprove'
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
    againAddSuccess: {
      name: 'againAddSuccess',
      title: '再次提交成功',
      description: '再次提交成功',
      parameters: []
    },
    dataEditSuccess: {
      name: 'dataEditSuccess',
      title: '编辑成功',
      description: '编辑成功',
      parameters: []
    },
    againAudit: {
      name: 'againAudit',
      title: '再次审核成功',
      description: '再次审核成功',
      parameters: []
    }
  }
};
