import { Box, Container, Typography } from "@mui/material";
import Header from "../layout/Header";

export default function Homepage() {
    return (
        <Box marginTop={"30px"}>
            <Typography textAlign={"center"} variant="h3" color={"#0F2940"} fontWeight={"700"}>WELCOME TO THE RESTAURANT</Typography>
            <Box display={"flex"} justifyContent={"space-evenly"} marginTop={"45px"} borderRadius={"10px"} bgcolor={"#0F2940"}>
                <Box display={"flex"} alignItems={"center"} flexDirection={"column"} padding={"10px"}>
                    <img style={{ maxWidth: "360px" }} src={"/icons/order.png"} /// <reference path="https://www.flaticon.com/free-icons/pizza" title="pizza icons" />
                    />
                    <Typography variant="h4" color={"white"} fontWeight={"600"}><span style={{color:"#E95A21"}}>MAKE </span>AN ORDER </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} flexDirection={"column"} padding={"10px"}>             
                    <img style={{ maxWidth: "360px" }} src={"/icons/food.png"} /// <reference path="https://www.flaticon.com/free-icons/pizza" title="pizza icons" />
                    />
                    <Typography variant="h4" color={"white"} fontWeight={"600"}><span style={{color:"#E95A21"}}>VIEW </span>YOUR ORDERS </Typography>
                </Box>
            </Box>
        </Box>
    )
}