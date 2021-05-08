import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    /*tagsAndMarketsBar: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    market: {
        marginRight: 16,
        textTransform: 'uppercase',
        marginBottom: 16,
    },
    icon: {
        color: theme.palette.success.main,
    },*/
    menu: {
        marginBottom: 16,
        marginRight: 16,
    },
    menuButton: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            padding: '4px 12px',
        },
    },
    checkIcon: {
        color: theme.palette.success.main,
        marginLeft: 8,
    },
    updateIcon: {
        color: theme.palette.primary.main,
        marginRight: 8,
    },
    menuItem: {
        padding: '8px 16px',
        textTransform: 'capitalize',
    },
}));
