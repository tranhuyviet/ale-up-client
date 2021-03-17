import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        [theme.breakpoints.down('xs')]: {
            position: 'relative',
        },
    },
    toolbar: {},
    navlinks: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.spacing(1),
        transition: 'all 0.3s',
    },
    link: {
        textDecoration: 'none',
        marginLeft: theme.spacing(2),
        fontSize: 16,
        color: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
        transition: 'all 0.3s',
        '&:hover': {
            // color: theme.palette.primary.main,
            // fontWeight: 'bold',
        },
    },
    linkActive: {
        color: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
        fontWeight: 'bold!important',
    },
    // form control: select markets
    formControl: {
        width: 200,
        marginRight: 16,
    },
    // search input
    inputContainer: {
        position: 'relative',
        // maxWidth: 600,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overFlow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            position: 'absolute',
            top: 70,
            width: '90%',
        },
    },
    searchInput: {
        padding: '4px 16px 4px 16px',
        width: '100%',
        height: 40,
        borderRadius: 100,
        border: `1px solid ${theme.palette.grey[300]}`,
        outline: 'none',
        fontSize: 16,
        color: theme.palette.type === 'light' ? theme.palette.grey[800] : theme.palette.common.white,
        '&::placeholder': {
            color: theme.palette.grey[500],
            [theme.breakpoints.down('xs')]: {
                color: 'transparent',
            },
        },
        backgroundColor: theme.palette.background.paper,
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
        top: 6,
        // color: theme.palette.primary.main,
        color: theme.palette.grey[400],
    },
    searchButton: {
        postion: 'absolute',
        right: 48,
    },
}));
