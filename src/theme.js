const theme = {
    palette: {
        // primary: {
        //     main: '#8e24aa',
        //     light: '#c158dc',
        //     dark: '#5c007a',
        //     contrastText: '#ffffff',
        // },
    },
    overrides: {
        MuiCardContent: {
            root: {
                '&:last-child': {
                    paddingBottom: 8,
                },
            },
        },
        MuiToolbar: {
            regular: {
                minHeight: '40px!important',
            },
        },
        MuiCardMedia: {
            root: {
                backgroundSize: 'contain',
            },
        },
    },
};

export default theme;
