import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import ProductCard from '../../components/ProductCard/ProductCard';

import { CircularProgress, Container, Grid, Typography, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { useUI } from '../../context/uiContext';
import FilterBar from '../../components/FilterBar/FilterBar';

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

const LIMIT = 20;

const HomePage = () => {
    const classes = useStyles();
    // const [variables, setVariables] = useState('');
    const { variables, setVariables } = useUI();
    // const [menuSelected, setMenuSelected] = useState('discount');
    const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
        variables: { ...variables, offset: 0, limit: 20 },
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
            <CircularProgress style={{ marginTop: 24 }} />
        </div>
    );

    const Error = () => (
        <div className={classes.error}>
            <Typography className={classes.errorText}>Can not found any product. Please try again!</Typography>
            <Button variant="outlined" color="primary" component={Link} to="/" onClick={() => setVariables(undefined)}>
                Back to Home
            </Button>
        </div>
    );

    useEffect(() => {
        if (data && data.products) {
            setIsLoadingMore(data.products.hasMore);
        }
    }, [data]);

    if (loading) return <Loading />;
    if (error || !data || data.products.products.length === 0) return <Error />;

    console.log(variables);

    return (
        <Container className={classes.container}>
            {loading && <Loading />}
            {(error || !data || data.products.products.length === 0) && <Error />}
            <FilterBar total={data.products.total} />
            <Grid container spacing={2} justify="center" className={classes.gridContainer}>
                {data.products &&
                    data.products.products &&
                    data.products.products.map((product) => (
                        <Grid item xs={6} sm={4} md={3} key={product.id} container justify="center">
                            <ProductCard product={product} />
                        </Grid>
                    ))}
            </Grid>
            {/* <FilterForm setVariables={setVariables} /> */}
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
        </Container>
    );
};

export default HomePage;
