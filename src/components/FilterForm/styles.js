import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px 0 8px 0',
    },
    titleIcon: {
        fontSize: 40,
    },
    dialogActions: {
        padding: '0px 24px 24px 0px',
    },
}));
