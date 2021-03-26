import React, { useRef } from 'react';
import { AppBar, Container, Toolbar } from '@material-ui/core';
import { useStyles } from './styles';

// import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
// import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
// import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';

import { useUI } from '../../context/uiContext';
// import { NavLink } from 'react-router-dom';
// import MenuBar from '../MenuBar/MenuBar';
import Logo from '../Logo/Logo';

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
    const { setVariables, variables } = useUI();
    // const [menuOpen, setMenuOpen] = useState(false);
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const nameRef = useRef('');
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

    return (
        // <HideOnScroll>
        <AppBar className={classes.appbar} position="fixed">
            <Container className={classes.container}>
                <Toolbar className={classes.toolbar} disableGutters id="back-to-top-anchor">
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
