import { makeStyles } from '@material-ui/core/styles';
import heroPic from '../../images/hero.webp';
export const useStyles = makeStyles((theme) => ({
    hero: {
        maxWidth: '100vw',
        height: '100vh',
    },
    heroContainer: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundImage: `url(${heroPic})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        // filter: 'brightness(0.6)',
    },
}));
