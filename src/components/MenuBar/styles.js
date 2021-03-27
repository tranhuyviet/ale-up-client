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
        // backgroundColor: theme.palette.primary.main,
        padding: '2px 0 2px 12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    listItemText: {
        textAlign: 'center',
    },
}));
