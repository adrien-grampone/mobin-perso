import {
  Container, Typography, Box, Grid, Link, Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Link from 'next/link'
import { Icon, Title } from '../../global';

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    minHeight: '160px',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    color: theme.palette.blue.main,
  },
  whiteBox: {
    backgroundColor: theme.palette.orange.main,
    borderRadius: '6px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
}));
const Banner = ({ }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box className={classes.bannerBox}>
          <Grid container justify="center" spacing={4}>
            <Grid item className={classes.box}>
              <Link href="/adherents">
                <Box textAlign="center">
                  <Icon
                    maxWidth="100px"
                    src="/static/icons/P.Adherents2.png"
                  />
                </Box>

                <Box className={classes.whiteBox}>
                  <Title letterspacing="0px" uppercase bold content="nos adhérents" size="body1" color="#fff" />
                </Box>
              </Link>

            </Grid>

            <Grid item className={classes.box}>
              <Link href="/#figures">
                <Box textAlign="center">
                  <Icon
                    maxWidth="75px"
                    src="/static/icons/P.chiffres2.png"
                  />
                </Box>
                <Box className={classes.whiteBox}>
                  <Title letterspacing="0px" uppercase bold content="nos chiffres" size="body1" color="#fff" />
                </Box>
              </Link>
            </Grid>

            <Grid item className={classes.box}>
              <Link href="/#news">
                <Box textAlign="center">
                  <Icon
                    maxWidth="75px"
                    src="/static/icons/P.actus2.png"
                  />
                </Box>
                <Box className={classes.whiteBox}>
                  <Title letterspacing="0px" uppercase bold content="nos actus" size="body1" color="#fff" />
                </Box>
              </Link>
            </Grid>

          </Grid>
        </Box>
        {/* <Divider /> */}
      </Grid>
    </Grid>
  );
};

export default Banner;
