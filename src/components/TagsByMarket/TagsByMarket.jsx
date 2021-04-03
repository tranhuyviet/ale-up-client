import React from 'react';
import { GET_TAGS_BY_MARKET } from '../../graphql';
import { useQuery } from '@apollo/client';
import { useUI } from '../../context/uiContext';
import { useStyles } from './styles';
import { Button } from '@material-ui/core';

import CheckCircleOutlineOutlined from '@material-ui/icons/CheckCircleOutlineOutlined';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';

const TagsByMarket = () => {
    const classes = useStyles();

    const { variables, setVariables } = useUI();
    const { data, loading, error } = useQuery(GET_TAGS_BY_MARKET, {
        variables: { market: variables.market },
    });

    if (loading) return null;
    if (error) return <p>get tags by market error</p>;
    if (!data || !data.tagsByMarket) return null;

    console.log(data);

    return (
        <>
            {data.tagsByMarket.length > 1 && (
                <div className={classes.tagsAndMarketsBar}>
                    <Button
                        variant="outlined"
                        className={classes.market}
                        onClick={() => setVariables({ ...variables, tag: 'all' })}
                        startIcon={variables.tag === 'all' ? <CheckCircleOutlineOutlined className={classes.icon} /> : <RadioButtonUncheckedOutlinedIcon />}
                        size="small"
                    >
                        Kaikki {variables.market} kategoria
                    </Button>
                    {data &&
                        data.tagsByMarket &&
                        data.tagsByMarket.map((tag) => (
                            <Button
                                key={tag._id}
                                className={classes.market}
                                variant="outlined"
                                onClick={() => {
                                    setVariables({ ...variables, tag: tag.tag });
                                }}
                                // color={variables.market === market.name ? 'primary' : 'secondary'}
                                size="small"
                                startIcon={
                                    variables.tag === tag.tag ? <CheckCircleOutlineOutlined className={classes.icon} /> : <RadioButtonUncheckedOutlinedIcon />
                                }
                            >
                                {tag.tag}
                            </Button>
                        ))}
                </div>
            )}
        </>
    );
};

export default TagsByMarket;
