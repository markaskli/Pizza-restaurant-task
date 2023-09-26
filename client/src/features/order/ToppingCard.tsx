import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/store/store";
import { addTopping, removeTopping } from "./orderSlice";

interface Props {
    title: string
    pictureUrl: string
    cost: Number
}


const buttonStyles = {
    "backgroundColor": "white",
}

export default function ToppingCard({ title, pictureUrl, cost }: Props) {
    const [selected, setSelected] = useState(false)
    const dispatch = useAppDispatch()

    const handleToggle = () => {
        setSelected(preValue => !preValue)
        if (!selected) dispatch(addTopping({title, cost}))
        else dispatch(removeTopping({title,cost}))

    }


    return (
        <Box borderRadius={"10px"} boxShadow={"rgba(6, 5, 50, 0.12) 0px 0px 8px"} display={"flex"} flexDirection={"column"} alignItems={"center"} padding={"5px"} component={"button"}
                 onClick={handleToggle} sx={buttonStyles} border={selected ? "1px solid rgb(255, 105, 0)" : "1px solid rgb(255,255,255)"} value={""} justifyContent={"center"}>
            <img style={{ maxWidth: "90px" }} src={pictureUrl} />
            <Typography
                fontSize={"12px"}
                lineHeight={"16px"}
                height={"32px"}
                overflow={"hidden"}
            >
                {title}</Typography>
            <Typography fontWeight={"500"}>{cost.toString()}€</Typography>
        </Box>
    )
}