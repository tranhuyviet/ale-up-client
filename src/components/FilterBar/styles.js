import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    filterbar: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 16,
        [theme.breakpoints.down('xs')]: {
            padding: '4px 8px',
            marginBottom: 0,
            flexDirection: 'column-reverse',
        },
    },
    totalNumberContainer: {
        flexGrow: 1,
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    totalNumber: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    filterActionContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    menu: {
        marginLeft: 8,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 8,
        },
    },
    checkIcon: {
        color: theme.palette.success.main,
        marginLeft: 8,
    },
}));
