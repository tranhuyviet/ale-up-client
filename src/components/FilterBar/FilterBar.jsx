import React, { useState, useRef, useEffect } from 'react';
import { Button, ClickAwayListener, Grow, Menu, MenuItem, MenuList, Paper, Popper, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CheckIcon from '@material-ui/icons/Check';
import { useUI } from '../../context/uiContext';
const FilterBar = ({ total }) => {
    const classes = useStyles();
    const { variables, setVariables } = useUI();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [menuSelected, setMenuSelected] = useState(variables.sort || 'discount');

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleSelected = (e, name) => {
        setMenuSelected(name);
        setVariables({ ...variables, sort: name });
        handleClose(e);
    };

    const handleSelectName = (name) => {
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
                return 'Lajittele';
        }
    };

    return (
        <div className={classes.filterbar}>
            <div className={classes.totalNumberContainer}>
                <Typography>
                    <span className={classes.totalNumber}>{total}</span> tuoteta
                </Typography>
            </div>
            <div className={classes.sortContainer}>
                <Button endIcon={<ArrowDropDownIcon />} variant="outlined" ref={anchorRef} onClick={handleToggle}>
                    {handleSelectName(menuSelected)}
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition>
                    {({ TransitionProps, placement }) => (
                        <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow">
                                        <MenuItem onClick={(e) => handleSelected(e, 'discount')} selected={menuSelected === 'discount'}>
                                            Alennettu Hinta {menuSelected === 'discount' && <CheckIcon className={classes.checkIcon} />}
                                        </MenuItem>
                                        <MenuItem onClick={(e) => handleSelected(e, 'priceAO')} selected={menuSelected === 'priceAO'}>
                                            Hinta, edullisin {menuSelected === 'priceAO' && <CheckIcon className={classes.checkIcon} />}
                                        </MenuItem>
                                        <MenuItem onClick={(e) => handleSelected(e, 'priceOA')} selected={menuSelected === 'priceOA'}>
                                            Hinta, kallein {menuSelected === 'priceOA' && <CheckIcon className={classes.checkIcon} />}
                                        </MenuItem>
                                        <MenuItem onClick={(e) => handleSelected(e, 'nameAO')} selected={menuSelected === 'nameAO'}>
                                            Nimi, A-Ö {menuSelected === 'nameAO' && <CheckIcon className={classes.checkIcon} />}
                                        </MenuItem>
                                        <MenuItem onClick={(e) => handleSelected(e, 'nameOA')} selected={menuSelected === 'nameOA'}>
                                            Nimi, Ö-A {menuSelected === 'nameOA' && <CheckIcon className={classes.checkIcon} />}
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
};

export default FilterBar;
