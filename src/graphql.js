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
