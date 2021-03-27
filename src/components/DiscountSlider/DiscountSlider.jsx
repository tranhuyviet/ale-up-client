import { Slider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useUI } from '../../context/uiContext';
import { useStyles } from './styles';

// const marks = [
//     {
//         value: 0,
//         label: '0',
//     },
//     {
//         value: 50,
//         label: '50',
//     },

//     {
//         value: 100,
//         label: '100',
//     },
// ];

const DiscountSlider = () => {
    const classes = useStyles();
    const { variables, setVariables, handleFilterOpen } = useUI();
    const [value, setValue] = useState(variables.discount.length > 0 ? variables.discount : [0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeCommitted = () => {
        if (value[0] > 0 || value[1] < 100) {
            setVariables({ ...variables, discount: value });
        } else {
            setVariables({ ...variables, discount: [] });
        }
    };

    useEffect(() => {
        setValue(variables.discount.length > 0 ? variables.discount : [0, 100]);
    }, [variables.discount]);

    return (
        <div className={classes.discountSlider}>
            <Typography className={classes.title}>Alennus</Typography>
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
                onChangeCommitted={() => {
                    handleChangeCommitted();
                    handleFilterOpen(false);
                }}
                min={0}
                max={100}
                // marks={marks}
            />
        </div>
    );
};

export default DiscountSlider;
