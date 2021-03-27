import { Slider, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useUI } from '../../context/uiContext';
import { useStyles } from './styles';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_PRICE } from '../../graphql';

const marks = [
    {
        value: 0,
        label: '0',
    },

    {
        value: 100,
        label: '100',
    },
];

const PriceSlider = () => {
    const classes = useStyles();
    const { variables, setVariables } = useUI();
    // const { data, loading, error } = useQuery(GET_PRODUCT_PRICE);
    const [value, setValue] = useState(variables.price.length > 0 ? variables.price : [0, 5000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeCommitted = () => {
        setVariables({ ...variables, price: value });
    };

    // useEffect(() => {
    //     if (data) {
    //         setValue([data.productPrice.min, data.productPrice.max]);
    //         setVariables({ ...variables, price: [data.productPrice.min, data.productPrice.max] });
    //     }
    // }, []);

    // console.log(value);

    return (
        <div className={classes.priceSlider}>
            <Typography className={classes.title}>Hinta</Typography>
            <div className={classes.textContainer}>
                <Typography className={classes.text}>{`${value[0]} €`}</Typography>
                <Typography className={classes.text}>{`${value[1]} €`}</Typography>
            </div>
            {/* {data && data.productPrice && ( */}
            <Slider
                value={value}
                onChange={handleChange}
                //valueLabelDisplay="on"
                aria-labelledby="range-slider"
                onChangeCommitted={handleChangeCommitted}
                min={0}
                max={5000}
            />
            {/* )} */}
        </div>
    );
};

export default PriceSlider;
