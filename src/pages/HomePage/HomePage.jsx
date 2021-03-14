import React from 'react';
import { gql, useQuery } from '@apollo/client';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Grid } from '@material-ui/core';

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
    query getProducts {
        products {
            ...ProductFragment
        }
    }
    ${PRODUCTS_FRAGMENT}
`;

const HomePage = () => {
    const { data, loading, error } = useQuery(GET_PRODUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    if (!data) return <p>Something went wrong</p>;

    return (
        <div style={{ padding: 32 }}>
            <Grid container spacing={4} justify="center">
                {data.products &&
                    data.products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    );
};

export default HomePage;
