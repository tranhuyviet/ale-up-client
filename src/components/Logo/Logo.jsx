import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

const Logo = ({ onClick }) => {
    const classes = useStyles();
    return (
        <Typography variant="h6" className={classes.logo} component={Link} to="/home" onClick={onClick}>
            <span className={classes.logoHead}>A</span>
            <span>
                le-<span className={classes.logoBody}>up</span>
            </span>
        </Typography>
    );
};

export default Logo;
