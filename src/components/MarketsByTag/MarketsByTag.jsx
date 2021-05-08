import React, { useRef, useState } from 'react';
import { GET_MARKETS_BY_TAG } from '../../graphql';
import { useQuery } from '@apollo/client';
import { useUI } from '../../context/uiContext';
import { useStyles } from './styles';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckIcon from '@material-ui/icons/Check';

const MarketsByTag = () => {
    const classes = useStyles();
    const { variables, setVariables } = useUI();
    const { data, loading, error } = useQuery(GET_MARKETS_BY_TAG, {
        variables: { tag: variables.tag },
    });

    const anchorMarketRef = useRef(null);

    const [openMarketMenu, setOpenMarketMenu] = useState(false);

    const handleMarketToggle = () => {
        setOpenMarketMenu((prevOpen) => !prevOpen);
    };

    const handleMarketClose = (event) => {
        if (anchorMarketRef.current && anchorMarketRef.current.contains(event.target)) {
            return;
        }
        setOpenMarketMenu(false);
    };

    const handleMarketSelected = (e, market) => {
        setVariables({ ...variables, market });
        handleMarketClose(e);
    };

    if (loading) return null;
    if (error) return <p>get market by tagID error</p>;
    if (!data || !data.marketsByTag) return null;

    return (
        <>
            {data.marketsByTag.length > 1 && (
                <div className={classes.menu}>
                    <Button
                        endIcon={<ArrowDropDownIcon />}
                        variant="outlined"
                        ref={anchorMarketRef}
                        onClick={handleMarketToggle}
                        className={classes.menuButton}
                    >
                        {variables.market === 'all' ? `Kaikki ${variables.tag} Market` : variables.market}
                    </Button>
                    <Popper open={openMarketMenu} anchorEl={anchorMarketRef.current} role={undefined} transition>
                        {({ TransitionProps, placement }) => (
                            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                <Paper>
                                    <ClickAwayListener onClickAway={handleMarketClose}>
                                        <MenuList autoFocusItem={openMarketMenu} id="menu-list-grow">
                                            <MenuItem className={classes.menuItem} onClick={(e) => handleMarketSelected(e, 'all')}>
                                                Kaikki {variables.tag} Market {variables.market === 'all' && <CheckIcon className={classes.checkIcon} />}
                                            </MenuItem>
                                            {data &&
                                                data.marketsByTag &&
                                                data.marketsByTag.map((market) => (
                                                    <MenuItem
                                                        onClick={(e) => handleMarketSelected(e, market.name)}
                                                        className={classes.menuItem}
                                                        key={market._id}
                                                    >
                                                        {market.name} {variables.market === market.name && <CheckIcon className={classes.checkIcon} />}
                                                    </MenuItem>
                                                ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            )}

            {/* {data.marketsByTag.length > 1 && (
                <div className={classes.tagsAndMarketsBar}>
                    <Button
                        variant="outlined"
                        className={classes.market}
                        onClick={() => setVariables({ ...variables, market: 'all' })}
                        startIcon={variables.market === 'all' ? <CheckCircleOutlineOutlined className={classes.icon} /> : <RadioButtonUncheckedOutlinedIcon />}
                        size="small"
                    >
                        Kaikki {variables.tag} market
                    </Button>
                    {data &&
                        data.marketsByTag &&
                        data.marketsByTag.map((market) => (
                            <Button
                                key={market._id}
                                className={classes.market}
                                variant="outlined"
                                onClick={() => {
                                    setVariables({ ...variables, market: market.name });
                                }}
                                // color={variables.market === market.name ? 'primary' : 'secondary'}
                                size="small"
                                startIcon={
                                    variables.market === market.name ? (
                                        <CheckCircleOutlineOutlined className={classes.icon} />
                                    ) : (
                                        <RadioButtonUncheckedOutlinedIcon />
                                    )
                                }
                            >
                                {market.name}
                            </Button>
                        ))}
                </div>
            )} */}
        </>
    );
};

export default MarketsByTag;
