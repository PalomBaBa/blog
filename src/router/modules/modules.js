const router = [
  {
    path: '/boxshadowpc',
    name: 'boxshadowPc',
    component: ()=>import('@/views/pc/modules/boxShadow/index.vue')
  },
  {
    path: '/customPage',
    name: 'customPagePc',
    component: ()=>import('@/views/pc/modules/customPage/index.vue')
  }
]

export default router;
