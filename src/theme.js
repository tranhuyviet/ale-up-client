const theme = {
    palette: {
        primary: {
            main: '#8e24aa',
            light: '#c158dc',
            dark: '#5c007a',
            contrastText: '#ffffff',
        },
    },
    overrides: {
        MuiCardContent: {
            root: {
                '&:last-child': {
                    paddingBottom: 8,
                },
            },
        },
    },
};

export default theme;
