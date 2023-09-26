import { createBrowserRouter } from "react-router-dom";
import App from "../../features/layout/App";
import OrderPage from "../../features/order/OrderPage";
import Homepage from "../../features/home/Homepage";
import OrderList from "../../features/orderList/OrderList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Homepage/>
            },
            {
                path: "order",
                element: <OrderPage/>
            },
            {
                path: "orders",
                element: <OrderList/>
            }
        ]
    }
])