export const baseIcon = {
  meta: {
    title: '图标',
    description: '图标',
    icon: '',
    type: 'baseIcon',
    searchInput: 'tubiao图标baseicon'
  },
  data: {
    catId: 'icon_123',
    iconType: 'basic',
    size: '12',
    desc: '',
    iconName: 'icon-a-No05',
    iconfontSymbol: '',
    otherType:'',
    extraClass: '',
    slotData: {
      name: '123'
    }
  },
  configure:{
    attribute:[
      {
        title: '默认值',
        description: '属性: type',
        type: 'string',
        setterType: 'block',
        show: true
      },
      {
        setterType: 'tabs',
        show: true,
        dataKey:'iconType',
        options: [
          {
            label: '使用基础图标',
            value:'basic'
          },
          {
            label: '使用自定义图标',
            value:'customIcon'
          }
        ]
      },
      {
        title:'基础图标',
        setterType: 'iconSelector',
        dataKey: 'iconName',
        show: 'basic',
        showCondition: 'iconType'
      },
      {
        title: 'Iconfont',
        description:'属性:iconfontSymbol',
        setterType: 'input',
        dataKey: 'iconfontSymbol',
        show: 'customIcon',
        showCondition: 'iconType'
      },
      {
        title: '图标 name',
        dataKey: 'otherType',
        description: '属性:otherTpye',
        setterType: 'input',
        show: 'customIcon',
        showCondition: 'iconType'
      },
      {
        title: '大小',
        setterType: 'block',
        show:true
      },
      {
        setterType: 'tabs',
        show: true,
        dataKey: 'size',
        options: [
          { label: 'xxs', value: '12' },
          {
            label: 'xs',
            value: '14'
          },
          {
            label: 'small',
            value: '16'
          },
          {
            label: 'medium',
            value: '18'
          },
          {
            label: 'large',
            value: '20'
          },
          {
            label: 'xl',
            value: '26'
          },
          {
            label: 'xxl',
            value: '32'
          },
          {
            label: 'xxxl',
            value: '38'
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
            description:'属性:catId',
            setterType: 'input',
            show: true,
            dataKey:'catId'
          },
          {
            title: '样式类名',
            description: '属性:extraClass',
            setterType: 'input',
            show: true,
            dataKey: 'extraClass'
          }
        ]
      }
    ],
    styles:[],
    advanced:[]
  }
};