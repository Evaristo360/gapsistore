import {
  BaseLayout
} from '../layouts';
import { Error404 } from '../views/Error404';
export const routes = {
  admin: [],
  public: [
    {
      path: '/',
      layout: BaseLayout,
      component: Error404,
      exact: true,
      titleMessage: 'Gapsi Store'
    },
    {
      layout: BaseLayout,
      component: Error404,
      titleMessage: '404'
    }
  ]
};
