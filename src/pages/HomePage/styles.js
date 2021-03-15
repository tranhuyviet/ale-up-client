import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
    },
    loading: {
        textAlign: 'center',
    },
    error: {
        textAlign: 'center',
    },
    errorText: {
        fontSize: 24,
        marginTop: 24,
        marginBottom: 24,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
        },
    },
    loadMoreButton: {
        marginTop: 8,
    },
}));
