import React, { useState } from 'react';
import { useStyles } from './styles';
import { GET_MARKET } from '../../graphql';
import { useQuery } from '@apollo/client';
import { MenuItem, MenuList } from '@material-ui/core';
import { useUI } from '../../context/uiContext';

import CheckIcon from '@material-ui/icons/Check';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const FilterMenu = () => {
    const classes = useStyles();
    const { variables, setVariables } = useUI();
    const [menuMarketSelected, setMenuMarketSelected] = useState(variables.market || 'all');
    const { data, loading, error } = useQuery(GET_MARKET);

    const handleMenuSelected = (marketName) => {
        setMenuMarketSelected(marketName);
        setVariables({ ...variables, market: marketName });
    };

    if (loading) return <p>Loading markets...</p>;
    if (error) return <p>Error get markets...</p>;
    if (!data) return <p>Can not get markets data</p>;

    console.log(data.markets);

    return (
        <div className={classes.filterMenu}>
            <MenuList>
                <MenuItem selected={menuMarketSelected === 'all'} onClick={() => handleMenuSelected('all')}>
                    {`Kaikki Market (${data.markets.length})`}
                    {menuMarketSelected === 'all' && <ArrowForwardIosIcon className={classes.checkIcon} classes={{ gutters: classes.gutters }} />}
                </MenuItem>
                {data &&
                    data.markets &&
                    data.markets.map((market, index) => (
                        <MenuItem
                            key={market.id}
                            onClick={() => handleMenuSelected(market.name)}
                            selected={menuMarketSelected === market.name}
                            style={{ textTransform: 'capitalize', paddingLeft: 30 }}
                        >
                            {/* {`${index + 1}. ${market.name}`}{' '} */}
                            {market.name}
                            {menuMarketSelected === market.name && <ArrowForwardIosIcon className={classes.checkIcon} classes={{ gutters: classes.gutters }} />}
                        </MenuItem>
                    ))}
            </MenuList>
        </div>
    );
};

export default FilterMenu;
