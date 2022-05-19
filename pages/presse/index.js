import { Container, Box, Grid, Card } from '@material-ui/core'
import { Layout, Title, Text, Icon } from '../../components'
import { getNewsletters, getRevuesPresse, getCommuniquesPresse } from '../../utils'
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
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
    img: {
        width: "100%",
        maxHeight: "80px",
        objectFit: "contain"
    },
    flexBox: {
        display: "flex",
        alignItems: 'center'
    },
    downloadIcon: {
        color: "#e95e2e"
    },
}))

const Presse = ({ newsletters = [], revuesPresse = [], communiquesPresse = [] }) => {
    const classes = useStyles();
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={3} className={classes.flexBox}>
                            <Box mr={1}>
                                <Title color="#2699b0" content="Notre" size="h4" bold letterspacing="2px" />
                            </Box>
                            <Title content="espace presse" size="h4" bold letterspacing="2px" />

                        </Box>
                    </Grid>

                    {/* ////// COMMUNIQUES DE PRESSE ////// */}
                    {
                        communiquesPresse && communiquesPresse.length > 0 && (
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Box mt={4} mb={2} className={classes.flex}>
                                            <Box mr={2}>
                                                <Icon
                                                    src="/static/icons/P.ensavoirplus.png"
                                                    maxWidth="30px"
                                                />
                                            </Box>
                                            <Title content="Nos communiqués de presse" color="#4ba829" size="h5" bold letterspacing="1px" />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    {
                                        communiquesPresse && communiquesPresse.map((item, index) => (
                                            <Grid item xs={12} md={6} key={index}>
                                                <Box className={classes.flex} mb={2}>
                                                    <Box mr={3}>
                                                        <a className={classes.downloadIcon} target="_blank" href={item?.document?.url || "#"}>
                                                            <GetAppIcon />
                                                        </a>
                                                    </Box>
                                                    <Text color="#000" bold size="body2">{item?.titre || ''}</Text>
                                                </Box>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        )
                    }


                    {/* ////// REVUES PRESSE ////// */}
                    {
                        revuesPresse && revuesPresse.length > 0 && (
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Box mt={4} mb={2} className={classes.flex}>
                                            <Box mr={2}>
                                                <Icon
                                                    src="/static/icons/P.ensavoirplus.png"
                                                    maxWidth="30px"
                                                />
                                            </Box>
                                            <Title content="Nos revues de presse" color="#2699b0" size="h5" bold letterspacing="1px" />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    {
                                        revuesPresse && revuesPresse.map((item, index) => (
                                            <Grid item xs={12} md={6} key={index}>
                                                <Box className={classes.flex} mb={2}>
                                                    <Box mr={3}>
                                                        <a className={classes.downloadIcon} target="_blank" href={item?.document?.url || "#"}>
                                                            <GetAppIcon />
                                                        </a>
                                                    </Box>
                                                    <Text color="#000" bold size="body2">{item?.titre || ''}</Text>
                                                </Box>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        )
                    }


                    {/* ////// NEWSLETTERS ////// */}
                    {
                        newsletters && newsletters.length > 0 && (
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Box mt={4} mb={2} className={classes.flex}>
                                            <Box mr={2}>
                                                <Icon
                                                    src="/static/icons/P.ensavoirplus.png"
                                                    maxWidth="30px"
                                                />
                                            </Box>
                                            <Title content="Nos newsletters" color="#e95e2e" size="h5" bold letterspacing="1px" />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    {
                                        newsletters && newsletters.map((item, index) => (
                                            <Grid item xs={12} md={6} key={index}>
                                                <Box mb={1}>
                                                    <Text color="#b1b3b4" size="body1" uppercase bold>
                                                        {item?.trimestre?.type || ""} {item.annee || ""}
                                                    </Text>
                                                </Box>
                                                <Box className={classes.flex} mb={2}>
                                                    <Box mr={3}>
                                                        <a className={classes.downloadIcon} target="_blank" href={item?.document?.url || "#"}>
                                                            <GetAppIcon />
                                                        </a>
                                                    </Box>
                                                    <Text color="#000" bold size="body2">{item?.document?.name || ''}</Text>
                                                </Box>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        )
                    }

                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    // newsletters
    const res = await fetch(getNewsletters)
    const json = await res.json()
    const newsletters = json.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

    // Revues
    const res2 = await fetch(getRevuesPresse)
    const json2 = await res2.json()
    const revuesPresse = json2.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

    // Communiques
    const res3 = await fetch(getCommuniquesPresse)
    const json3 = await res3.json()
    const communiquesPresse = json3.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

    return {
        props: { newsletters, revuesPresse, communiquesPresse }
    };
}

export default Presse