import React from 'react';
import { useStyles } from './styles';
import Logo from '../Logo/Logo';
import { Container, CssBaseline, Grid } from '@material-ui/core';

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container className={classes.container}>
                <CssBaseline />
                <Logo />
                <p className={classes.copy}>
                    {`© ${new Date().getFullYear()} `}
                    <a href="https://www.viet.fi" target="_blank" rel="noreferrer" className={classes.link}>
                        www.viet.fi
                    </a>
                </p>
                <p style={{ margin: 0, paddingBottom: 8 }}>Tämän verkkosivuston sisältö on lainattu:</p>
                <Container maxWidth="sm">
                    <Grid container className={classes.markets} justify="center">
                        <Grid item>
                            <a href="https://www.k-ruoka.fi" target="_blank" rel="noreferrer" className={classes.linkMarket}>
                                KMarket
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="https://www.lidl.fi/fi" target="_blank" rel="noreferrer" className={classes.linkMarket}>
                                Lidl
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="https://www.tokmanni.fi" target="_blank" rel="noreferrer" className={classes.linkMarket}>
                                Tokmanni
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="https://www.gigantti.fi/" target="_blank" rel="noreferrer" className={classes.linkMarket}>
                                Gigantti
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="https://www.verkkokauppa.com/" target="_blank" rel="noreferrer" className={classes.linkMarket}>
                                Verkkokauppa
                            </a>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </footer>
    );
};

export default Footer;
