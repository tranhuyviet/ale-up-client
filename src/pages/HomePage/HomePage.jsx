import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import ProductCard from '../../components/ProductCard/ProductCard';

import { CircularProgress, Container, Grid, Typography, Button, useScrollTrigger, Zoom, Fab } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './styles';
// import { Link } from 'react-router-dom';
import { useUI } from '../../context/uiContext';
import FilterBar from '../../components/FilterBar/FilterBar';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import shopBagImg1 from '../../images/shop-bag1.png';
export const PRODUCTS_FRAGMENT = gql`
    fragment ProductFragment on Product {
        id
        name
        newPrice
        oldPrice
        discount
        imageUrl
        link
        market {
            id
            name
            logo
        }
    }
`;

export const GET_PRODUCTS = gql`
    query getProducts($name: String, $market: String, $offset: Int, $limit: Int, $sort: String) {
        products(name: $name, market: $market, offset: $offset, limit: $limit, sort: $sort) {
            total
            hasMore
            products {
                ...ProductFragment
            }
        }
    }
    ${PRODUCTS_FRAGMENT}
`;

export const GET_PRODUCT_INTRODUCE = gql`
    query getProductIntroduce {
        productIntroduce {
            ...ProductFragment
        }
    }
    ${PRODUCTS_FRAGMENT}
`;

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
    const { variables } = useUI();
    // const [menuSelected, setMenuSelected] = useState('discount');
    const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
        variables: { ...variables, offset: 0, limit: LIMIT },
    });
    const { data: dataIntroduce, loading: loadingIntroduce, error: errorIntroduce } = useQuery(GET_PRODUCT_INTRODUCE);

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
            <CircularProgress style={{ marginTop: 24 }} />
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

    if (loading || loadingIntroduce) return <Loading />;
    // if (error || !data || data.products.products.length === 0) return <Error />;

    // console.log('VARIABLES', variables);
    console.log(dataIntroduce);

    return (
        <>
            <Container className={classes.container} id="top-anchor" maxWidth="xl">
                {(loading || loadingIntroduce) && <Loading />}
                {(error || errorIntroduce || !data || data.products.products.length === 0) && <Error />}
                <Grid container>
                    <Grid item sm={2} className={classes.filterMenuContainer}>
                        <FilterMenu />
                    </Grid>
                    <Grid item sm={10} container spacing={2} justify="center" className={classes.gridContainer}>
                        {/* {dataIntroduce &&
                        dataIntroduce.productIntroduce &&
                        dataIntroduce.productIntroduce.map((product) => (
                            <Grid item xs={6} sm={4} md={3} key={product.id} container justify="center">
                                <ProductCard product={product} />
                            </Grid>
                        ))} */}
                        <Grid item xs={12}>
                            <FilterBar total={data && data.products && data.products.total} />
                        </Grid>
                        {data &&
                            data.products.products &&
                            data.products.products.map((product) => (
                                <Grid item xs={6} sm={6} md={4} lg={3} key={product.id} container justify="center">
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
