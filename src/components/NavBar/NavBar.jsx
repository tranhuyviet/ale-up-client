import React, { useState } from 'react';
import { AppBar, Container, Grid, IconButton, Slide, Toolbar, Tooltip, useScrollTrigger, useMediaQuery, useTheme } from '@material-ui/core';
import { useStyles } from './styles';

import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';

import { useUI } from '../../context/uiContext';
import { NavLink } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import Logo from '../Logo/Logo';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const NavBar = () => {
    const classes = useStyles();
    const { toggleTheme, toggleLightDarkTheme } = useUI();
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const handleToggleTheme = () => {
        toggleLightDarkTheme();
    };

    return (
        <HideOnScroll>
            <AppBar className={classes.appbar} position="sticky">
                <Container>
                    <Toolbar className={classes.toolbar} disableGutters>
                        <Grid container alignItems="center">
                            <Grid item xs={6} sm={2}>
                                <Logo />
                            </Grid>
                            <Grid item xs={6} sm={10} container justify="flex-end">
                                {!matches && (
                                    <div className={classes.navlinks}>
                                        <NavLink to="/home" className={classes.link} activeClassName={classes.linkActive}>
                                            Home
                                        </NavLink>
                                        <NavLink to="/about" className={classes.link} activeClassName={classes.linkActive}>
                                            About
                                        </NavLink>
                                        <NavLink to="/contact" className={classes.link} activeClassName={classes.linkActive}>
                                            Contact
                                        </NavLink>
                                    </div>
                                )}
                                <Tooltip title="Toggle Light/Dark Theme">
                                    <IconButton onClick={handleToggleTheme} color="inherit">
                                        {toggleTheme === 'dark' ? <Brightness5OutlinedIcon /> : <Brightness4OutlinedIcon />}
                                    </IconButton>
                                </Tooltip>
                                {matches && (
                                    <>
                                        <IconButton color="inherit" onClick={() => setMenuOpen(true)}>
                                            <MenuOutlinedIcon />
                                        </IconButton>
                                        <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} anchor="left" />
                                    </>
                                )}
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
};

export default NavBar;
