import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbar: {},
    navlinks: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.spacing(1),
        transition: 'all 0.3s',
    },
    link: {
        textDecoration: 'none',
        marginLeft: theme.spacing(2),
        fontSize: 16,
        color: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
        transition: 'all 0.3s',
        '&:hover': {
            // color: theme.palette.primary.main,
            // fontWeight: 'bold',
        },
    },
    linkActive: {
        color: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
        fontWeight: 'bold!important',
    },
}));
