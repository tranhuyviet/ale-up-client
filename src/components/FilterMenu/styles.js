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
        fontWeight: 'bold',

        fontSize: 15,
        borderBottom: `1px solid ${theme.palette.grey[300]}`,

        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    menuItem: {
        textTransform: 'capitalize',
        paddingLeft: '45px!important',
        fontSize: 15,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    marketLogo: {
        maxHeight: 30,
        marginRight: 8,
    },
}));
