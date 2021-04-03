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
        MuiList: {
            // root: {
            //     marginTop: 8,
            //     maxHeight: 'calc(100vh * 0.64)',
            //     overflow: 'overlay',
            // },
            // padding: {
            //     paddingTop: 0,
            // },
        },
        MuiListItem: {
            gutters: {
                paddingRight: 0,
                paddingLeft: 4,
            },
        },
        MuiButton: {
            root: {
                '&:selected': {
                    color: '#ff0000',
                    backgroundColor: '#ff0000',
                },
            },
        },
    },
};

export default theme;
