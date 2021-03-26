import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    filterMenu: {
        paddingRight: 24,
    },
    checkIcon: {
        color: theme.palette.grey[600],
        marginLeft: 'auto',
    },
    gutters: {
        paddingRight: 0,
    },
}));
