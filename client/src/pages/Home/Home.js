import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "../Login/Login";
export default function Home() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Login/>
        </div>
    )
}
