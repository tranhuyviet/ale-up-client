import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../images/aleup-logo.jpg';

const Logo = ({ onClick, text = false }) => {
    const classes = useStyles();
    return (
        <div className={classes.logoContainer}>
            <Avatar src={logo} className={classes.avatar} component={Link} to="/" onClick={onClick} />
            <Typography variant="h6" className={classes.logo} component={Link} to="/" onClick={onClick}>
                {text ? <span className={classes.logoBody}>aleup</span> : ''}
            </Typography>
        </div>
    );
};

export default Logo;
