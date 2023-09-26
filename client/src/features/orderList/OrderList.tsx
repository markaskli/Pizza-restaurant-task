import { Box, Typography } from "@mui/material";
import OrderCard from "./OrderCard";
import { Order } from "../../app/models/Order";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { fetchOrdersAsync } from "./reportSlice";
import LoadingComponent from "../layout/LoadingComponent";
import { Pizza } from "../../app/models/Pizza";


export default function OrderList() {
    const {order, status} = useAppSelector(state => state.report)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchOrdersAsync())
    }, [dispatch])

    if (status.includes('pending')) return <LoadingComponent message="Orders are being loaded.."/>
    if (!order) return <Box display={"flex"} justifyContent={"center"} marginTop={"30px"} color={"#0F2940"}><Typography variant="h3">You do not have any orders yet!</Typography></Box>

    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography variant="h3" marginBottom={"15px"} marginTop={"30px"} color={"#0F2940"}>Your Orders</Typography>
            {order.map((order, index) => (
                <OrderCard key={index} order={order}/>
            ))}

        </Box>
    )
}