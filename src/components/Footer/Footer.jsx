import React from 'react';
import { useStyles } from './styles';
import Logo from '../Logo/Logo';

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Logo />
            <p className={classes.copy}>
                {`Copyright © ${new Date().getFullYear()} `}
                <a href="https://www.viet.fi" target="_blank" rel="noreferrer" className={classes.link}>
                    https://www.viet.fi
                </a>
            </p>
            <p style={{ margin: 0 }}>Contents of this website are quoted from:</p>
            <div>
                <a href="https://www.lidl.fi/fi" target="_blank" rel="noreferrer" className={classes.linkMarket}>
                    Lidl
                </a>
                <a href="https://www.k-ruoka.fi" target="_blank" rel="noreferrer" className={classes.linkMarket}>
                    K Market
                </a>
                <a href="https://www.tokmanni.fi" target="_blank" rel="noreferrer" className={classes.linkMarket}>
                    Tokmanni
                </a>
            </div>
        </footer>
    );
};

export default Footer;
