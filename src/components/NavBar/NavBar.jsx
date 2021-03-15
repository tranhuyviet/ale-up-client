import React, { useState, useRef } from 'react';
import { AppBar, Button, Container, Grid, IconButton, Slide, TextField, Toolbar, Tooltip, useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core';
import { useStyles } from './styles';

import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';

import { useUI } from '../../context/uiContext';
// import { NavLink } from 'react-router-dom';
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
    const { toggleTheme, toggleLightDarkTheme, handleFilterOpen, setVariables } = useUI();
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const nameRef = useRef('');

    const handleToggleTheme = () => {
        toggleLightDarkTheme();
    };

    const handleSearch = () => {
        // console.log(nameRef.current.value);
        setVariables({ name: nameRef.current.value });
        nameRef.current.value = '';
    };

    return (
        <HideOnScroll>
            <AppBar className={classes.appbar} position="fixed">
                <Container>
                    <Toolbar className={classes.toolbar} disableGutters>
                        <Grid container alignItems="center">
                            <Grid item xs={4} sm={2}>
                                <Logo />
                            </Grid>
                            <Grid item xs={6} sm={8} container justify="center">
                                {/* {!matches && (
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
                            )} */}
                                <div className={classes.inputContainer}>
                                    {/* <SearchOutlinedIcon className={classes.searchIcon} /> */}
                                    <input
                                        type="text"
                                        placeholder="housut tokmanni, kana k-market,..."
                                        className={classes.searchInput}
                                        ref={nameRef}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSearch();
                                            }
                                        }}
                                    />
                                    <IconButton className={classes.searchButton} onClick={handleSearch}>
                                        <SearchOutlinedIcon />
                                    </IconButton>
                                    {/* <Button startIcon={<SearchOutlinedIcon />} className={classes.searchButton} variant="contained">
                                        Search
                                    </Button> */}
                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2} container justify="flex-end">
                                {/* <Tooltip title="Search products"> */}
                                {/* <IconButton color="inherit" onClick={() => handleFilterOpen(true)}>
                                    <SearchOutlinedIcon />
                                </IconButton> */}
                                {/* </Tooltip> */}
                                <Tooltip title="Toggle Light/Dark Theme">
                                    <IconButton onClick={handleToggleTheme} color="inherit">
                                        {toggleTheme === 'dark' ? <Brightness5OutlinedIcon /> : <Brightness4OutlinedIcon />}
                                    </IconButton>
                                </Tooltip>
                                {/* {matches && (
                                    <>
                                        <IconButton color="inherit" onClick={() => setMenuOpen(true)}>
                                            <MenuOutlinedIcon />
                                        </IconButton>
                                        <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} anchor="left" />
                                    </>
                                )} */}
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
};

export default NavBar;
