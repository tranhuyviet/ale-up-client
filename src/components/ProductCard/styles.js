import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 300,
        '&:hover': {
            boxShadow: theme.shadows[5],
        },
    },
    cardHeader: {
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 0',
    },
    mediaContainer: {
        width: '100%',
        height: '100%',
        padding: '20px 20px 20px 20px',
        background: theme.palette.common.white,
        position: 'relative',
    },
    discount: {
        position: 'absolute',
        top: 10,
        left: 10,
        background: theme.palette.error.main,
        padding: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.palette.common.white,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        // borderRadius: 100,
    },
    discountPer: {
        fontSize: 14,
        fontWeight: 'normal',
    },
    cardMedia: {
        width: 260,
        height: 260,
    },
    cardContent: {
        borderTop: `1px solid ${theme.palette.grey[200]}`,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    name: {
        height: '46px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        color: theme.palette.common.colorGreyDark,
        cursor: 'pointer',
    },
    priceContainer: {
        paddingTop: 16,
    },
    newPrice: {
        color: theme.palette.error.main,
        fontSize: 32,
        fontWeight: 'bold',
        marginRight: 16,
    },
    oldPrice: {
        fontSize: 22,
        color: theme.palette.grey[500],
        textDecoration: 'line-through',
    },
}));
