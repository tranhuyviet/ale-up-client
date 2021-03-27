import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    filterMenu: {
        width: '100%',
        paddingTop: 16,
        //paddingRight: 24,
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            paddingRight: 1,
        },
    },
    checkIcon: {
        color: theme.palette.primary.main,
        marginLeft: 'auto',
        marginRight: 8,
        fontSize: 16,
    },
    allMarket: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    menuItem: {
        textTransform: 'capitalize',
        paddingLeft: '32px!important',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
}));
