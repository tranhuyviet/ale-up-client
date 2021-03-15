import { Checkbox, FormControlLabel, FormGroup, Slider } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

function valuetext(value) {
    return `-${value}`;
}

const FilterBar = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        allMarkets: true,
        tokmanni: true,
        lidl: true,
        kmarket: true,
    });

    const marks = [
        {
            value: 10,
            label: '-10%',
        },
        {
            value: 50,
            label: '-50%',
        },

        {
            value: 90,
            label: '-90%',
        },
    ];

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div className={classes.filterbar}>
            {/* <Typography>{`Discount price`}</Typography> */}
            <Slider defaultValue={10} getAriaValueText={valuetext} aria-labelledby="discrete-slider-always" step={10} marks={marks} valueLabelDisplay="on" />
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={state.allMarkets} onChange={handleChange} name="allMarkets" />} label="All Markets" />
                <div className={classes.marketsCheckboxContainer}>
                    <FormControlLabel control={<Checkbox checked={state.tokmanni} onChange={handleChange} name="tokmanni" />} label="Tokmanni" />
                    <FormControlLabel control={<Checkbox checked={state.lidl} onChange={handleChange} name="lidl" />} label="Lild" />
                    <FormControlLabel control={<Checkbox checked={state.kmarket} onChange={handleChange} name="kmarket" />} label="K-market" />
                </div>
            </FormGroup>
        </div>
    );
};

export default FilterBar;
