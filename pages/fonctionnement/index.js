import { Fragment } from 'react'
import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text, Icon } from '../../components'
import { regions, bureau } from '../../utils'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainImage: {
        maxHeight: '100%',
        maxWidth: '100%',
        // opacity: 0.9,
        display: "block",
        textAlign: 'center'
    },
    mainImage2: {
        maxHeight: '100%',
        maxWidth: '60%',
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
    gridItem2: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
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
    list: {
        color: theme.palette.blue.main,
    },
    listItem: {
        marginBottom: '0px',
        marginTop: '0px'
    }
}))

const Fonctionnement = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content="Notre" size="h4" bold letterspacing="2px" />
                            <Title color="#2699b0" content="fonctionnement" size="h4" bold letterspacing="2px" />
                        </Box>
                    </Grid>

                    <Box mb={5} className={classes.greyBox}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4} className={[classes.gridItem, classes.item1]}>

                                <img
                                    className={classes.mainImage}
                                    src="/static/verbatims/Verbatim Vert9.png"
                                    alt="mobilite"
                                />
                            </Grid>
                            <Grid item xs={12} md={8} className={[classes.gridItem, classes.item2]}>
                                <Box mt={4} mb={2} className={classes.flex}>
                                    <Box mr={2}>
                                        <Icon
                                            src="/static/icons/P.ensavoirplus.png"
                                            maxWidth="30px"
                                        />
                                    </Box>
                                    <Title content="Les Mob'In régionaux" color="#2699b0" size="h5" bold letterspacing="1px" />
                                </Box>
                                <Box mt={0}>
                                    <Text size="body1" color="#000">
                                        <span>Le Réseau Mob'In France fédère les régions Mob'In, qui elles-mêmes fédèrent des structures adhérentes. Vous retrouverez la liste de ces structures locales en cliquant sur la région souhaitée.</span>
                                        <br />
                                        <br />
                                        <ul className={classes.list}>
                                            {
                                                regions.map((region, index) => (
                                                    <Fragment key={index}>
                                                        <li className={classes.listItem}><Link href={`/adherents/regions/${region}`}>{`Mob'In ${region}`}</Link></li>
                                                        <br />
                                                    </Fragment>
                                                ))
                                            }
                                        </ul>

                                        <span>Les régions Mob’In sont des associations régionales, indépendantes dans leur fonctionnement et financement.</span>
                                    </Text>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box mb={2}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Box mt={4} mb={4} className={classes.flex}>
                                    <Box mr={2}>
                                        <Icon
                                            src="/static/icons/P.ensavoirplus.png"
                                            maxWidth="30px"
                                        />
                                    </Box>
                                    <Title content="L'équipe salariée" size="h5" bold letterspacing="1px" />
                                </Box>
                                <Box mt={2}>
                                    <Text size="body1" color="#000">
                                        <ul>
                                            <li>
                                                <span><strong>
                                                    Justine Vuillaume
                                                </strong></span>
                                                <br /> Chargée de mission développement
                                                <br />
                                                <a href="mailto:jvuillaume@mobin-solutions.fr"> jvuillaume@mobin-solutions.fr</a>
                                                <br />
                                                06.10.33.93.11
                                            </li>
                                        </ul>
                                    </Text>
                                </Box>
                                <Box mt={1}>
                                    <img
                                        className={classes.mainImage2}
                                        src="/static/illus/team.png"
                                        alt="mobilite"
                                    />
                                </Box>


                            </Grid>
                            <Grid item xs={12} md={6} className={classes.gridItem2}>
                                <Box mt={4} mb={4} className={classes.flex}>
                                    <Box mr={2}>
                                        <Icon
                                            src="/static/icons/P.ensavoirplus.png"
                                            maxWidth="30px"
                                        />
                                    </Box>
                                    <Title color="#b1b3b4" content="Le bureau exécutif" size="h5" bold letterspacing="1px" />
                                </Box>
                                <Box mt={2}>
                                    <Text size="body1" color="#000">
                                        <ul>
                                            {
                                                bureau.map((member, i) => (
                                                    <li key={i}>
                                                        <strong>{member.name}</strong>, {member.position}
                                                        <br />
                                                        <br />
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Text>
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>

                    <Box mb={5}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={12} md={12}>

                                <Box mt={4} mb={4} className={classes.flex}>
                                    <Box mr={2}>
                                        <Icon
                                            src="/static/icons/P.ensavoirplus.png"
                                            maxWidth="30px"
                                        />
                                    </Box>
                                    <Title color="#2699b0" content="Le conseil d'administration" size="h5" bold letterspacing="1px" />
                                </Box>
                                <Box mt={2}>
                                    <Text size="body1" color="#000">
                                        Le conseil d’administration est composé d’au moins 5 membres en y incluant des représentant.e.s des collègues adhérents. Chaque membre dispose d’une voix. Les membres élu.e.s sont élu.e.s pour deux années et rééligibles sans limitation du nombre de mandat.
                                    </Text>
                                </Box>
                                <Box mt={2}>
                                    <Text size="body1" color="#000">
                                        <a target="_blank" href="/static/legal/organigramme.pdf">Télécharger l'organigramme de Mob'In France</a>
                                    </Text>
                                </Box>
                                <Box mt={4} mb={4} className={classes.flex}>
                                    <Box mr={2}>
                                        <Icon
                                            src="/static/icons/P.ensavoirplus.png"
                                            maxWidth="30px"
                                        />
                                    </Box>
                                    <Title color="#b1b3b4" content="Les statuts" size="h5" bold letterspacing="1px" />
                                </Box>
                                <Box mt={2}>
                                    <Text size="body1" color="#000">
                                        <a target="_blank" href="/static/legal/statuts.pdf">Télécharger les statuts</a>
                                    </Text>
                                </Box>
                                <Box mt={4} mb={4} className={classes.flex}>
                                    <Box mr={2}>
                                        <Icon
                                            src="/static/icons/P.ensavoirplus.png"
                                            maxWidth="30px"
                                        />
                                    </Box>
                                    <Title content="Les rapports d'activité" size="h5" bold letterspacing="1px" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Container>
            </Box>
        </Layout>
    )
}

export default Fonctionnement