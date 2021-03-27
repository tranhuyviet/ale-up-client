import { gql } from '@apollo/client';

export const GET_MARKET = gql`
    query getMarkets {
        markets {
            id
            name
            logo
        }
    }
`;

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
    query getProducts($name: String, $market: String, $discount: [Int!], $offset: Int, $limit: Int, $sort: String) {
        products(name: $name, market: $market, discount: $discount, offset: $offset, limit: $limit, sort: $sort) {
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
