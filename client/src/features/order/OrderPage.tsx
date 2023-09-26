import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import ToppingCard from "./ToppingCard";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { useEffect, useState } from "react";
import { addSize, initializePizza, submitOrderAsnyc } from "./orderSlice";
import { LoadingButton } from "@mui/lab";
import { stat } from "fs";
import api from "../../app/api/requests";
import LoadingComponent from "../layout/LoadingComponent";



const toppings = [
    { "title": "Jalapeno slices", "pictureUrl": "/toppings/jalapenas.png", "cost": 1 },
    { "title": "Red Onion", "pictureUrl": "/toppings/r_svogunas.png", "cost": 1 },
    { "title": "Chicken", "pictureUrl": "/toppings/vistiena.png", "cost": 1 },
    { "title": "Tomatoes", "pictureUrl": "/toppings/pomidorai.jpg", "cost": 1 },
    { "title": "Salami", "pictureUrl": "/toppings/saliamis.png", "cost": 1 },
    { "title": "Cheese", "pictureUrl": "/toppings/suris.png", "cost": 1 },
]

export default function OrderPage() {
    const { pizza, status } = useAppSelector(state => state.order)
    const [isVisible, setVisible] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [totalCost, setTotalCost] = useState(0);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializePizza({}))
    }, [dispatch])


    const handleButtonClick = async () => {
        setVisible(false)
        dispatch(submitOrderAsnyc(pizza!))
        setLoading(true);
        try {
            setTimeout(async () => {
                const totalCost = await api.Order.getOrderCost()
                setTotalCost(totalCost)
                setVisible(true)
                setLoading(false)
            }, 500)

        }
        catch (error) {
            console.log(error)
        }
        finally {

        }


    }



    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginTop={"100px"} gap={"50px"}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Typography variant="h3" color={"#0F2940"} fontWeight={"500"}>Choose pizza size</Typography>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="medium"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="small" control={<Radio />} label="Small" onChange={(e) => dispatch(addSize((e.target as HTMLTextAreaElement).value))} />
                        <FormControlLabel value="medium" control={<Radio />} label="Medium" onChange={(e) => dispatch(addSize((e.target as HTMLTextAreaElement).value))} />
                        <FormControlLabel value="large" control={<Radio />} label="Large" onChange={(e) => dispatch(addSize((e.target as HTMLTextAreaElement).value))} />
                    </RadioGroup>
                </FormControl>
            </Box>

            <Box textAlign={"center"}>
                <Typography variant="h3" color={"#0F2940"} fontWeight={"500"}>What would you like to add</Typography>
                <Typography variant="h6" color={"rgb(250, 87, 41)"} fontWeight={"700"}>Orders with over 3 toppings get 10% discount</Typography>
                <Box display={"grid"} gridTemplateColumns={"repeat(3, 1fr)"} gap={"15px"} marginTop={"10px"}>
                    {toppings.map(({ title, pictureUrl, cost }, index) => (
                        <ToppingCard key={index} title={title} pictureUrl={pictureUrl} cost={cost}></ToppingCard>
                    ))}
                </Box>
            </Box>
            <LoadingButton loading={status === 'pending'} variant="contained" onClick={handleButtonClick}>SAVE ORDER</LoadingButton>
            {isVisible && (
                <Typography variant="h3"> Your order will cost {totalCost}€</Typography>
            )}
            {isLoading && (
                <LoadingComponent />
            )}
        </Box>


    )
}

