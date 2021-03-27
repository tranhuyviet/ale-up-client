import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    discountSlider: {},
    textContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 8,
        marginBottom: 8,
    },
    text: {
        border: `1px solid ${theme.palette.grey[800]}`,
        padding: 4,
        fontSize: 14,
    },
}));
