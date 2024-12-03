import {
  BaseLayout
} from '../layouts';
import { Error404 } from '../views/Error404';
import { Cart } from '../views/Cart';
export const routes = {
  admin: [],
  public: [
    {
      path: '/',
      layout: BaseLayout,
      component: Cart,
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
