import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import ProductCard from '../../components/ProductCard/ProductCard';

import { CircularProgress, Container, Grid, Typography, Button } from '@material-ui/core';

import FilterForm from '../../components/FilterForm/FilterForm';
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
    query getProducts($name: String) {
        products(name: $name) {
            ...ProductFragment
        }
    }
    ${PRODUCTS_FRAGMENT}
`;

const HomePage = () => {
    const classes = useStyles();
    // const [variables, setVariables] = useState('');
    const { variables } = useUI();
    const { data, loading, error } = useQuery(GET_PRODUCTS, {
        variables,
    });

    if (loading)
        return (
            <div className={classes.loading}>
                <CircularProgress style={{ marginTop: 24 }} />
            </div>
        );
    if (error || data.products.length === 0)
        return (
            <div className={classes.error}>
                <Typography className={classes.errorText}>Can not found any product.</Typography>
                <Button variant="outlined" color="primary" component={Link} to="/">
                    Back to Home
                </Button>
            </div>
        );

    if (!data)
        return (
            <div className={classes.error}>
                <Typography className={classes.errorText}>Something went wrong. Please try again!</Typography>
                <Button variant="outlined" color="primary" component={Link} to="/">
                    Back to Home
                </Button>
            </div>
        );

    console.log('variables', variables);

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
        </Container>
    );
};

export default HomePage;
