import React, { useState, useRef } from 'react';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Typography, Zoom } from '@material-ui/core';
import { useStyles } from './styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CheckIcon from '@material-ui/icons/Check';
import { useUI } from '../../context/uiContext';
import UpdateIcon from '@material-ui/icons/Update';

const FilterBar = ({ total }) => {
    const classes = useStyles();
    const { variables, setVariables } = useUI();

    // sort
    const anchorSortRef = useRef(null);
    const [openSortMenu, setOpenSortMenu] = useState(false);
    const [menuSortSelected, setMenuSortSelected] = useState(variables.sort || 'dayDeal');

    // markets
    // const anchorMarketsRef = useRef(null);
    // const [openMarketMenu, setOpenMarketMenu] = useState(false);
    // const [menuMarketSelected, setMenuMarketSelected] = useState(variables.market || 'all');

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
        if (name === 'dayDeal') {
            setVariables({ ...variables, sort: name, market: 'all' });
        } else {
            setVariables({ ...variables, sort: name });
        }
        handleSortClose(e);
    };

    const handleSortSelectName = (name) => {
        switch (name) {
            case 'dayDeal':
                return 'Päivän Tarjoukset';
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
                return 'Päivän Tarjoukset';
        }
    };

    return (
        <div className={classes.filterbar}>
            <div className={classes.totalNumberContainer}>
                <Typography>
                    <span className={classes.totalNumber}>{total ? total : '0'}</span> tuottetta
                </Typography>
            </div>
            <div className={classes.filterActionContainer}>
                <div className={classes.menu}>
                    <Button endIcon={<ArrowDropDownIcon />} variant="outlined" ref={anchorSortRef} onClick={handleSortToggle} className={classes.menuButton}>
                        {menuSortSelected === 'dayDeal' ? (
                            <Zoom in>
                                <UpdateIcon className={classes.updateIcon} />
                            </Zoom>
                        ) : (
                            ''
                        )}
                        {handleSortSelectName(menuSortSelected)}
                    </Button>
                    <Popper open={openSortMenu} anchorEl={anchorSortRef.current} role={undefined} transition>
                        {({ TransitionProps, placement }) => (
                            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                <Paper>
                                    <ClickAwayListener onClickAway={handleSortClose}>
                                        <MenuList autoFocusItem={openSortMenu} id="menu-list-grow">
                                            <MenuItem onClick={(e) => handleSortSelected(e, 'dayDeal')} selected={menuSortSelected === 'dayDeal'}>
                                                Päivän Tarjoukset {menuSortSelected === 'dayDeal' && <CheckIcon className={classes.checkIcon} />}
                                            </MenuItem>
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
