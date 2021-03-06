import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(6),
            height: theme.spacing(6),
        },
    },
    logo: {
        letterSpacing: 1.5,
        fontFamily: 'Nunito, sans-serif',
        textDecoration: 'none',
        color: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
    },
    logoHead: {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
        color: theme.palette.type === 'light' ? theme.palette.common.white : theme.palette.common.black,
        padding: theme.spacing(0.8),
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16,
        marginRight: theme.spacing(0.5),
        fontWeight: 'bold',
    },
    logoBody: {
        fontWeight: 'bold',
        fontSize: 22,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
        },
    },
}));
