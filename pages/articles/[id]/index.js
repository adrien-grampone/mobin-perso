import { useEffect } from 'react'
import { Container, Box, Grid, Button } from '@material-ui/core'
import { Layout, Title, HtmlContent } from '../../../components'
import { getNewsItem } from '../../../utils'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
    img: {
        width: "100%",
        maxHeight: "200px",
        objectFit: "contain"
    },
    btn: {
        backgroundColor: theme.palette.golden.main,
        color: "#fff",
        border: 'none',
        '&:hover': {
            backgroundColor: theme.palette.blue.main,
            color: "#fff",
            border: 'none'
        }
    },

}))

const Article = ({ article = {} }) => {
    const classes = useStyles();
    const router = useRouter()

    useEffect(() => {
        router.events.on('routeChangeComplete', () => {
            window.scroll({
                top: 0,
                left: 0,
                // behavior: 'smooth'
            });
        });
    }, [])

    const { titre_article, contenu_article, image_principale } = article
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Box mb={4}>
                        <Grid container>
                            <Button onClick={() => router.push('/articles')} className={classes.btn} variant="outlined">
                                Voir tous les articles
                            </Button>
                        </Grid>
                    </Box>
                    <Grid container>
                        <Box mb={2}>
                            <Title content={titre_article} size="h4" bold letterspacing="2px" />
                        </Box>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box mt={1}>
                                {
                                    image_principale && (
                                        <img
                                            src={image_principale?.url}
                                            className={classes.img}
                                        />
                                    )
                                }

                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={4}>
                                <HtmlContent content={contenu_article} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(getNewsItem(id))
    const article = await res.json()
    return {
        props: { article }
    };
}


export default Article