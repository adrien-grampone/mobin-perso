import { Fragment } from 'react'
import { Container, Box, Grid, Card } from '@material-ui/core'
import { Layout, Title, NewsCardSummary } from '../../components'
import { getNews } from '../../utils'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        textAlign: "center",
        justifyContent: "center"
    },
    img: {
        width: "100%",
        maxHeight: "80px",
        objectFit: "contain"
    },
    flexBox: {
        display: "flex",
        alignItems: 'center'
    },
}))

const Articles = ({ newsItems = [] }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={3} className={classes.flexBox}>
                            <Box mr={1}>
                                <Title color="#2699b0" content="Tous les" size="h4" bold letterspacing="2px" />
                            </Box>
                            <Title content="articles" size="h4" bold letterspacing="2px" />

                        </Box>
                    </Grid>
                    <Grid container>
                        {
                            newsItems.map(newsItem => (
                                <Grid item xs={12} sm={6} md={3} lg={3} key={newsItem.id}>
                                    <NewsCardSummary newsItem={newsItem} />
                                </Grid>
                            ))
                        }
                    </Grid>

                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(getNews)
    const newsItems = await res.json()
    const filtered = newsItems.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    return {
        props: { newsItems: filtered }
    };
}

export default Articles