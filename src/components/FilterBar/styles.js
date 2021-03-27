import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    filterbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 16,

        [theme.breakpoints.down('xs')]: {
            //padding: '4px 8px',
            marginTop: 8,
            marginBottom: 12,
            // flexDirection: 'column-reverse',
        },
    },
    totalNumberContainer: {
        flexGrow: 1,
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {},
    },
    totalNumber: {
        fontWeight: 'bold',
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        },
    },
    // filterActionContainer: {
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    //     alignItems: 'center',
    // },
    menu: {
        marginLeft: 8,
        [theme.breakpoints.down('xs')]: {
            //marginBottom: 8,
        },
    },
    menuButton: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            padding: '4px 12px',
        },
    },
    checkIcon: {
        color: theme.palette.success.main,
        marginLeft: 8,
    },
}));
