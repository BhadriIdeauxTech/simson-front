
import MainLayout from '../../Layout/MainLayout'
import LoginPage from '../../Modules/Login/LoginPage'
import PageNotFound from '../Components/PageNotFound'
import ProductDetails from '../../Modules/ProductProfile/Partials/ProductDetails'
import ProductTable from '../../Modules/ProductProfile/Partials/ProductTable'
import LoginDashboard from '../../Modules/Login/LoginDashboard'
import { ViewCustomers } from '../../Modules/ViewCustomers'
import NopageFound from '../../Modules/NopageFound/NopageFound'
import { Seo } from '../../Modules/SEO/Seo'

export const anonymous = [
    {
        routePath: '/',
        Component: MainLayout,
    },
    {
        routePath: '/login',
        Component: LoginPage,
    },
    {
        routePath: '*',
        Component: NopageFound,
    },
]

export const adminAuthenticated = [
    {
        routePath: '/',
        Component: LoginDashboard,
    },
    {
        routePath: '/addproduct',
        Component: ProductDetails,
    },
    {
        routePath: '/viewproduct',
        Component: ProductTable,
    },
    {
        routePath: '/viewCustomers',
        Component: ViewCustomers,
    },
    {
        routePath: '/seo',
        Component: Seo,
    },
    {
        routePath: '*',
        Component: PageNotFound,
    },
]
