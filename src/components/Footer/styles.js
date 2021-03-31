import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        // marginTop: 24,
        padding: 18,
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    copy: {
        fontSize: 16,
    },
    link: {
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'inherit',
    },

    linkMarket: {
        padding: '8px 8px 16px 8px',
        textDecoration: 'none',
        color: 'inherit',
    },
    marketLogo: {
        padding: 3,
    },
}));
