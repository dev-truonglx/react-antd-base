import About from '../pages/about';
import Home from '../pages/home';
import Profile from '../pages/profile';
import { PATH } from './path';

// interface Routers {
//   path: string;
//   exact: boolean;
//   children: func;
// }

export const routes = [
  {
    path: PATH.ABOUT,
    exact: true,
    component: About,
  },
  {
    path: PATH.PROFILE,
    exact: true,
    component: Profile,
  },
  {
    path: PATH.HOME,
    exact: true,
    component: Home,
  },
];
