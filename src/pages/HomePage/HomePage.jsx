import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ProductCard from '../../components/ProductCard/ProductCard';

import { CircularProgress, Container, Grid, Typography, Button, useScrollTrigger, Zoom, Fab, LinearProgress, Chip } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './styles';
// import { Link } from 'react-router-dom';
import { useUI } from '../../context/uiContext';
import FilterBar from '../../components/FilterBar/FilterBar';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import shopBagImg1 from '../../images/shop-bag1.png';
import { GET_PRODUCTS } from '../../graphql';
import TagsAndMarketsBar from '../../components/TagsAndMarketsBar/TagsAndMarketsBar';
// import Hero from '../../components/Hero/Hero';

const LIMIT = 24;

function ScrollTop(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        // const anchor = document.getElementById('back-to-top-anchor');
        const anchor = (event.target.ownerDocument || document).querySelector('#top-anchor');

        if (anchor) {
            // anchor.scrollIntoView();
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" style={{ position: 'fixed', bottom: 16, right: 16 }}>
                {children}
            </div>
        </Zoom>
    );
}

const HomePage = ({ props }) => {
    const classes = useStyles();
    // const [variables, setVariables] = useState('');
    const { variables, setVariables } = useUI();
    // const [menuSelected, setMenuSelected] = useState('discount');
    const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
        variables: { ...variables, offset: 0, limit: LIMIT },
    });

    const [isLoadingMore, setIsLoadingMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    const handleLoadMore = async () => {
        try {
            setLoadingMore(true);
            await fetchMore({
                variables: {
                    // ...variables,
                    offset: data.products.products.length,
                    limit: LIMIT,
                },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    // console.log(fetchMoreResult);
                    // if (fetchMoreResult.products.products.length < LIMIT) {
                    //     setIsLoadingMore(false);
                    // } else {
                    //     setIsLoadingMore(true);
                    // }
                    fetchMoreResult.products.products = [...prevResult.products.products, ...fetchMoreResult.products.products];
                    // console.log(fetchMoreResult);
                    return fetchMoreResult;
                },
            });
            setLoadingMore(false);
        } catch (error) {
            console.log(error);
        }
    };

    const Loading = () => (
        <div className={classes.loading}>
            {/* <CircularProgress /> */}
            <LinearProgress color="primary" style={{ width: '100%' }} />
        </div>
    );

    const Error = () => (
        <div className={classes.error}>
            <Typography className={classes.errorText}>Tuotetta ei löytynyt. Yritä uudelleen!</Typography>

            {/* <Button variant="outlined" color="primary" component={Link} to="/" onClick={() => setVariables({})}>
                Back to Home
            </Button> */}
        </div>
    );

    useEffect(() => {
        if (data && data.products) {
            setIsLoadingMore(data.products.hasMore);
        }
    }, [data]);

    //if (loading || loadingIntroduce) return <Loading />;
    // if (error || !data || data.products.products.length === 0) return <Error />;

    console.log('VARIABLES', variables);

    return (
        <>
            <Container className={classes.container} id="top-anchor" maxWidth="lg">
                <Grid container>
                    <Grid item lg={2} md={3} sm={3} className={classes.filterMenuContainer}>
                        <FilterMenu />
                    </Grid>
                    <Grid item lg={10} md={9} sm={9} xs={12} container direction="column" className={classes.gridContainer}>
                        {loading ? (
                            <Grid item>
                                <Loading />
                                {/* {(loading || loadingIntroduce) && <Loading />} */}
                            </Grid>
                        ) : (
                            <Grid item container direction="column" style={{ paddingTop: 8 }}>
                                <Grid item className={classes.chipContainer} container spacing={1}>
                                    {variables.name !== '' && (
                                        <Grid item>
                                            <Chip
                                                // avatar={<Avatar>N</Avatar>}
                                                label={`Etsi: ${variables.name}`}
                                                // color="primary"
                                                onDelete={() => {
                                                    setVariables({ ...variables, name: '' });
                                                }}
                                                className={classes.chip}
                                            />
                                        </Grid>
                                    )}
                                    {variables.discount.length > 0 && (
                                        <Grid item>
                                            <Chip
                                                // avatar={<Avatar>N</Avatar>}
                                                label={`Alennus: -${variables.discount[0]}% -${variables.discount[1]}%`}
                                                // color="primary"
                                                onDelete={() => {
                                                    setVariables({ ...variables, discount: [] });
                                                }}
                                                className={classes.chip}
                                            />
                                        </Grid>
                                    )}
                                    {variables.price.length > 0 && (
                                        <Grid item>
                                            <Chip
                                                // avatar={<Avatar>N</Avatar>}
                                                label={`Hinta: ${variables.price[0]}€ - ${variables.price[1]}€`}
                                                // color="primary"
                                                onDelete={() => {
                                                    setVariables({ ...variables, price: [] });
                                                }}
                                                className={classes.chip}
                                            />
                                        </Grid>
                                    )}
                                    {variables.tag !== 'all' && (
                                        <Grid item>
                                            <Chip
                                                // avatar={<Avatar>N</Avatar>}
                                                label={`Kategoria: ${variables.tag}`}
                                                // color="primary"
                                                onDelete={() => {
                                                    setVariables({ ...variables, tag: 'all' });
                                                }}
                                                className={classes.chip}
                                            />
                                        </Grid>
                                    )}
                                    {variables.market !== 'all' && (
                                        <Grid item>
                                            <Chip
                                                // avatar={<Avatar>N</Avatar>}
                                                label={`Market: ${variables.market}`}
                                                // color="primary"
                                                onDelete={() => {
                                                    setVariables({ ...variables, market: 'all' });
                                                }}
                                                className={classes.chip}
                                            />
                                        </Grid>
                                    )}
                                </Grid>
                                <FilterBar total={data && data.products && data.products.total} />
                                <TagsAndMarketsBar />
                                {(error || !data || data.products.products.length === 0) && <Error />}
                            </Grid>
                        )}
                        {data && (
                            <Grid item container spacing={2} justify="center">
                                {data &&
                                    data.products.products &&
                                    data.products.products.map((product) => (
                                        <Grid item xs={6} sm={6} md={4} lg={3} key={product._id} container justify="center">
                                            <ProductCard product={product} />
                                        </Grid>
                                    ))}
                                {isLoadingMore && data.products.products.length > 0 && (
                                    <Button
                                        className={classes.loadMoreButton}
                                        variant="outlined"
                                        // color="secondary"
                                        disabled={loadingMore}
                                        startIcon={loadingMore ? <CircularProgress size={20} /> : <ExpandMoreIcon />}
                                        onClick={handleLoadMore}
                                    >
                                        Lataa Lisää
                                    </Button>
                                )}
                            </Grid>
                        )}
                    </Grid>
                </Grid>

                {/* <FilterForm setVariables={setVariables} /> */}

                <ScrollTop {...props}>
                    <Fab color="secondary" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </Container>
            {/* <img src={shopBagImg1} alt="bags" className={classes.shopBag1} /> */}
        </>
    );
};

export default HomePage;
