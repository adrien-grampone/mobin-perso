import {
  Card, Button, CardContent, Box, Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Moment from 'react-moment';
import Image from 'next/image';
import Router from 'next/router';
import { Title, Text, Icon } from '../../global';

const useStyles = makeStyles((theme) => ({
  box: {
    zIndex: 0,
    position: 'relative',
  },
  card: {
    // height: '400px',
    border: `2px ${theme.palette.orange.main} solid`,
    borderRadius: '10px',
    position: 'relative',
    zIndex: 1,
    background: theme.palette.orange.main,
    // borderColor: theme.palette.orange.main
  },
  cardContent: {
    padding: 0,
    paddingBottom: '0 !important'
  },
  media: {
    height: 150,
  },
  articleTitleContainer: {
    height: 150,
    overflow: 'hidden',
    maxWidth: '250px',
  },
  wrapper: {
    webkitColumnWidth: '220px',
    columnWidth: '250px',
    height: '100%',
    // textAlign: "left",
    // textAlign: "center"
  },
  btn: {
    color: "#fff",
    fontWeight: '700',
    border: "unset",
    textTransform: 'none',
    background: "rgba(255, 255, 255, 0.5)",
    borderRadius: "10px",
    width: "100%",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.5)"
    }
  },
  gridImg:{
    width:"100%"
  },
  img: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: "0 0 10px 10px",
    marginTop: "1rem",
    padding: "0 4px"
  },
  textBtn: {
    padding: "0 16px"
  },
  textDate:{
    padding: "16px 16px 0 16px"
  }
}));

const NewsCardSummary = ({ newsItem = {} }) => {
  const classes = useStyles();

  const {
    contenu_article = '', image_principale = undefined, titre_article = '', created_at = '', id = '',
  } = newsItem;

  const handleSeeArticle = (id) => Router.push(`/articles/${id}`);
  return (
    <Box mt={3} mb={4} mr={3} className={classes.box}>
      <Card variant="outlined" className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid className={classes.textDate}>
            <Text color={"#fff"} bold size="body2"><Moment format="DD/MM/YYYY">{created_at}</Moment></Text>
          </Grid>
          <Box mt={3}>
            <Grid container>
              <Grid className={classes.textBtn}>
                <Grid>
                  <Box className={classes.articleTitleContainer} mr={2}>
                    <Box className={classes.wrapper}>
                      <Title content={titre_article} size="body1" bold letterspacing="1px" color={"#fff"} />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box pt={3} style={{ textAlign: 'center' }}>
                    <Button className={classes.btn} variant="outlined" onClick={() => handleSeeArticle(id)}>
                      En savoir plus
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Grid className={classes.gridImg} item>
                {
                  image_principale && (
                    <img
                      className={classes.img}
                      src={image_principale.url}
                    />
                  )
                }
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsCardSummary;
