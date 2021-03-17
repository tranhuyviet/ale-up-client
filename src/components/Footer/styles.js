import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 24,
        paddingTop: 18,
        backgroundColor: theme.palette.background.paper,
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
    ul: {
        listStyle: 'none',
        textAlign: 'center',
        width: '100%',
    },
    li: {
        width: '100%',
        textAlign: 'center',
    },
}));
