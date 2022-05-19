import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text, MoveCard } from '../../components'
import { pouvoirBouger } from '../../utils'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    flexBox: {
        display: "flex",
        alignItems: 'center'
    },
    greyBox: {
        marginTop: "1em",
        backgroundColor: theme.palette.gray.main,
        borderRadius: '10px',
        padding: "1em"
    },
}))

const PouvoirBougerPage = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Box mb={3} className={classes.flexBox}>
                        <Box mr={1}>
                            <Title color="#2699b0" content="Pouvoir" size="h4" bold letterspacing="2px" />
                        </Box>
                        <Title content="bouger" size="h4" bold letterspacing="2px" />

                    </Box>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={10} md={8}>
                            <Box style={{ justifyContent: 'center' }}>
                                <Text size="body2" bold center>
                                    <span style={{ fontStyle: 'italic', color: "#2699b0" }}>
                                        Agir pour la mobilité inclusive et solidaire c’est proposer des solutions physiquement et financièrement accessibles aux catégories de populations exclues d’un accès à la mobilité (personnes à faibles revenus, demandeurs d’emploi, travailleurs précaires, personnes âgées, personnes à mobilité réduite,...).
                                </span>
                                </Text>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box className={classes.greyBox}>

                        <Box mt={2} mb={2}>
                            <Text size="h6">
                                Le réseau Mob’In propose une offre globale et coordonnée d’actions qui permettent d’agir au service du « Savoir bouger » et du « Pouvoir bouger ».
                                <br />
                                <br />
                            Les actions au service du « Pouvoir bouger » permettent de lever les freins matériels et financiers et de disposer de moyens matériels pour se déplacer.
                    </Text>
                        </Box>
                    </Box>
                    <Box mt={4} mb={2}>
                        <Grid container spacing={2}>
                            <Grid
                                container
                                direction="column"
                                // justify="center"
                                // alignItems="center"
                                xs={12} sm={6} md={6} lg={4}
                            >
                                <Box><MoveCard info={pouvoirBouger[0]} /></Box>
                                <Box><MoveCard info={pouvoirBouger[3]} /></Box>
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                // justify="center"
                                // alignItems="center"
                                xs={12} sm={6} md={6} lg={4}
                            >
                                <Box><MoveCard info={pouvoirBouger[1]} /></Box>
                                <Box><MoveCard info={pouvoirBouger[4]} /></Box>
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                // justify="center"
                                // alignItems="center"
                                xs={12} sm={6} md={6} lg={4}
                            >
                                <Box><MoveCard info={pouvoirBouger[2]} /></Box>
                                <Box><MoveCard info={pouvoirBouger[5]} /></Box>
                            </Grid>
                            {/* {
                                savoirBouger.map((info, index) => (
                                    <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
                                        <MoveCard info={info} />
                                    </Grid>
                                ))
                            } */}
                        </Grid>
                    </Box>
                    <Box mt={4}>
                        <Text size="h6">
                            Vous retrouverez la liste complète des activités proposées par les adhérents <span onClick={() => window.location.href = "/adherents"}><Link href="#">ici</Link></span>.
                        </Text>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default PouvoirBougerPage