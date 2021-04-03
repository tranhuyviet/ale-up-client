import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { GET_TAGS } from '../../graphql';
import { useQuery } from '@apollo/client';
import { Checkbox, MenuItem, MenuList } from '@material-ui/core';
import { useUI } from '../../context/uiContext';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Tags = () => {
    const classes = useStyles();
    const { variables, setVariables, handleFilterOpen } = useUI();
    const [menuTagSelected, setMenuTagSelected] = useState(variables.tag || 'all');

    const { data, loading, error } = useQuery(GET_TAGS);

    const handleTagSelected = (tagName) => {
        setMenuTagSelected(tagName);
        setVariables({ ...variables, tag: tagName });
    };

    useEffect(() => {
        setMenuTagSelected(variables.tag || 'all');
    }, [variables.tag]);

    if (loading) return null;
    if (error) return <p>Get tags error</p>;
    if (!data) return <p>Get tags data error</p>;

    return (
        <div className={classes.tags}>
            <MenuList>
                <MenuItem
                    selected={menuTagSelected === 'all'}
                    onClick={() => {
                        handleTagSelected('all');
                        handleFilterOpen(false);
                    }}
                    className={classes.allMarket}
                >
                    <Checkbox checked={menuTagSelected === 'all' ? true : false} color="primary" />
                    {`Kaikki Kategoria`}
                    {/* {`Kaikki Kategoria (${data.tags.length})`} */}
                    {menuTagSelected === 'all' && <ArrowForwardIosIcon className={classes.checkIcon} />}
                </MenuItem>
                {data &&
                    data.tags &&
                    data.tags.map((tag, index) => (
                        <MenuItem
                            key={tag._id}
                            onClick={() => {
                                handleTagSelected(tag.tag);
                                handleFilterOpen(false);
                            }}
                            selected={menuTagSelected === tag.tag}
                            className={classes.menuItem}
                        >
                            {/* {`${index + 1}. ${tag.name}`}{' '} */}
                            {/* {<img src={tag.logo} alt="logo" className={classes.tagLogo} />} */}
                            {tag.tag}
                            {menuTagSelected === tag.tag && <ArrowForwardIosIcon className={classes.checkIcon} />}
                        </MenuItem>
                    ))}
            </MenuList>
        </div>
    );
};

export default Tags;
