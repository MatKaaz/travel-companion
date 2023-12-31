import React, { useState } from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';

import useStyles from "./styles";

const Header = ({ setCoordinates }) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
            </Toolbar>
        </AppBar>

    );
}

export default Header;