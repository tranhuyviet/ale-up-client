import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/NavBar/NavBar';
import { useUI } from './context/uiContext';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
    const { toggleTheme } = useUI();

    theme.palette.type = toggleTheme;
    const appTheme = createMuiTheme({
        ...theme,
    });

    return (
        <BrowserRouter>
            <ThemeProvider theme={appTheme}>
                <CssBaseline />
                <Navbar />
                <div style={{ height: 64 }} />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route exact path="/home">
                        <HomePage />
                    </Route>
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
