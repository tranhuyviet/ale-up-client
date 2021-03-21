import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    filterbar: {
        // border: `1px solid ${theme.palette.grey[400]}`,
        display: 'flex',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16,
        [theme.breakpoints.down('xs')]: {
            padding: '4px 8px',
            marginBottom: 0,
        },
    },
    totalNumberContainer: {
        flexGrow: 1,
        textAlign: 'left',
    },
    totalNumber: {
        fontWeight: 'bold',
    },
    checkIcon: {
        color: theme.palette.success.main,
        marginLeft: 8,
    },
}));
