import React, { useState, useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CheckIcon from '@material-ui/icons/Check';
import { useUI } from '../../context/uiContext';

export const GET_MARKET = gql`
    query getMarkets {
        markets {
            id
            name
            logo
        }
    }
`;

//  const sorts = [
//     { name: 'Alennettu Hinta', sort: 'discount' },
//     { name: 'Hinta, edullisin', sort: 'priceAO' },
//     { name: 'Hinta, kallein', sort: 'priceOA' },
//     { name: 'Nimi, A-Ö', sort: 'nameAO' },
//     { name: 'Nimi, Ö-A', sort: 'nameOA' },
// ];

const FilterBar = ({ total }) => {
    const classes = useStyles();
    const { variables, setVariables } = useUI();

    const { data, loading, error } = useQuery(GET_MARKET);

    // sort
    const anchorSortRef = useRef(null);
    const [openSortMenu, setOpenSortMenu] = useState(false);
    const [menuSortSelected, setMenuSortSelected] = useState(variables.sort || 'discount');

    // markets
    const anchorMarketsRef = useRef(null);
    const [openMarketMenu, setOpenMarketMenu] = useState(false);
    const [menuMarketSelected, setMenuMarketSelected] = useState(variables.market || 'all');

    // SORT FUNCTIONS
    const handleSortToggle = () => {
        setOpenSortMenu((prevOpen) => !prevOpen);
    };

    const handleSortClose = (event) => {
        if (anchorSortRef.current && anchorSortRef.current.contains(event.target)) {
            return;
        }
        setOpenSortMenu(false);
    };

    const handleSortSelected = (e, name) => {
        setMenuSortSelected(name);
        setVariables({ ...variables, sort: name });
        handleSortClose(e);
    };

    const handleSortSelectName = (name) => {
        switch (name) {
            case 'discount':
                return 'Alennettu Hinta';
            case 'priceAO':
                return 'Hinta, edullisin';
            case 'priceOA':
                return 'Hinta, kallein';
            case 'nameAO':
                return 'Nimi, A-Ö';
            case 'nameOA':
                return 'Nimi, Ö-A';
            default:
                return 'Alennettu Hinta';
        }
    };

    // MARKETS FUNCTIONS
    const handleMarketToggle = () => {
        setOpenMarketMenu((prevOpen) => !prevOpen);
    };

    const handleMarketClose = (event) => {
        if (anchorMarketsRef.current && anchorMarketsRef.current.contains(event.target)) {
            return;
        }
        setOpenMarketMenu(false);
    };

    const handleMenuSelected = (e, marketName) => {
        setMenuMarketSelected(marketName);
        setVariables({ ...variables, market: marketName });
        handleMarketClose(e);
    };

    // useEffect(() => {
    //     if (data && data.markets) {
    //         setMenuMarketSelected(data.markets.name);
    //     } else {
    //         setMenuMarketSelected('all');
    //     }
    // }, [data]);

    if (loading) return <p>Loading markets...</p>;
    if (error) return <p>Error get markets...</p>;
    if (!data) return <p>Can not get markets data</p>;

    return (
        <div className={classes.filterbar}>
            <div className={classes.totalNumberContainer}>
                <Typography>
                    <span className={classes.totalNumber}>{total}</span> alennusta tuottetta
                </Typography>
            </div>
            <div className={classes.filterActionContainer}>
                {/* <div className={classes.menu}>
                    <Button endIcon={<ArrowDropDownIcon />} variant="outlined" ref={anchorMarketsRef} onClick={handleMarketToggle}>
                        {menuMarketSelected === 'all' ? 'Kaikki Market' : menuMarketSelected}
                    </Button>
                    <Popper open={openMarketMenu} anchorEl={anchorMarketsRef.current} transition style={{ maxHeight: 300 }}>
                        {({ TransitionProps, placement }) => (
                            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                <Paper>
                                    <ClickAwayListener onClickAway={handleMarketClose}>
                                        <MenuList autoFocusItem={openMarketMenu} id="menu-list-grow">
                                            <MenuItem selected={menuMarketSelected === 'all'} onClick={(e) => handleMenuSelected(e, 'all')}>
                                                {`Kaikki Market (${data.markets.length})`}
                                                {menuMarketSelected === 'all' && <CheckIcon className={classes.checkIcon} />}
                                            </MenuItem>
                                            {data &&
                                                data.markets &&
                                                data.markets.map((market, index) => (
                                                    <MenuItem
                                                        key={market.id}
                                                        onClick={(e) => handleMenuSelected(e, market.name)}
                                                        selected={menuMarketSelected === market.name}
                                                        style={{ textTransform: 'uppercase' }}
                                                    >
                                                        {`${index + 1}. ${market.name}`}{' '}
                                                        {menuMarketSelected === market.name && <CheckIcon className={classes.checkIcon} />}
                                                    </MenuItem>
                                                ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div> */}
                <div className={classes.menu}>
                    <Button endIcon={<ArrowDropDownIcon />} variant="outlined" ref={anchorSortRef} onClick={handleSortToggle}>
                        {handleSortSelectName(menuSortSelected)}
                    </Button>
                    <Popper open={openSortMenu} anchorEl={anchorSortRef.current} role={undefined} transition>
                        {({ TransitionProps, placement }) => (
                            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                <Paper>
                                    <ClickAwayListener onClickAway={handleSortClose}>
                                        <MenuList autoFocusItem={openSortMenu} id="menu-list-grow">
                                            <MenuItem onClick={(e) => handleSortSelected(e, 'discount')} selected={menuSortSelected === 'discount'}>
                                                Alennettu Hinta {menuSortSelected === 'discount' && <CheckIcon className={classes.checkIcon} />}
                                            </MenuItem>
                                            <MenuItem onClick={(e) => handleSortSelected(e, 'priceAO')} selected={menuSortSelected === 'priceAO'}>
                                                Hinta, edullisin {menuSortSelected === 'priceAO' && <CheckIcon className={classes.checkIcon} />}
                                            </MenuItem>
                                            <MenuItem onClick={(e) => handleSortSelected(e, 'priceOA')} selected={menuSortSelected === 'priceOA'}>
                                                Hinta, kallein {menuSortSelected === 'priceOA' && <CheckIcon className={classes.checkIcon} />}
                                            </MenuItem>
                                            <MenuItem onClick={(e) => handleSortSelected(e, 'nameAO')} selected={menuSortSelected === 'nameAO'}>
                                                Nimi, A-Ö {menuSortSelected === 'nameAO' && <CheckIcon className={classes.checkIcon} />}
                                            </MenuItem>
                                            <MenuItem onClick={(e) => handleSortSelected(e, 'nameOA')} selected={menuSortSelected === 'nameOA'}>
                                                Nimi, Ö-A {menuSortSelected === 'nameOA' && <CheckIcon className={classes.checkIcon} />}
                                            </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
