import React from 'react';
import { useStyles } from './styles';
import Logo from '../Logo/Logo';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_MARKET } from '../../graphql';

const Footer = () => {
    const classes = useStyles();
    const { data, loading, error } = useQuery(GET_MARKET);

    if (loading) return null;
    if (error) return <p>Error get markets...</p>;
    if (!data) return <p>Can not get markets data</p>;

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
                        {data &&
                            data.markets &&
                            data.markets.map((market) => (
                                <Grid item key={market._id}>
                                    <img src={market.logo} alt="market" height="30px" className={classes.marketLogo} />
                                </Grid>
                            ))}
                    </Grid>
                </Container>
            </Container>
        </footer>
    );
};

export default Footer;
