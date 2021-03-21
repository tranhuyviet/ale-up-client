import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Button, Container, FormControl, Grid, IconButton, MenuItem, Select, Slide, Toolbar, Tooltip, useScrollTrigger } from '@material-ui/core';
import { useStyles } from './styles';

// import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';

import { useUI } from '../../context/uiContext';
// import { NavLink } from 'react-router-dom';
// import MenuBar from '../MenuBar/MenuBar';
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
    const { toggleTheme, toggleLightDarkTheme, setVariables, variables } = useUI();
    // const [menuOpen, setMenuOpen] = useState(false);
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const nameRef = useRef('');
    const [market, setMarket] = useState('all');

    const handleToggleTheme = () => {
        toggleLightDarkTheme();
    };

    const handleSearch = () => {
        // console.log(nameRef.current.value);
        setVariables({
            name: nameRef.current.value,
            market,
        });
        // nameRef.current.value = '';
    };

    useEffect(() => {
        if (!variables) {
            setMarket('all');
        }
    }, [variables]);

    return (
        // <HideOnScroll>
        <AppBar className={classes.appbar} position="fixed">
            <Container className={classes.container}>
                <Toolbar className={classes.toolbar} disableGutters>
                    <Grid container alignItems="center">
                        <Grid item xs={6} sm={4}>
                            <Logo text />
                        </Grid>
                        <Grid item xs={6} sm={8} container justify="flex-end" alignItems="center">
                            {/* <IconButton>
                                <SearchOutlinedIcon />
                            </IconButton> */}
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
                                <FormControl className={classes.formControl}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={market}
                                        onChange={(e) => {
                                            setMarket(e.target.value);
                                            setVariables({ ...variables, name: nameRef.current.value, market: e.target.value });
                                            // handleSearch();
                                        }}
                                        style={{ textAlign: 'center' }}
                                    >
                                        <MenuItem value={'all'} style={{ fontWeight: 'bold' }}>
                                            Kaikki
                                        </MenuItem>
                                        <MenuItem value={'6051181bb2107cfeb0e3561c'}>Tokmanni</MenuItem>
                                        <MenuItem value={'60508539ffff95dc4f4ebe8b'}>Lidl</MenuItem>
                                        <MenuItem value={'6051185fb2107cfeb0e3561d'}>K-market</MenuItem>
                                        <MenuItem value={'60525ede08a4e6ea39ca6001'}>Gigantti</MenuItem>
                                        <MenuItem value={'6053387af67b6d670a1b8488'}>Verkkokauppa</MenuItem>
                                    </Select>
                                </FormControl>
                                <input
                                    type="text"
                                    placeholder="naisten housut, kala lohi,..."
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
                            </div>
                        </Grid>
                        {/* <Grid item xs={2} sm={2} container justify="flex-end"> */}
                        {/* <Tooltip title="Search products"> */}
                        {/* <IconButton color="inherit" onClick={() => handleFilterOpen(true)}>
                                    <SearchOutlinedIcon />
                                </IconButton> */}
                        {/* </Tooltip> */}
                        {/* <Tooltip title="Toggle Light/Dark Theme">
                                <IconButton onClick={handleToggleTheme} color="inherit">
                                    {toggleTheme === 'dark' ? <Brightness5OutlinedIcon /> : <Brightness4OutlinedIcon />}
                                </IconButton>
                            </Tooltip> */}
                        {/* {matches && (
                                    <>
                                        <IconButton color="inherit" onClick={() => setMenuOpen(true)}>
                                            <MenuOutlinedIcon />
                                        </IconButton>
                                        <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} anchor="left" />
                                    </>
                                )} */}
                        {/* </Grid> */}
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
        // </HideOnScroll>
    );
};

export default NavBar;
