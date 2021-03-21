import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
        minHeight: '100vh',
        padding: '64px 20px 20px 20px',
        [theme.breakpoints.down('xs')]: {
            padding: '108px 8px 8px 8px',
        },
    },
    gridContainer: {
        // padding: 20,
        [theme.breakpoints.down('xs')]: {
            padding: 8,
        },
    },
    loading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: 250,
        height: '100vh',
        position: 'relative',
        zIndex: 10001,
    },
    error: {
        textAlign: 'center',
        minHeight: 250,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop: 20,
        [theme.breakpoints.down('xs')]: {
            marginTop: 8,
            marginBottom: 8,
        },
    },
}));
