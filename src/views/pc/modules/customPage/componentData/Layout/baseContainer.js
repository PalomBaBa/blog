export const baseContainer = {
  title: '布局容器',
  meta: {
    title: '布局容器',
    description: '布局容器',
    icon: '',
    type: 'baseContainer',
    searchInput: 'bujurongqi布局容器basecontainer'
  },
  data: {
    content: '12',
    justify:'start',
    row:'24',
    align:'top',
    wrap:true,
    catId:'container_llx2kiuk',
    size: '',
    desc: '',
    slotData: {
      name: '123'
    }
  },
  
  configure:{
    attribute:[
      {
        title: '布局',
        description: '属性: content 说明 | 1/12 一共12等分',
        setterType: 'block',
        show: true
      },
      
      {
        title: '',
        description: '属性: ',
        type: 'string',
        setterType: 'layoutBox',
        dataKey: 'content',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '列间距',
        description: '属性: row',
        type: 'string',
        setterType: 'select',
        dataKey: 'row',
        dataName:'',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label: '超大(24px)',
            value: '24'
          },
          {
            label: '大(20px)',
            value: '20'
          },
          {
            label: '中(16px)',
            value: '16'
          },
          {
            label: '小(12px)',
            value: '12'
          },
          {
            label: '超小(8px)',
            value: '8'
          },
          {
            label: '无(0px)',
            value: '0'
          }
        
        ]
      },
      {
        title: '水平排列方式',
        description: '属性: justify',
        type: 'string',
        setterType: 'select',
        dataKey: 'justify',
        dataName:'',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label: 'start',
            value: 'start'
          },
          {
            label: 'center',
            value: 'center'
          },
          {
            label: 'space-around',
            value: 'space-around'
          },
          {
            label: 'space-between',
            value: 'space-between'
          },
          {
            label: 'end',
            value: 'end'
          }
        ]
      },
      {
        title: '垂直排列方式',
        description: '属性: align',
        type: 'string',
        setterType: 'select',
        dataKey: 'align',
        dataName:'',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label: 'top',
            value: 'top'
          },
          {
            label: 'middle',
            value: 'middle'
          },
          {
            label: 'bottom',
            value: 'bottom'
          }
        
        ]
      },
      {
        title: '换行',
        setterType: 'accordion',
        dataKey:'wrap',
        show: true,
        children: [
          {
            title: '是否自动换行',
            description: '',
            type: 'boolean',
            setterType: 'switch',
            dataKey: 'wrap',
            show: true
          }
        ]
      },
      {
        title: '高级',
        setterType: 'accordion',
        dataKey:'catId',
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
    styles:[],
    advanced:[]
  },
  children: [{
    title: '插槽1',
    type: 'slot',
    value: []
  }],
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