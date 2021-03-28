import React from 'react';
import { useStyles } from './styles';

const Hero = () => {
    const classes = useStyles();
    return (
        <div className={classes.hero}>
            <div className={classes.heroContainer}></div>
        </div>
    );
};

export default Hero;
