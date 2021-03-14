import React from 'react';
import { useStyles } from './styles';
import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const MenuBar = ({ menuOpen, setMenuOpen, anchor }) => {
    const classes = useStyles();
    return (
        <Drawer classes={{ paper: classes.paper }} anchor={anchor} open={menuOpen} onClose={() => setMenuOpen(false)}>
            <div className={classes.menuHeader}>
                <Logo onClick={() => setMenuOpen(false)} />
            </div>
            <List classes={{ padding: classes.muiListPadding }}>
                <ListItem button onClick={() => setMenuOpen(false)} component={Link} to="/home" classes={{ button: classes.muiListItem }}>
                    <ListItemText primary="Home" className={classes.listItemText} />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => setMenuOpen(false)} component={Link} to="/products" classes={{ button: classes.muiListItem }}>
                    <ListItemText primary="Products" className={classes.listItemText} />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => setMenuOpen(false)} component={Link} to="/about" classes={{ button: classes.muiListItem }}>
                    <ListItemText primary="About" className={classes.listItemText} />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => setMenuOpen(false)} component={Link} to="/contact" classes={{ button: classes.muiListItem }}>
                    <ListItemText primary="Contact" className={classes.listItemText} />
                </ListItem>
                <Divider />
            </List>
        </Drawer>
    );
};

export default MenuBar;
