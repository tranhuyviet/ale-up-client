import { Slider, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useUI } from '../../context/uiContext';
import { useStyles } from './styles';

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

const DiscountSlider = () => {
    const classes = useStyles();
    const { variables, setVariables } = useUI();
    const [value, setValue] = useState(variables.discount.length > 0 ? variables.discount : [0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeCommitted = () => {
        setVariables({ ...variables, discount: value });
    };

    return (
        <div className={classes.discountSlider}>
            <Typography>Prosentin alennus</Typography>
            <div className={classes.textContainer}>
                <Typography className={classes.text}>{`-${value[0]}%`}</Typography>
                <Typography className={classes.text}>{`-${value[1]}%`}</Typography>
            </div>
            <Slider
                value={value}
                onChange={handleChange}
                //valueLabelDisplay="on"
                aria-labelledby="range-slider"
                getAriaValueText={() => 'cac'}
                onChangeCommitted={handleChangeCommitted}
                min={0}
                max={100}
                marks={marks}
            />
        </div>
    );
};

export default DiscountSlider;
