import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/NavBar/NavBar';
import { useUI } from './context/uiContext';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';

import ReactGa from 'react-ga';

const App = () => {
    const { toggleTheme } = useUI();

    theme.palette.type = toggleTheme;
    const appTheme = createMuiTheme({
        ...theme,
    });

    useEffect(() => {
        ReactGa.initialize('UA-192269482-1');
        // to report page view
        ReactGa.pageview('/home');
    }, []);

    return (
        <BrowserRouter>
            <ThemeProvider theme={appTheme}>
                <CssBaseline />
                <Navbar />
                {/* <div style={{ height: 10 }} /> */}
                <Switch>
                    {/* <Route exact path="/">
                        <Redirect to="/home" />
                    </Route> */}
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
                <Footer />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
