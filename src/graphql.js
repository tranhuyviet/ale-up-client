import { gql } from '@apollo/client';

export const GET_TAGS = gql`
    query getTags {
        tags {
            _id
            tag
        }
    }
`;

export const GET_MARKET = gql`
    query getMarkets {
        markets {
            _id
            name
            logo
        }
    }
`;

export const PRODUCTS_FRAGMENT = gql`
    fragment ProductFragment on Product {
        _id
        name
        newPrice
        oldPrice
        discount
        imageUrl
        link
        market {
            _id
            name
            logo
        }
    }
`;

export const GET_PRODUCTS = gql`
    query getProducts($tag: String, $name: String, $market: String, $discount: [Int!], $price: [Int!], $offset: Int, $limit: Int, $sort: String) {
        products(tag: $tag, name: $name, market: $market, discount: $discount, price: $price, offset: $offset, limit: $limit, sort: $sort) {
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

export const GET_PRODUCT_PRICE = gql`
    query getProductPrice {
        productPrice {
            min
            max
        }
    }
`;
