import React from 'react';
import { GET_MARKETS_BY_TAG } from '../../graphql';
import { useQuery } from '@apollo/client';
import { useUI } from '../../context/uiContext';
import { useStyles } from './styles';
import { Button } from '@material-ui/core';

import CheckCircleOutlineOutlined from '@material-ui/icons/CheckCircleOutlineOutlined';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';

const MarketsByTag = () => {
    const classes = useStyles();

    const { variables, setVariables } = useUI();
    const { data, loading, error } = useQuery(GET_MARKETS_BY_TAG, {
        variables: { tag: variables.tag },
    });

    if (loading) return null;
    if (error) return <p>get market by tagID error</p>;
    if (!data || !data.marketsByTag) return null;

    return (
        <>
            {data.marketsByTag.length > 1 && (
                <div className={classes.tagsAndMarketsBar}>
                    <Button
                        variant="outlined"
                        className={classes.market}
                        onClick={() => setVariables({ ...variables, market: 'all' })}
                        startIcon={variables.market === 'all' ? <CheckCircleOutlineOutlined className={classes.icon} /> : <RadioButtonUncheckedOutlinedIcon />}
                        size="small"
                    >
                        Kaikki {variables.tag} market
                    </Button>
                    {data &&
                        data.marketsByTag &&
                        data.marketsByTag.map((market) => (
                            <Button
                                key={market._id}
                                className={classes.market}
                                variant="outlined"
                                onClick={() => {
                                    setVariables({ ...variables, market: market.name });
                                }}
                                // color={variables.market === market.name ? 'primary' : 'secondary'}
                                size="small"
                                startIcon={
                                    variables.market === market.name ? (
                                        <CheckCircleOutlineOutlined className={classes.icon} />
                                    ) : (
                                        <RadioButtonUncheckedOutlinedIcon />
                                    )
                                }
                            >
                                {market.name}
                            </Button>
                        ))}
                </div>
            )}
        </>
    );
};

export default MarketsByTag;
