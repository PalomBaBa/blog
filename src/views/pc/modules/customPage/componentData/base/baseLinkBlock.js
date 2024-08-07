export const baseLinkBlock = {
  meta: {
    title: '链接块',
    description: '链接块',
    icon: '',
    type: 'baseLinkBlock',
    searchInput: 'lianjiekuai链接块baselinkblock'
  },
  data: {
   
    //单行截断
    isOneCut:false,
    //链接类型
    type:'outside',
    //选择页面内部
    pageUrl:'',
    //外部链接
    url:'',
    //新开页面
    isBlank:false, 
    //携带参数
    options:[
      {
        key:'key',
        value:'bat'
      }
    ],
    // 是否禁用
    disabled:false,
    //
    catId:'linkblock_123',
    size: '',
    desc: '',
    iconName:'',
    slotData: {
      name: '123'
    }
  },
  configure:{
    attribute: [
      {
        title: '链接设置',
        setterType: 'block'
        
      },
 
      {
        title: '链接类型',
        setterType: 'tabs',
        show: true,
        dataKey: 'type',
        options: [
          { label: '内部页面', value: 'inside' },
          {label:'外部链接',value:'outside'}
        ]
      },
      {
        title: '选择页面',
        setterType: 'input',
        showCondition: 'type',
        show: 'inside',
        dataKey: 'pageUrl'
      },
      {
        title: '链接地址',
        description: '属性:url',
        setterType: 'input',
        showCondition: 'type',
        show: 'outside',
        dataKey:'url'
      },
      {
        title: '新开页面',
        description: '属性:isBlank',
        setterType: 'switch',
        dataKey: 'isBlank',
        show:true
      },
      {
        title: '携带参数',
        setterType: 'block',
        show:true
      },
      {
        setterType: 'linkParamsSetter',
        show: true,
        options: [
          {
            label: 'key',
            value: 'bat',
            id:1
          }
        ],
        editInfo: [
          {
            title: '参数名',
            setterType: 'input',
            show: true,
            dataKey:'label'
          },
          {
            title: '参数值',
            setterType: 'input',
            show: true,
            dataKey:'value'
          }
        ]
      },
      {
        title: '是否禁用',
        description: '属性:disabled',
        setterType: 'switch',
        dataKey: 'disabled',
        show:true
      },
      {
        title: '高级',
        setterType: 'accordion',
        show: true,
        children: [{
          title: '唯一标识',
          description: '属性:catId',
          setterType: 'input',
          show: true,
          dataKey: 'catId'
        }]
      }
    ],
    styles: [
    ],
    advanced: []
  },
  children: [{
    title: '插槽1',
    type: 'slot',
    value: []
  }]
};