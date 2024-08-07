export const advancedTree = {
  title: '树形控件',
  meta: {
    title: '树形控件',
    description: '树形控件',
    icon: '',
    type: 'advancedTree',
    searchInput: 'shuxingkongjian树形控件advancedtree'
  },
  data: {
    //节点数据
    dataSource:`[
      {
        label: 'Level one 1',
        children: [
          {
            label: 'Level two 1-1',
            children: [
              {
                label: 'Level three 1-1-1'
              }
            ]
          }
        ]
      }
   
    ]`,
    //TODO数据预处理
    //显示线
    showLine:false,
    //支持多选
    multiple:false,
    //支持编辑
    editable:false,
    //支持拖拽
    draggable:false,
    //默认展开所有节点
    defaultExpandAll:true,
    //展开的节点
    expandedKeys:'[]',
    //支持选中
    selectable:true,
    //默认选中节点
    selectedKeys:'[]',
    //复选框
    checkable:false,
    //开启异步
    isLoadData:false,
    catId:'tree_llx2kiuk',
    size: '',
    desc: '',
    slotData: {
      name: '123'
    }
  },
  
  configure:{
    attribute:[
      {
        title: '节点数据',
        description: '属性: dataSource',
        type: 'array',
        setterType: 'codeEditor',
        dataKey: 'dataSource',
        show: true,
        fnCode: '() => {}'
      },
      
      // {
      //   title: '显示线',
      //   description: '属性: showLine',
      //   type: 'boolean',
      //   setterType: 'switch',
      //   dataKey: 'showLine',
      //   show: true,
      //   fnCode: '() => {}'
      // },
      {
        title: '支持多选',
        description: '属性: multiple',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'multiple',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '支持编辑',
        description: '属性: editable',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'editable',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '支持拖拽',
        description: '属性: draggable',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'draggable',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '默认展开所有节点',
        description: '属性: defaultExpandAll',
        type: 'boolean',
        setterType: 'block'
      
      },
      {
        title: '',
        description: '属性: defaultExpandAll',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'defaultExpandAll',
        show: true,
        fnCode: '() => {}'
      },
    
      {
        title: '展开的节点',
        description: '属性: expandedKeys | array',
        type: 'array',
        setterType: 'codeEditor',
        dataKey: 'expandedKeys',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '支持选中',
        description: '属性: selectable',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'selectable',
        show: true,
        fnCode: '() => {}'
      },
    
      {
        title: '默认选中节点',
        description: '属性: selectedKeys | array',
        type: 'array',
        setterType: 'codeEditor',
        dataKey: 'selectedKeys',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '复选框',
        description: '属性: checkable',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'checkable',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '开启异步',
        description: '属性: isLoadData',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'isLoadData',
        show: true,
        fnCode: '() => {}'
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