export const advancedSlider = {
  title: '轮播',
  meta: {
    title: '轮播',
    description: '轮播',
    icon: '',
    type: 'advancedSlider',
    searchInput: 'lunbo轮播advancedslider'
  },
  data: {
    //自定义模式
    IsDiy:false,
    //自定义模式数据
    diyContents:'[]',
    //自定义模式渲染
    diyContentsRender:'',
    //轮播项
    images:'',
    // 类型
    //轮播项高度自适应 (图片时会保持长宽比)
    slidelmageHeightAuto:false,
    // 轮播项高度
    slidelmageHeight:'',
    // 轮播方向
    slideDirection:'hoz',//ver
    //轮播速度
    speed:3000,
    // 懒加载
    lazyload:false,
    //动效类型
    animation:'',//card
    // 箭头
    arrows:true,
    options:[
      {
        id:1,
        value:'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
        label:'图片一',
        Selected:false //是否选中
      },
      {
        id:2,
        value:'https://img1.baidu.com/it/u=225387823,2672794982&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666',
        label:'图片二',
        Selected:false
      },
      {
        id:3,
        value:'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg',
        label:'图片三',
        Selected:false
      }
    ],
    editInfo: [
      {
        title: '标题',
        setterType: 'input',
        show: true,
        dataKey:'label'
      },
      {
        title: '图片地址',
        setterType: 'input',
        show: true,
        dataKey:'value'
      }
    ],
    //自动播放
    autoplay:false,
    //循环滚动
    ihfinite:false,
    //导航锚点
    //指示器的位置
    dotsDirection:'outside',//none
    //导航锚点触触发方式
    triggerType:'click',//hover
    catId:'slider_llx2kiuk',
    size: '',
    desc: '',
    slotData: {
      name: '123'
    }
  },
  
  configure:{
    attribute:[
      {
        title: '自定义模式',
        description: '属性: IsDiy',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'IsDiy',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '自定义模式数据',
        description: '属性: diyContents',
        type: 'array',
        setterType: 'codeEditor',
        dataKey: 'diyContents',
        show: 'IsDiy',
        fnCode: '() => {}'
      },
      
      {
        title: '轮播项',
        setterType: 'block',
        show: true
      },
      {
        setterType: 'radio',
        show: true,
        dataKey:'images'
      
      },
      {
        title: '轮播项高度自适应 (图片时会保持长宽比)',
        description: '属性: slidelmageHeightAuto',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'slidelmageHeightAuto',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '轮播项高度',
        description: '属性: slidelmageHeight',
        type: 'number',
        setterType: 'input',
        dataKey: 'slidelmageHeight',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '轮播方向',
        description: '属性: slideDirection',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'slideDirection',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label:'水平',
            value:'hoz'
          },
          {
            label:'垂直',
            value:'ver'
          }
        ]
      },
      {
        title: '轮播速度',
        description: '属性: speed',
        type: 'number',
        setterType: 'input',
        dataKey: 'speed',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '图片懒加载',
        description: '属性: lazyload',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'lazyload',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '动效类型',
        description: '属性: animation',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'animation',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label:'左右滑动',
            value:''
          },
          {
            label:'卡片模式',
            value:'card'
          }
        ]
      },
      {
        title: '箭头',
        description: '属性: arrows',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'arrows',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '自动播放',
        description: '属性: autoplay',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'autoplay',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '循环滚动',
        description: '属性: ihfinite',
        type: 'boolean',
        setterType: 'switch',
        dataKey: 'ihfinite',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '导航锚点',
        show: true,
        setterType: 'block'
       
      },
      // {
      //   title: '指示器的位置',
      //   description: '属性: dotsDirection',
      //   type: 'string',
      //   setterType: 'tabs',
      //   dataKey: 'dotsDirection',
      //   show: true,
      //   fnCode: '() => {}',
      //   options:[
      //     {
      //       label:'水平',
      //       value:'hoz'
      //     },
      //     {
      //       label:'垂直',
      //       value:'ver'
      //     }
      //   ]
      // },
      {
        title: '导航锚点触触发方式',
        description: '属性: triggerType',
        type: 'string',
        setterType: 'tabs',
        dataKey: 'triggerType',
        show: true,
        fnCode: '() => {}',
        options:[
          {
            label:'click',
            value:'click'
          },
          {
            label:'hover',
            value:'hover'
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