import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text, HtmlContent, Icon } from '../../../components'
import { accompagnerTerritoires, developpementEcoleConduite, mobiliteMigrants } from '../../../utils'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainImage: {
        maxHeight: '100%',
        maxWidth: 'auto',
        // opacity: 0.9,
        display: "block",
        textAlign: 'center'
    },
    gridItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "1em",
    },
    flex: {
        display: "flex",
        alignItems: 'center'
    },
    greyBox: {
        marginTop: "1em",
        backgroundColor: theme.palette.gray.main,
        borderRadius: '10px',
        padding: "1em"
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
}))

const Territoires = ({ }) => {
    const classes = useStyles()
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={4}>
                            <Title content="Au service" size="h4" bold letterspacing="2px" />
                            <Title color="#2699b0" content="des territoires" size="h4" bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8} className={classes.gridItem}>
                            <Box mt={4} mb={4} className={classes.flex}>
                                <Box mr={2}>
                                    <Icon
                                        src="/static/icons/P.ensavoirplus.png"
                                        maxWidth="30px"
                                    />
                                </Box>
                                <Title color="#b1b3b4" content="Accompagner les territoires à la création d’une offre de mobilité solidaire" size="h5" bold letterspacing="1px" />
                            </Box>
                            <Box mt={2} mb={8}>
                                {accompagnerTerritoires}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                            <img
                                className={classes.mainImage}
                                src="/static/verbatims/Verbatim Vert7.png"
                                alt="mobilite"
                            />
                        </Grid>
                    </Grid>
                    <Box className={classes.greyBox}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4} className={[classes.gridItem, classes.item1]}>
                                <img
                                    className={classes.mainImage}
                                    alt="mobilite"
                                    src="/static/verbatims/Verbatim Jaune-orangé4.png"
                                />
                            </Grid>
                            <Grid item xs={12} md={8} className={[classes.gridItem, classes.item2]}>
                                <Box mt={4} mb={4} className={classes.flex}>
                                    <Box mr={2}>
                                        <Icon
                                            src="/static/icons/P.ensavoirplus.png"
                                            maxWidth="30px"
                                        />
                                    </Box>
                                    <Title color="#2699b0" content="Développement d’une école de conduite à statut associatif" size="h5" bold letterspacing="1px" />
                                </Box>
                                <Box mt={2} mb={8}>
                                    {developpementEcoleConduite}
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={4}>
                            {/* <Grid item xs={12} sm={6} md={4} className={[classes.gridItem, classes.item1]}>
                                <img
                                    className={classes.mainImage}
                                    alt="mobilite"
                                    src="/static/verbatims/Verbatim Jaune-orangé4.png"
                                />
                            </Grid> */}
                            <Grid item xs={12} md={12} className={classes.gridItem}>
                                <Box mt={4} mb={4} className={classes.flex}>
                                    <Box mr={2}>
                                        <Icon
                                            src="/static/icons/P.ensavoirplus.png"
                                            maxWidth="30px"
                                        />
                                    </Box>
                                    <Title color="#e95e2e" content="Offre de mobilité pour les migrants" size="h5" bold letterspacing="1px" />
                                </Box>
                                <Box mt={2} mb={8}>
                                    {mobiliteMigrants}
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default Territoires