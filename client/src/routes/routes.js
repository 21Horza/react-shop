import Admin from "../pages/Admin"
import Basket from "../pages/Basket"
import Device from "../pages/Device"
import Auth from "../pages/Auth"
import Shop from "../pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, PAYMENT_ROUTE, STATUS_ROUTE } from "../utils/consts"
import Payment from "../pages/Payment"
import Status from "../pages/Status"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />
    },

    {
        path: BASKET_ROUTE,
        element: <Basket />
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <Shop />
    },

    {
        path: DEVICE_ROUTE + '/:id',
        element: <Device />
    },

    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },

    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },

    {
        path: PAYMENT_ROUTE,
        element: <Payment />
    },

    {
        path: STATUS_ROUTE,
        element: <Status />
    }
]