import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    toggleTheme: 'light',
    filterOpen: false,
    variables: {},
};

if (localStorage.getItem('themeOfApp')) {
    initialState.toggleTheme = localStorage.getItem('themeOfApp');
} else {
    localStorage.setItem('themeOfApp', 'light');
    initialState.toggleTheme = 'light';
}

const UIContext = createContext({
    toggleTheme: '',
    filterOpen: false,
    variables: {},
    setVariables: (variables) => {},
    toggleLightDarkTheme: () => {},
    handleFilterOpen: (setOpen) => {},
});

// Types
const TOGGLE_LIGHT_DARK_THEME = 'TOGGLE_LIGHT_DARK_THEME';
const FILTER_OPEN = 'FILTER_OPEN';
const SET_VARIABLES = 'SET_VARIABLES';

const uiReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_LIGHT_DARK_THEME: {
            localStorage.setItem('themeOfApp', state.toggleTheme === 'light' ? 'dark' : 'light');
            return {
                ...state,
                toggleTheme: state.toggleTheme === 'light' ? 'dark' : 'light',
            };
        }
        case FILTER_OPEN: {
            return {
                ...state,
                filterOpen: action.payload,
            };
        }
        case SET_VARIABLES: {
            return {
                ...state,
                variables: action.payload,
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

    const handleFilterOpen = (payload) => {
        dispatch({
            type: FILTER_OPEN,
            payload,
        });
    };

    const setVariables = (variables) => {
        dispatch({
            type: SET_VARIABLES,
            payload: variables,
        });
    };

    return (
        <UIContext.Provider
            value={{
                variables: state.variables,
                setVariables,
                toggleTheme: state.toggleTheme,
                toggleLightDarkTheme,
                filterOpen: state.filterOpen,
                handleFilterOpen,
            }}
            {...props}
        />
    );
};

export const useUI = () => {
    return useContext(UIContext);
};
