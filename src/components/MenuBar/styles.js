import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        width: '70%',
    },
    muiListPadding: {
        padding: 0,
    },
    muiListItem: {
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    menuHeader: {
        backgroundColor: theme.palette.primary.main,
        height: 64,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: 56,
        },
    },
    listItemText: {
        textAlign: 'center',
    },
}));
