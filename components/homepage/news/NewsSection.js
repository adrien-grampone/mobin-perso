import { Container, Grid, Box } from '@material-ui/core'
import { Title, NewsCardSummary } from '../../../components'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    flexBox: {
        display: "flex",
        alignItems: 'center'
    },
}))

const NewsSection = ({ news = [] }) => {
    const classes = useStyles();

    return (
        <Container>
            <Box mb={3} className={classes.flexBox}>
                <Box mr={1}>
                    <Title color="#2699b0" content="Les" size="h3" bold letterspacing="2px" />
                </Box>
                <Title content="actus" size="h3" bold letterspacing="2px" />

            </Box>
            <Grid container>

                {
                    news.map(newsItem => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={newsItem.id}>
                            <NewsCardSummary newsItem={newsItem} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default NewsSection