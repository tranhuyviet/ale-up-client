import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { GET_MARKET } from '../../graphql';
import { useQuery } from '@apollo/client';
import { Checkbox, MenuItem, MenuList } from '@material-ui/core';
import { useUI } from '../../context/uiContext';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DiscountSlider from '../DiscountSlider/DiscountSlider';
import PriceSlider from '../PriceSlider/PriceSlider';
import Tags from '../Tags/Tags';

// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const FilterMenu = () => {
    const classes = useStyles();
    const { variables, setVariables, handleFilterOpen } = useUI();
    const [menuMarketSelected, setMenuMarketSelected] = useState(variables.market || 'all');
    const { data, loading, error } = useQuery(GET_MARKET);

    const handleMenuSelected = (marketName) => {
        setMenuMarketSelected(marketName);
        setVariables({ ...variables, market: marketName });
    };

    useEffect(() => {
        setMenuMarketSelected(variables.market || 'all');
    }, [variables.market]);

    if (loading) return null;
    if (error) return <p>Error get markets...</p>;
    if (!data) return <p>Can not get markets data</p>;

    return (
        <div className={classes.filterMenu}>
            <DiscountSlider />
            <PriceSlider />
            <Tags />
            <MenuList>
                <MenuItem
                    selected={menuMarketSelected === 'all'}
                    onClick={() => {
                        handleMenuSelected('all');
                        handleFilterOpen(false);
                    }}
                    className={classes.allMarket}
                >
                    <Checkbox checked={menuMarketSelected === 'all' ? true : false} color="primary" />
                    {`Kaikki Market`}
                    {/* {`Kaikki Market (${data.markets.length})`} */}
                    {menuMarketSelected === 'all' && <ArrowForwardIosIcon className={classes.checkIcon} />}
                </MenuItem>
                {data &&
                    data.markets &&
                    data.markets.map((market, index) => (
                        <MenuItem
                            key={market._id}
                            onClick={() => {
                                handleMenuSelected(market.name);
                                handleFilterOpen(false);
                            }}
                            selected={menuMarketSelected === market.name}
                            className={classes.menuItem}
                        >
                            {/* {`${index + 1}. ${market.name}`}{' '} */}
                            {/* {<img src={market.logo} alt="logo" className={classes.marketLogo} />} */}
                            {market.name}
                            {menuMarketSelected === market.name && <ArrowForwardIosIcon className={classes.checkIcon} />}
                        </MenuItem>
                    ))}
            </MenuList>
        </div>
    );
};

export default FilterMenu;
