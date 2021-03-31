import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    tags: {
        // padding: '0px 16px',
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
