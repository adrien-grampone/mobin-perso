import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text, Icon } from '../../components'
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
        marginBottom: "1em"
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

const History = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title color="#2699b0" content="Notre histoire," size="h4" bold letterspacing="2px" />
                            <Title content="nos valeurs" size="h4" bold letterspacing="2px" />
                            <Title color="#b1b3b4" content="et nos missions" size="h4" bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Box mb={5}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={8}>
                                <Box mt={4} mb={4} className={classes.flex}>
                                    <Box mr={2}>
                                        <Icon
                                            src="/static/icons/P.ensavoirplus.png"
                                            maxWidth="30px"
                                        />
                                    </Box>
                                    <Title color="#2699b0" content="Notre histoire" size="h5" bold letterspacing="1px" />
                                </Box>
                                <Box mt={2}>
                                    <Text size="body1" color="#000">
                                        L’association Mob’In France a été créée le 30 août 2017, par d’anciens membres de l’<span style={{ color: "#2699b0", fontWeight: 'bold' }}>association FARE</span>.
                                <br />
                                        <br />
                                        FARE était la <span style={{ color: "#2699b0", fontWeight: 'bold' }}>Fédération française des structures associatives de la mobilité</span>, créée en 1988 par des éducateurs militants.
                                <br />
                                        <br />
                                        Fare est devenue peu à peu la fédération nationale des associations et de professionnels afin de <span style={{ color: "#2699b0", fontWeight: 'bold' }}>favoriser l’accès à la mobilité pour tous</span>, en particulier les publics en difficulté en fédérant les acteurs de la mobilité et en devenant un interlocuteur national.
                                <br />
                                        <br />
                                        Suite à sa disparition en octobre 2016, de nombreux acteurs sont restés réunis autour de l’<span style={{ color: "#2699b0", fontWeight: 'bold' }}>idée du réseau</span>.
                                <br />
                                        <br />
                                        <span style={{ color: "#2699b0", fontWeight: 'bold' }}>Le réseau Mob’In</span> a d’abord été constitué par l’échelle locale grâce aux structures du terrain ; puis à une échelle régionale avec la constitution des « Mob’In régionaux » ; et enfin la représentation nationale Mob’In France.
                                </Text>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                                <img
                                    className={classes.mainImage}
                                    src="/static/verbatims/Verbatim Orange7.png"
                                    alt="mobilite"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mb={5} className={classes.greyBox}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4} className={[classes.gridItem, classes.item1]}>

                                <img
                                    className={classes.mainImage}
                                    src="/static/verbatims/Verbatim Jaune-orangé14.png"
                                    alt="mobilite"
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
                                    <Title content="Nos valeurs" size="h5" bold letterspacing="1px" />
                                </Box>
                                <Box mt={2}>
                                    <Text size="body1" color="#000">
                                        L’association a pour objet d’<span style={{ color: "#e95e2e", fontWeight: 'bold' }}>accompagner les personnes en situation de fragilité vers une mobilité autonome et durable</span>.
                                    <br />
                                        <br />
                                        L’association Mob’In France est indépendante et fédère des associations régionales elles-aussi indépendantes dans leur fonctionnement et dans leur financement.
                                </Text>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8} className={classes.gridItem}>
                            <Box mt={4} mb={4} className={classes.flex}>
                                <Box mr={2}>
                                    <Icon
                                        src="/static/icons/P.ensavoirplus.png"
                                        maxWidth="30px"
                                    />
                                </Box>
                                <Title color="#b1b3b4" content="Nos missions" size="h5" bold letterspacing="1px" />
                            </Box>
                            <Box mt={2}>
                                <Text size="body1" color="#000">
                                    <span style={{ color: "#2699b0", fontWeight: 'bold' }}>- Partager un cadre commun de valeurs et de principe d’action entre les Régions Mob’In</span> et permettre la mutualisation des compétences, expériences, méthodes et outils
                                    <br />
                                    <br />

                                    <span style={{ color: "#2699b0", fontWeight: 'bold' }}>- Assurer une représentation nationale des Mob’In régionaux et des projets locaux</span> auprès des acteurs nationaux de la mobilité et des partenaires

                                    <br />
                                    <br />

                                    <span style={{ color: "#2699b0", fontWeight: 'bold' }}>- Accompagner la mise en place d’organisations régionales dans un cadre national cohérent</span> et les accompagner dans leur développement et la définition d’une stratégie et d’un plan d’action.

                                </Text>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                            <img
                                className={classes.mainImage}
                                src="/static/verbatims/Verbatim Bleu6.png"
                                alt="mobilite"
                            />

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default History