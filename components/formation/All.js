import { Container, Box, Grid } from '@material-ui/core';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Layout, Title } from '..';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: 'relative',
    height: '320px',
    width: '260px',
  },
  mainImage: {
    maxHeight: '300px',
    maxWidth: 'auto',
    // opacity: 0.9,
    display: 'block',
    textAlign: 'center',
    position: 'absolute',
  },
  secondImage: {
    zIndex: 2,
    position: 'absolute',
    top: -22,
    left: 48,
    width: '70px',
  },
  secondImageBackground: {
    width: '70px',
    height: '35px',
    backgroundColor: 'white',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 48,
    border: '2px solid #e95e2e',
    borderBottomLeftRadius: '37px',
    borderBottomRightRadius: '37px',
    borderTop: 0,
  },
  mainImage2: {
    maxHeight: '100%',
    maxWidth: '100%',
    // opacity: 0.9,
    display: 'block',
    textAlign: 'center',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    color: '#2699b0',
    cursor: 'pointer',
    height: '100%',
    border: '2px solid #e95e2e',
    borderRadius: '25px',
    '&:hover': {
      backgroundColor: '#e95e2e',
      border: '2px solid #2699b0',
      color: 'white',
      '& $secondImageBackground': {
        border: '2px solid #2699b0',
        borderTop: 0,
      },
      '& $separator': {
        borderTop: '2px solid #2699b0',
      },
    },
  },
  mainContentTitle: {
    display: 'flex',
    alignItems: 'center',
    padding: '32px',
    position: 'relative',
    fontSize: '24px',
    fontWeight: 'bold',
    flex: '0 0 205px',
  },
  mainContentDescription: {
    padding: '8px 32px 0 32px',
    fontWeight: 'bold',
    '& div': {
      marginTop: '4px',
    },
  },
  icon: {
    width: '12px',
    color: '#2699b0',
  },
  separator: {
    borderTop: '2px solid #e95e2e',
  },
  greyBox: {
    marginTop: '1em',
    backgroundColor: theme.palette.gray.main,
    borderRadius: '10px',
    padding: '1em',
  },
  item1: {
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
}));

const AllFormations = ({ trainings = [], title, displayFooterImage }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Box mt={7}>
        <Container maxWidth="lg">
          <Grid container>
            <Box mb={5}>
              <Title content={title} size="h4" bold letterspacing="2px" />
            </Box>
          </Grid>
          <Grid
            container
            spacing={4}
            justify="center"
          >
            {trainings.map((training) => (
              <Grid item xs={12} md={4} align="center" key={training.id}>
                <Link href={`/${title.toLowerCase()}/${training.id}`}>
                  <Grid container justify="center" alignItems="center" className={classes.mainContainer}>
                    <div className={classes.mainContent}>
                      <div className={classes.mainContentTitle}>{training.titre}</div>
                      <div className={classes.separator}>
                        <div className={classes.mainContentDescription}>
                          <div>
                            {training.lieu || training.formation_categorie.type}
                          </div>
                          {training.nombre_seances && <div>{training.nombre_seances}</div>}
                          {training.duree && (
                          <div>
                            {training.duree}
                          </div>
                          )}
                        </div>
                      </div>
                      <div className={classes.secondImageBackground} />
                    </div>
                    {training.icon && (
                    <img
                      className={classes.secondImage}
                      src={`/static/icons/P.${training.icon}.png`}
                      alt=""
                    />
                    )}
                  </Grid>
                </Link>
              </Grid>
            ))}
          </Grid>
          {displayFooterImage && (
          <Box mt={4}>
            <Grid container>
              <Grid item xs={12} md={12} align="center">
                <Grid container justify="center" alignItems="center">
                  <img
                    className={classes.mainImage2}
                    src="/static/illus/two_teams.png"
                    alt="mobilite"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export default AllFormations;
