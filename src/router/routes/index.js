import Home from '@src/page/home';
import helloRoutes from './hello';

// 路由的routes文件
const index = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@src/page/hello'),
    children: helloRoutes,
  },
  {
    path: '*',
    redirect: '/',
  },
];

export default index;
