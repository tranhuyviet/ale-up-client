import React, { useRef, useEffect } from 'react';
import { AppBar, Container, IconButton, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import { useStyles } from './styles';

// import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
// import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
// import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';

import { useUI } from '../../context/uiContext';
// import { NavLink } from 'react-router-dom';
// import MenuBar from '../MenuBar/MenuBar';
import Logo from '../Logo/Logo';
import { ReactComponent as FilterIcon } from '../../images/filter.svg';
import MenuBar from '../MenuBar/MenuBar';

// function HideOnScroll(props) {
//     const { children, window } = props;
//     const trigger = useScrollTrigger({ target: window ? window() : undefined });

//     return (
//         <Slide appear={false} direction="down" in={!trigger}>
//             {children}
//         </Slide>
//     );
// }

const NavBar = () => {
    const classes = useStyles();
    const { setVariables, variables, handleFilterOpen, filterOpen } = useUI();
    // const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const nameRef = useRef(variables.name || '');
    // const [market, setMarket] = useState('all');

    // const handleToggleTheme = () => {
    //     toggleLightDarkTheme();
    // };

    const handleSearch = () => {
        // console.log(nameRef.current.value);
        setVariables({
            ...variables,
            name: nameRef.current.value,
            // market,
        });
        // nameRef.current.value = '';
    };

    useEffect(() => {
        nameRef.current.value = variables.name;
    }, [variables.name]);

    return (
        // <HideOnScroll>
        <AppBar className={classes.appbar} position="fixed">
            <Container className={classes.container}>
                <Toolbar className={classes.toolbar} disableGutters id="back-to-top-anchor">
                    {matches && (
                        <>
                            <IconButton onClick={() => handleFilterOpen(true)}>
                                <FilterIcon className={classes.filterIcon} />
                            </IconButton>
                            <MenuBar menuOpen={filterOpen} setMenuOpen={handleFilterOpen} anchor="left" />
                        </>
                    )}
                    <div className={classes.logoContainer}>
                        <Logo text />
                    </div>
                    <div className={classes.searchContainer}>
                        <div className={classes.inputContainer}>
                            <input
                                type="text"
                                placeholder="Etsi tuotteita..."
                                className={classes.searchInput}
                                ref={nameRef}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch();
                                    }
                                }}
                                onBlur={handleSearch}
                            />
                            <SearchOutlinedIcon className={classes.searchIcon} />
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
        // </HideOnScroll>
    );
};

export default NavBar;
