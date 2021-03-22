import React from 'react';
import { Button, ClickAwayListener, Grow, MenuItem, Paper, Popper } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CheckIcon from '@material-ui/icons/Check';
const MenuList = () => {
    return (
        <>
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
        </>
    );
};

export default MenuList;
