import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    priceSlider: {
        padding: '0px 20px',
    },
    title: {
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 8,
        marginBottom: -4,
    },
    text: {
        border: `1px solid ${theme.palette.grey[800]}`,
        padding: 4,
        fontSize: 14,
    },
}));
