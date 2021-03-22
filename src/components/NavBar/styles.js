import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        [theme.breakpoints.down('xs')]: {
            // position: 'relative',
            height: 48,
        },
        [theme.breakpoints.down('sm')]: {
            // position: 'relative',
            height: 52,
        },
    },
    container: {
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            // position: 'relative',
            // height: 40,
        },
    },
    toolbar: {
        // height: '40px!important',
        height: '100%',
    },
    logoContainer: {
        width: 180,
    },
    searchContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: 400,
    },
    searchInput: {
        padding: '4px 16px 4px 38px',
        width: '100%',
        maxWidth: 400,
        height: 38,
        borderRadius: 8,
        border: `1px solid ${theme.palette.grey[300]}`,
        outline: 'none',
        fontSize: 16,
        color: theme.palette.type === 'light' ? theme.palette.grey[800] : theme.palette.common.white,
        '&::placeholder': {
            color: theme.palette.grey[500],
            // [theme.breakpoints.down('xs')]: {
            //     color: 'transparent',
            // },
        },
        '&:focus': {
            borderColor: theme.palette.primary.main,
        },
        backgroundColor: theme.palette.background.paper,
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
        top: 7,
        // color: theme.palette.primary.main,
        color: theme.palette.grey[400],
    },
}));
