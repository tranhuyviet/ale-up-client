import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    tagsAndMarketsBar: {
        marginBottom: 16,
        display: 'flex',
        // justifyContent: 'center',
    },
    market: {
        marginRight: 16,
        textTransform: 'uppercase',
    },
    icon: {
        color: theme.palette.success.main,
    },
}));
