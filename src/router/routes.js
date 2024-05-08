const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') },
  //     { path: 'dashboard', component: () => import('pages/DashboardPage.vue') },
  //     { path: 'posts', component: () => import('pages/PostsPage.vue') },
  //     {
  //       path: 'settings',
  //       component: () => import('src/pages/SettingsPage.vue'),
  //     },
  //     {
  //       path: 'quasar-test',
  //       component: () => import('pages/QuasarTestPage.vue'),
  //     },
  //   ],
  // },
  { path: '/', component: () => import('pages/LandingPage.vue') },
  { path: '/dashboard', component: () => import('pages/DashboardPage.vue') },
  { path: '/posts', component: () => import('pages/PostsPage.vue') },
  {
    path: '/settings',
    component: () => import('pages/SettingsPage.vue'),
  },
  {
    path: '/quasar-test',
    component: () => import('pages/QuasarTestPage.vue'),
  },
  {
    path: '/chart-test',
    component: () => import('pages/ChartTestPage.vue'),
  },
  {
    path: '/chart-test2',
    component: () => import('pages/ChartTestPage2.vue'),
  },
  {
    path: '/gugudan',
    component: () => import('pages/GugudanPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
