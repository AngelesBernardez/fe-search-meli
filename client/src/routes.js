import Search from './views/Search/Search';
import Results from './views/Results/Results';
import ProductDetails from './views/ProductDetails/ProductDetails';

export const routes = [
    {
        path: '/',
        component: Search,
        exact: true
    },
    {
        path: '/items',
        component: Results,
        exact: true
    },
    {
        path: '/items/:id',
        component: ProductDetails,
        exact: true
    }
]
