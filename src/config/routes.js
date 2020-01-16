import Home from '$comp/home';
import Category from '$comp/category';

const routes = [
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/category',
    component: Category,
    exact: true,
  },
];

export default routes;