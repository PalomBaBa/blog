export const basePage = {
  title: '页面内容',
  key: 'basePage',
  meta: {
    title: '页面内容',
    description: '页面内容',
    icon: '',
    type: 'basePage',
    searchInput: 'xuanxiangka选项卡basetabs',
    fileId: 'page1'
  },
  data: {
    catId: 'page',
    pcMargin: '0',
    pcPadding: '0',
    pcBackgroundColor: 'white',
    h5Margin: '0',
    h5Padding: '0',
    h5BackgroundColor: 'white'
  },
  children: [{
    title: '插槽1',
    type: 'slot',
    value: [
    ]
  }],
  configure: {
    attribute: [
      {
        title: '页面内容设置',
        setterType: 'accordion',
        show: true,
        children: [
          {
            title: 'PC端设置',
            setterType: 'block',
            show: true
          },
          {
            title: '外边距',
            setterType: 'tabs',
            show: true,
            dataKey: 'pcMargin',
            options: [
              {
                label: '无边距',
                value: '0'
              },
              {
                label: '20px',
                value: '20'
              },
              {
                label: '16px',
                value: '16'
              }
            ]
          },
          {
            title: '内间距',
            setterType: 'tabs',
            show: true,
            dataKey: 'pcPadding',
            options: [{
              label: '无边距',
              value: '0'
            },
            {
              label: '24px',
              value: '24'
            },
            {
              label: '20px',
              value: '20'
            },
            {
              label: '16px',
              value: '16'
            }
            ]
          },
          {
            title: '背景色',
            setterType: 'tabs',
            show: true,
            dataKey: 'pcBackgroundColor',
            options: [{
              label: '白色',
              value: 'white'
            },
            {
              label: '透明',
              value: 'transparent'
            }
            ]
          },
          {
            title: 'Mobile 端设置',
            setterType: 'block',
            show: true
          }, {
            title: '外边距',
            setterType: 'tabs',
            show: true,
            dataKey: 'h5Margin',
            options: [{
              label: '无边距',
              value: '0'
            },
            {
              label: '12px',
              value: '12'
            },
            {
              label: '20px',
              value: '20'
            }
            ]
          }, {
            title: '内间距',
            setterType: 'tabs',
            show: true,
            dataKey: 'h5Padding',
            options: [{
              label: '无边距',
              value: '0'
            },
            {
              label: '20px',
              value: '20'
            },
            {
              label: '12px',
              value: '12'
            }
            ]
          }, {
            title: '背景色',
            setterType: 'tabs',
            show: true,
            dataKey: 'h5BackgroundColor',
            options: [{
              label: '白色',
              value: 'white'
            },
            {
              label: '透明',
              value: 'transparent'
            }
            ]
          }
        ]
      }
    ]
  }
};