import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    filterMenu: {
        paddingTop: 16,
        //paddingRight: 24,
        textAlign: 'left',
    },
    checkIcon: {
        color: theme.palette.grey[600],
        marginLeft: 'auto',
    },
    allMarket: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    menuItem: {
        textTransform: 'capitalize',
        paddingLeft: 30,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
}));
