import React, { useState } from 'react';
import { useStyles } from './styles';
import { GET_MARKET } from '../../graphql';
import { useQuery } from '@apollo/client';
import { MenuItem, MenuList } from '@material-ui/core';
import { useUI } from '../../context/uiContext';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DiscountSlider from '../DiscountSlider/DiscountSlider';
import PriceSlider from '../PriceSlider/PriceSlider';

const FilterMenu = () => {
    const classes = useStyles();
    const { variables, setVariables, handleFilterOpen } = useUI();
    const [menuMarketSelected, setMenuMarketSelected] = useState(variables.market || 'all');
    const { data, loading, error } = useQuery(GET_MARKET);

    const handleMenuSelected = (marketName) => {
        setMenuMarketSelected(marketName);
        setVariables({ ...variables, market: marketName });
    };

    if (loading) return null;
    if (error) return <p>Error get markets...</p>;
    if (!data) return <p>Can not get markets data</p>;

    //console.log(data.markets);

    return (
        <div className={classes.filterMenu}>
            <DiscountSlider />
            <PriceSlider />
            <MenuList>
                <MenuItem
                    selected={menuMarketSelected === 'all'}
                    onClick={() => {
                        handleMenuSelected('all');
                        handleFilterOpen(false);
                    }}
                    className={classes.allMarket}
                >
                    {`Kaikki Market (${data.markets.length})`}
                    {menuMarketSelected === 'all' && <ArrowForwardIosIcon className={classes.checkIcon} />}
                </MenuItem>
                {data &&
                    data.markets &&
                    data.markets.map((market, index) => (
                        <MenuItem
                            key={market.id}
                            onClick={() => {
                                handleMenuSelected(market.name);
                                handleFilterOpen(false);
                            }}
                            selected={menuMarketSelected === market.name}
                            className={classes.menuItem}
                        >
                            {/* {`${index + 1}. ${market.name}`}{' '} */}
                            {market.name}
                            {menuMarketSelected === market.name && <ArrowForwardIosIcon className={classes.checkIcon} />}
                        </MenuItem>
                    ))}
            </MenuList>
        </div>
    );
};

export default FilterMenu;
