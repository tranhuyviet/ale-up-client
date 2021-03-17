import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../images/aleup-logo.jpg';

const Logo = ({ onClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.logoContainer}>
            <Avatar src={logo} className={classes.avatar} />
            {/* <Typography variant="h6" className={classes.logo} component={Link} to="/" onClick={onClick}>*/}
            {/* <span className={classes.logoHead}>A</span> */}
            {/* <span>
                    ale-<span className={classes.logoBody}>up</span>
                </span>
            </Typography>  */}
        </div>
    );
};

export default Logo;
