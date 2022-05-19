import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../Header';
import { Footer } from '../Footer';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: '1 0 auto',
    paddingBottom: '3em',
  },
  footer: {
    flexShrink: 0,
  },

}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Header />
        <div className={classes.body}>
          {children}
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
