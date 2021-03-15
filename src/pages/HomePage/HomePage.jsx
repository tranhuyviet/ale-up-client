import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import ProductCard from '../../components/ProductCard/ProductCard';

import { CircularProgress, Container, Grid, Typography, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { useUI } from '../../context/uiContext';

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
    query getProducts($name: String, $market: String, $offset: Int, $limit: Int) {
        products(name: $name, market: $market, offset: $offset, limit: $limit) {
            ...ProductFragment
        }
    }
    ${PRODUCTS_FRAGMENT}
`;

const LIMIT = 20;

const HomePage = () => {
    const classes = useStyles();
    // const [variables, setVariables] = useState('');
    const { variables, setVariables } = useUI();
    const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
        variables: { ...variables, offset: 0, limit: 20 },
    });
    const [isLoadingMore, setIsLoadingMore] = useState(true);

    const Loading = () => (
        <div className={classes.loading}>
            <CircularProgress style={{ marginTop: 24 }} />
        </div>
    );

    useEffect(() => {
        if (data && data.products.length > 0) {
            setIsLoadingMore(true);
        }
    }, [data]);

    if (loading) return <Loading />;
    if (error || !data || data.products.length === 0)
        return (
            <div className={classes.error}>
                <Typography className={classes.errorText}>Can not found any product. Please try again!</Typography>
                <Button variant="outlined" color="primary" component={Link} to="/" onClick={() => setVariables(undefined)}>
                    Back to Home
                </Button>
            </div>
        );

    // if (!data || data.products.length === 0)
    //     return (
    //         <div className={classes.error}>
    //             <Typography className={classes.errorText}>Something went wrong. Please try again!</Typography>
    //             <Button variant="outlined" color="primary" component={Link} to="/" onClick={() => setVariables(undefined)}>
    //                 Back to Home
    //             </Button>
    //         </div>
    //     );

    // console.log('variables', variables);
    // console.log(data);

    return (
        <Container className={classes.container}>
            <Grid container spacing={4} justify="center" style={{ padding: 20 }}>
                {data.products &&
                    data.products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} container justify="center">
                            <ProductCard product={product} />
                        </Grid>
                    ))}
            </Grid>
            {/* <FilterForm setVariables={setVariables} /> */}
            {isLoadingMore && data.products.length > 0 && (
                <Button
                    className={classes.loadMoreButton}
                    variant="outlined"
                    color="primary"
                    startIcon={<ExpandMoreIcon />}
                    onClick={async () => {
                        await fetchMore({
                            variables: {
                                // ...variables,
                                offset: data.products.length,
                                limit: LIMIT,
                            },
                            updateQuery: (prevResult, { fetchMoreResult }) => {
                                if (fetchMoreResult.products.length < LIMIT) {
                                    setIsLoadingMore(false);
                                } else {
                                    setIsLoadingMore(true);
                                }
                                fetchMoreResult.products = [...prevResult.products, ...fetchMoreResult.products];
                                console.log(fetchMoreResult);
                                return fetchMoreResult;
                            },
                        });
                    }}
                >
                    Load More
                </Button>
            )}
        </Container>
    );
};

export default HomePage;
