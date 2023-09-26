import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: "rgb(250, 87, 41)"
    }
}

const links = [
    {title: "Make an order", path: "order"},
    {title: "Your orders", path: "orders"}
]

export default function Header() {
    return (
        <AppBar position="sticky">
            <Toolbar sx={{display: "flex", justifyContent: "space-between", alignContent: "center"}}>
                <Typography variant="h6"
                    component={NavLink}
                    to={"/"}
                    style={navStyles}
                >
                    PIZZA RESTAURANT
                </Typography>
                <Box display={"flex"} justifyContent={"space-between"} gap={"30px"}>
                    {links.map(({ title, path }) => (
                        <Typography
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </Typography>
                    ))}
                </Box>
            </Toolbar>

        </AppBar>
    )
}