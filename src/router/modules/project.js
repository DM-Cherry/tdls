export default [
  {
    path: '/project/',
    name: 'project.home',
    component: () => import('@/views/project/Index.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'project.dashboard',
        meta: {
          name: '仪表盘（代办事项）',
        },
        component: () => import('@/views/project/dashboard/Index.vue'),
      },
    ],
  },
];
