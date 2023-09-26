import { Box, Typography } from "@mui/material";
import { Order } from "../../app/models/Order";

interface Props {
    order: Order
}


export default function OrderCard({ order }: Props) {
    return (
        <Box borderRadius={"10px"} display={"grid"} gridTemplateColumns={"1fr 3fr 1fr"} margin={"5px"} minWidth={"100%"} alignItems={"center"} padding={"3px"} bgcolor={"#0F2940"} color={"white"}>

            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Typography color={"rgb(250, 87, 41)"} fontWeight={"700"}>SIZE</Typography>
                <Typography textAlign={"center"} fontSize={"12px"}>{order.pizza.size.toUpperCase()}</Typography>
            </Box>

            <Box display={"flex"} flexDirection={"column"}>
                <Typography textAlign={"center"} color={"rgb(250, 87, 41)"} fontWeight={"700"}>TOPPINGS</Typography>
                <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gap={"15px"}>
                {order.pizza.toppings.map((topping, index) => (
                    <Typography key={index} fontSize={"12px"}>{topping.title.toUpperCase()}</Typography>
                ))}
                </Box>

            </Box>

            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Typography color={"rgb(250, 87, 41)"} fontWeight={"700"}>TOTAL COST</Typography>
                <Typography fontSize={"12px"}>{order.totalCost} €</Typography>
            </Box>

        </Box>
    )
}