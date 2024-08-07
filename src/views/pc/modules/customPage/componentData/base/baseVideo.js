export const baseVideo = {
  meta: {
    title: '视频',
    description: '视频',
    icon: '',
    type: 'baseVideo',
    searchInput: 'shipin视频basevideo'
  },
  data: {
    width: 'auto',
    height: 238,
    //视频地址
    src: 'https://cloud.video.taobao.com/play/u/1804320196/p/1/e/6/t/1/287344840104.mp4',
    //原生标题
    title: '',
    //封面
    cover: '',
    //定制原生控制条
    controlsList: [],
    //画面适配 object-fit:
    // 默认 contain  拉伸 fill 覆盖 cover  缩减 scale-down 不适配  none
    sizeFit: 'contain',
    // 控制条
    controls: false,
    //倍速播放
    playbackRateControls: false,
    //倍速列表
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    //是否静音
    muted: false,
    //声音控件
    volumeControls: false,
    //音量大小
    volume: 1,
    //自动播放
    autoplay: false,
    //循环播放
    loop: false,
    //画中画
    pipControls: false,
    //唯一标示
    catId: 'video_123',
    slotData: {
      name: '123'
    }
  },
  configure: {
    attribute: [
      {
        title: '视频地址',
        description: '属性: url说明:目前仅支持.mp4、.flv、.m3u8格式',
        type: 'string',
        setterType: 'input',
        dataKey: 'src',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '原生标题',
        description: '属性: title',
        type: 'string',
        setterType: 'input',
        dataKey: 'title',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '上传封面',
        description: '属性: poster',
        type: 'string',
        setterType: 'input',
        dataKey: 'cover',
        show: true,
        fnCode: '() => {}'
      },
      {
        title: '播放器设置',
        setterType: 'accordion',
        description: '',
        show: true,
        children: [
          {
            title: '定制原生控制条',
            description: 'controlsList |说明: 可选值为 播放器设置: nodownload nofullscreen noremoteplayback',
            type: 'array',
            setterType: 'block',
            show: true
          },
          {
            setterType: 'input',
            show: true,
            dataKey: 'controlsList'
          },
          {
            title: '画面适配模式',
            setterType: 'block',
            description: '属性: sizeFit|说明: 默认显示',
            show: true
          },
          {
            setterType: 'tabs',
            show: true,
            dataKey: 'sizeFit',
            options: [{
              label: '默认',
              description: '保持原有尺寸比例。长度和高度中短的那条边与播放器大小一致，长的那条等比缩放，可能会有留白',
              type: 'string',
              show: true,
              setterType: 'tabs',
              value: 'contain'
            },
            {
              label: '拉伸',
              description: '内客拉伸填满整播放器，可能会变形',
              type: 'string',
              show: true,
              setterType: 'tabs',
              value: 'fill'
            },
            {
              label: '覆盖',
              description: '保持原有尺寸比例。宽度和高度中长的那条边跟容器大小一致，短的那条等比缩放。可能会有部分区域不可见',
              type: 'string',
              show: true,
              setterType: 'tabs',
              value: 'cover'
            },
            {
              label: '缩减',
              description: '当内容大小设置了none 或contain，将导致具体对象变得更小',
              type: 'string',
              show: true,
              setterType: 'tabs',
              value: 'scale-down'
            },
            {
              label: '不适配',
              description: '移除元素内容，不调整大小以适应性内部元素的容器',
              type: 'string',
              show: true,
              setterType: 'tabs',
              value: 'none'
            }
            ]
          },
          {
            title: '控制条',
            description: '进度条及控制区域 属性: controls|说明: 默认显示',
            type: 'boolean',
            setterType: 'switch',
            show: true,
            dataKey: 'controls'
          },
          {
            title: '倍速播放',
            description: '属性:playbackRateControls]说明:默认显示进度条及控制区域',
            type: 'boolean',
            show: true,
            setterType: 'switch',
            dataKey: 'playbackRateControls'
          },
          {
            title: '倍速列表',
            description: '属性:playbackRate',
            type: 'array',
            setterType: 'input',
            show: true,
            dataKey: 'playbackRate'
          },
          {
            title: '是否静音',
            description: '属性:muted',
            type: 'boolean',
            show: true,
            setterType: 'switch',
            dataKey: 'muted'
          },
          {
            title: '声音控件',
            description: '属性:volumeControls',
            type: 'boolean',
            show: true,
            setterType: 'switch',
            dataKey: 'volumeControls'
          },
          {
            title: '音量大小',
            description: '属性:volume',
            type: 'number',
            show: true,
            setterType: 'input',
            dataKey: 'volume'
          },
          {
            title: '自动播放',
            description: '属性:autoplay',
            type: 'boolean',
            show: true,
            setterType: 'switch',
            dataKey: 'autoplay'
          },
          {
            title: '循环播放',
            description: '属性:loop',
            type: 'boolean',
            show: true,
            setterType: 'switch',
            dataKey: 'loop'
          },
          {
            title: '画中画',
            description: '属性:pipControls',
            type: 'boolean',
            setterType: 'switch',
            show: true,
            dataKey: 'pipControls'
          }
        ]
      },
      {
        title: '高级',
        setterType: 'entry',
        dataName:'catId',
        show: true,
        children: [
          {
            title: '唯一标识',
            description: '',
            type: 'string',
            setterType: 'input',
            dataKey: 'catId'
            
          }
        ]
      }
    ],
    styles: [],
    advanced: []
  }
};
