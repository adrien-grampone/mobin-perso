import React from 'react';
import Container from '@material-ui/core/Container';
// import { Image } from 'react-bootstrap'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';

import { Banner, Layout, FiguresSection, NewsSection, NewsletterSection, BlocsAccueil, Title, Text, Icon } from "../components"
 // ajouter dans l'import FormulaireMobin
import { getNews } from '../utils'

const useStyles = makeStyles((theme) => ({
  mainImage: {
    maxHeight: '100%',
    maxWidth: '100%',
    opacity: 0.3,
    display: "block"
  },
  containerColor: {
    background: "#D6370026"
  },
  container: {
    position: "relative",
    textAlign: "center",
    display: "inline-block"
  },
  imageText: {
    // backgroundColor: theme.palette.background.default,
    // opacity: 0.7,
    padding: '5px',
    borderRadiux: "50px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: "650px",
  },
  text: {
    position: "absolute",
    paddingTop: "5%",
    top: 0,
    left: 0,
    width: "100%",
    textAlign: "center",
    fontSize: "5vw",
    "@media (min-width: 1200px)": {
      fontSize: "60px"
    }
  },
  title: {
    "@media (min-width: 960px)": {
      marginLeft: '2em',
      marginRight: '2em'
    }
  },
  mainImage2: {
    maxHeight: "calc(100vh - 160px - 160px)", // Window height minus Header minus Banner
    maxWidth: '100%',
    // opacity: 0.9,
    display: "block",
    textAlign: 'center'
  },
  // mainBox: {
  //   minHeight: '100%',
  //   maxHeight: '100%',
  // },
  flexBox: {
    display: "flex",
    alignItems: 'center'
  },
  btnCompte: {
    background: "#E95E2E",
    borderRadius: "80px",
    display: "flex",
    alignItems: "center",
    gridGap: "10px",
    fontWeight: "700",
    color: "#fff",
    textDecoration: "unset",
    padding: "1rem 20px",
    width: "fit-content",
    margin: "0 auto",
    "@media (min-width: 576px)": {
      fontSize: "16px"
    },
    "@media (min-width: 768px)": {
      fontSize: "18px"
    },
  },
  main: {
    paddingTop: "1rem"
  },
}))

const Home = ({ news = [] }) => {
  const classes = useStyles();

  return (
    <Layout className={classes.test}>
      <Container maxWidth="xl" className={classes.containerColor}>
        <section className={classes.main}>
          <Link href={'/auth/'}>
            <a className={classes.btnCompte}>
              <Icon maxWidth="20px" src={`/static/icons/user.png`} />
              J'accède à mon espace adhérent
            </a>
          </Link>
          <BlocsAccueil />
          {/*<Banner />
          <Grid container>
            <Grid item xs={12} md={12} align="center">
              <Grid container justify="center" alignItems="center">
                <Box className={classes.mainBox}>
                  <img
                    className={classes.mainImage2}
                    src="/static/illus/main_image_texte.png"
                    alt="mobilite"
                  />
                  {/* <Grid container justify="center">
                    <Box mb={3} mt={3} className={classes.flexBox}>
                      <Text center size="h4" color="#2699b0" bold>
                        <span style={{ fontStyle: "italic" }}>Vers une mobilité</span> <span style={{ fontStyle: "italic", color: "#e95e2e" }}>autonome et durable</span>
                      </Text>
                    </Box>
                  </Grid> */}
          {/* </Box>
              </Grid>
            </Grid>
                </Grid>*/}
        </section>
        {/*<section id="formulaires">
          <FormulaireMobin />
              </section>*/}
        <section id="figures">
          <FiguresSection />
        </section>
        <section id="news">
          <NewsSection news={news} />
        </section>
        {/*<section id="newsletter">
          <NewsletterSection />
              </section */}
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(getNews)
  let news = await res.json()
  let newsSorted = news.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  let newsSliced = newsSorted.slice(0, 4)
  return {
    props: { news: newsSliced }
  };
}

export default Home
