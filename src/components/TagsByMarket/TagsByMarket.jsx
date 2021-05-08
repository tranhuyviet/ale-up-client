import React, { useRef, useState } from 'react';
import { GET_TAGS_BY_MARKET } from '../../graphql';
import { useQuery } from '@apollo/client';
import { useUI } from '../../context/uiContext';
import { useStyles } from './styles';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckIcon from '@material-ui/icons/Check';

// import CheckCircleOutlineOutlined from '@material-ui/icons/CheckCircleOutlineOutlined';
// import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';

const TagsByMarket = () => {
    const classes = useStyles();
    const { variables, setVariables } = useUI();
    const { data, loading, error } = useQuery(GET_TAGS_BY_MARKET, {
        variables: { market: variables.market },
    });
    const anchorTagRef = useRef(null);
    const [openTagMenu, setOpenTagMenu] = useState(false);

    const handleTagToggle = () => {
        setOpenTagMenu((prevOpen) => !prevOpen);
    };

    const handleTagClose = (event) => {
        if (anchorTagRef.current && anchorTagRef.current.contains(event.target)) {
            return;
        }
        setOpenTagMenu(false);
    };

    const handleTagSelected = (e, tag) => {
        setVariables({ ...variables, tag });
        handleTagClose(e);
    };

    if (loading) return null;
    if (error) return <p>get tags by market error</p>;
    if (!data || !data.tagsByMarket) return null;

    return (
        <>
            {' '}
            {data.tagsByMarket.length > 1 && (
                <div className={classes.menu}>
                    <Button endIcon={<ArrowDropDownIcon />} variant="outlined" ref={anchorTagRef} onClick={handleTagToggle} className={classes.menuButton}>
                        {variables.tag === 'all' ? `Kaikki ${variables.market} Kategoria` : variables.tag}
                    </Button>
                    <Popper open={openTagMenu} anchorEl={anchorTagRef.current} role={undefined} transition>
                        {({ TransitionProps, placement }) => (
                            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                <Paper>
                                    <ClickAwayListener onClickAway={handleTagClose}>
                                        <MenuList autoFocusItem={openTagMenu} id="menu-list-grow">
                                            <MenuItem className={classes.menuItem} onClick={(e) => handleTagSelected(e, 'all')}>
                                                Kaikki {variables.market} Kategoria {variables.tag === 'all' && <CheckIcon className={classes.checkIcon} />}
                                            </MenuItem>
                                            {data &&
                                                data.tagsByMarket &&
                                                data.tagsByMarket.map((tag) => (
                                                    <MenuItem onClick={(e) => handleTagSelected(e, tag.tag)} className={classes.menuItem} key={tag._id}>
                                                        {tag.tag} {variables.tag === tag.tag && <CheckIcon className={classes.checkIcon} />}
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
            {/* {data.tagsByMarket.length > 1 && (
                <div className={classes.tagsAndMarketsBar}>
                    <Button
                        variant="outlined"
                        className={classes.market}
                        onClick={() => setVariables({ ...variables, tag: 'all' })}
                        startIcon={variables.tag === 'all' ? <CheckCircleOutlineOutlined className={classes.icon} /> : <RadioButtonUncheckedOutlinedIcon />}
                        size="small"
                    >
                        Kaikki {variables.market} kategoria
                    </Button>
                    {data &&
                        data.tagsByMarket &&
                        data.tagsByMarket.map((tag) => (
                            <Button
                                key={tag._id}
                                className={classes.market}
                                variant="outlined"
                                onClick={() => {
                                    setVariables({ ...variables, tag: tag.tag });
                                }}
                                // color={variables.market === market.name ? 'primary' : 'secondary'}
                                size="small"
                                startIcon={
                                    variables.tag === tag.tag ? <CheckCircleOutlineOutlined className={classes.icon} /> : <RadioButtonUncheckedOutlinedIcon />
                                }
                            >
                                {tag.tag}
                            </Button>
                        ))}
                </div>
            )} */}
        </>
    );
};

export default TagsByMarket;
