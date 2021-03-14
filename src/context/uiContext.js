import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    toggleTheme: 'light',
};

if (localStorage.getItem('themeOfApp')) {
    initialState.toggleTheme = localStorage.getItem('themeOfApp');
} else {
    localStorage.setItem('themeOfApp', 'light');
    initialState.toggleTheme = 'light';
}

const UIContext = createContext({
    toggleTheme: '',
    toggleLightDarkTheme: () => {},
});

// Types
const TOGGLE_LIGHT_DARK_THEME = 'TOGGLE_LIGHT_DARK_THEME';

const uiReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_LIGHT_DARK_THEME: {
            localStorage.setItem('themeOfApp', state.toggleTheme === 'light' ? 'dark' : 'light');
            return {
                ...state,
                toggleTheme: state.toggleTheme === 'light' ? 'dark' : 'light',
            };
        }
        default:
            return state;
    }
};

export const UIProvider = (props) => {
    const [state, dispatch] = useReducer(uiReducer, initialState);

    const toggleLightDarkTheme = () => {
        dispatch({
            type: TOGGLE_LIGHT_DARK_THEME,
        });
    };

    return <UIContext.Provider value={{ toggleTheme: state.toggleTheme, toggleLightDarkTheme }} {...props} />;
};

export const useUI = () => {
    return useContext(UIContext);
};
