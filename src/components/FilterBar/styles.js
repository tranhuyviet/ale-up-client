import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    filterbar: {
        borderRight: `1px solid ${theme.palette.grey[300]}`,
        minHeight: 'calc(100vh - 64px)',
        height: '100%',
        padding: 16,
        paddingTop: 50,
    },
    marketsCheckboxContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 28,
    },
}));
