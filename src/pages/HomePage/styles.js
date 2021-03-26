import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
        minHeight: '100vh',
        padding: '64px 20px 0 20px',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            padding: '46px 8px 8px 8px',
        },
    },
    filterMenuContainer: {
        borderRight: `1px solid ${theme.palette.grey[300]}`,
    },
    gridContainer: {
        padding: '0px 0px 20px 20px',
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
        height: 'calc(100vh - 500px)',
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
        marginBottom: 20,
        [theme.breakpoints.down('xs')]: {
            marginTop: 8,
            marginBottom: 8,
        },
    },
    shopBag1: {
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
}));
