import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text } from '../../components'
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

const Presentation = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={4}>
                            <Title content="Présentation" size="h4" bold letterspacing="2px" />
                            <Title color="#2699b0" content="de Mob'In " size="h4" bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8} className={classes.gridItem}>
                            <Box mt={2} mb={8}>
                                <Text size="body1" color="#000">
                                    Le réseau Mob’In fédère les <span style={{ color: "#2699b0", fontWeight: 'bold' }}>acteurs de la mobilité inclusive</span>, solidaire et durable sous la forme d’organisations régionales.
                                <br />
                                    <br />
                                    Il fédère <span style={{ color: "#2699b0", fontWeight: 'bold' }}>8 régions Mob'In</span> et regroupe près de   <span style={{ color: "#2699b0", fontWeight: 'bold' }}>150 membres en France</span>. Le réseau a pour <span style={{ color: "#2699b0", fontWeight: 'bold' }}>pour objectif de rassembler des acteurs territoriaux de la mobilité</span>. Ces structures, que ce soient des écoles de conduite à statut associatif, des garages solidaires ou des plateformes mobilité ont en commun une priorité : <span style={{ color: "#2699b0", fontWeight: 'bold' }}>l’accompagnement à la mobilité des publics vulnérables</span>.
                                <br />
                                    <br />
                                    Au sein de chaque région, <span style={{ color: "#2699b0", fontWeight: 'bold' }}>au plus près des territoires</span>, des hommes et des femmes, acteurs associatifs apportent leurs <span style={{ color: "#2699b0", fontWeight: 'bold' }}>compétences pédagogiques</span>, leur <span style={{ color: "#2699b0", fontWeight: 'bold' }}>capacité à innover et à développer des projets</span> qui favorisent la mobilité de leurs bénéficiaires.
                                </Text>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                            <img
                                className={classes.mainImage}
                                src="/static/verbatims/Verbatim Bleu5.png"
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
                                    src="/static/verbatims/Verbatim Jaune-orangé.png"
                                />
                            </Grid>
                            <Grid item xs={12} md={8} className={[classes.gridItem, classes.item2]}>
                                <Box mt={2} pl={10}>
                                    <Title color="#2699b0" content="Le réseau Mob'In" size="h4" bold letterspacing="2px" />
                                    <Title content="c'est :" size="h4" bold letterspacing="2px" />
                                    <br />
                                    <Title color="#2699b0" italic bold size="h5" content="8 régions constituées" />
                                    <br />
                                    <Title color="#2699b0" italic bold size="h5" content="+ de 120 structures adhérentes" />
                                    <br />
                                    <Title color="#2699b0" italic bold size="h5" content="+ de 30 000 personnes accompagnées" />
                                    <br />
                                    <Title color="#2699b0" italic bold size="h5" content="+ de 130 conseillers et conseillères mobilité" />
                                    <br />
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default Presentation