import React from 'react';
import { useStyles } from './styles';
import { Drawer, IconButton } from '@material-ui/core';
import Logo from '../Logo/Logo';

import FilterMenu from '../FilterMenu/FilterMenu';
import CloseIcon from '@material-ui/icons/Close';

const MenuBar = ({ menuOpen, setMenuOpen, anchor }) => {
    const classes = useStyles();
    return (
        <Drawer classes={{ paper: classes.paper }} anchor={anchor} open={menuOpen} onClose={() => setMenuOpen(false)}>
            <div className={classes.menuHeader}>
                <Logo onClick={() => setMenuOpen(false)} text />
                <IconButton onClick={() => setMenuOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </div>
            <FilterMenu />
        </Drawer>
    );
};

export default MenuBar;
