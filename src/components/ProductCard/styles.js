import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    card: {
        width: 260,
        '&:hover': {
            boxShadow: theme.shadows[5],
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    cardHeader: {
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 0',
        [theme.breakpoints.down('xs')]: {
            padding: 4,
        },
    },
    logo: {
        maxWidth: '90%',
    },
    mediaContainer: {
        width: '100%',
        // height: 'auto',
        padding: 20,
        background: theme.palette.common.white,
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            padding: 8,
        },
    },
    discount: {
        position: 'absolute',
        top: 10,
        left: 10,
        background: theme.palette.error.main,
        padding: 6,
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.palette.common.white,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        // borderRadius: 100,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
            padding: 4,
            borderTopRightRadius: 12,
            borderBottomLeftRadius: 12,
        },
    },
    discountPer: {
        fontSize: 14,
        fontWeight: 'normal',
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
    },
    cardMedia: {
        width: 'auto',
        height: 205,
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            height: 140,
        },
        [theme.breakpoints.down('sm')]: {
            height: 120,
        },
    },
    cardContent: {
        borderTop: `1px solid ${theme.palette.grey[200]}`,
    },
    cardContentRoot: {
        padding: 8,
        [theme.breakpoints.down('xs')]: {
            padding: '4px 8px',
        },
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
        fontSize: 14,
        [theme.breakpoints.down('xs')]: {
            height: 38,
            fontSize: '12px!important',
        },
    },
    priceContainer: {
        paddingTop: 0,
    },
    newPrice: {
        color: theme.palette.error.main,
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 16,
        [theme.breakpoints.down('xs')]: {
            fontSize: '14!important',
        },
    },
    oldPrice: {
        fontSize: 18,
        color: theme.palette.grey[500],
        textDecoration: 'line-through',
        [theme.breakpoints.down('xs')]: {
            fontSize: '13px!important',
        },
    },
}));
