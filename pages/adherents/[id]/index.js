import { useEffect } from 'react'
import { Layout, Title, HtmlContent, Text } from '../../../components'
import { Box, Container, Grid, Table, TableBody, TableCell, Chip, Button } from '@material-ui/core'
import { getAdherent } from '../../../utils'
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'

import showdown from 'showdown'

const useStyles = makeStyles((theme) => ({
    cell1: {
        verticalAlign: 'top',
        fontWeight: 'bold'
    },
    cell2: {
        verticalAlign: 'top'
    },
    chip: {
        marginTop: "1em",
        backgroundColor: theme.palette.blue.main,
        color: "#fff",
        marginRight: '5px',
        borderRadius: "5px"
    },
    chip2: {
        marginTop: "1em",
        backgroundColor: theme.palette.green.main,
        color: "#fff",
        marginRight: '5px',
        borderRadius: "5px"
    },
    btn: {
        textTransform: 'none',
        textDecoration: "underline"
    },
    borderBox: {
        borderLeft: `2px solid ${theme.palette.green.main}`,
        paddingLeft: "2em"
    }
}))

const Adherent = ({ adherent = {} }) => {
    const classes = useStyles();
    const router = useRouter()

    const converter = new showdown.Converter()

    const { nom_adherent = "", presentation_adherent = "", numero_telephone = "", email = "", site_internet = "", adresse = "", departements_actions = [], projets = [], competences = [] } = adherent

    const isWindowContext = typeof window !== "undefined";

    const _handleClick = site => {
        let url = site
        let prefixHttp = 'http://';
        let prefixHttps = 'https://';
        if (url.substr(0, prefixHttp.length) !== prefixHttp && url.substr(0, prefixHttps.length) !== prefixHttps) {
            url = prefix + url;
        }
        if (isWindowContext) {
            window.open(url, '_blank');
        }
    }

    useEffect(() => {
        router.events.on('routeChangeComplete', () => {
            window.scroll({
                top: 0,
                left: 0,
                // behavior: 'smooth'
            });
        });
    }, [])


    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={4}>
                            <Title content={nom_adherent} size="h4" bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container>
                        <Box mb={5}>
                            <Box mb={3}>
                                <Grid container>
                                    <Grid item xs={2} md={4}>

                                        <Title color="#000" size="body2" bold content="Adresse" />
                                    </Grid>
                                    <Grid item xs={10} md={8}>
                                        <Box className={classes.borderBox}>
                                            <Text color="#000" size="body1">{adresse || ""}</Text>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mb={3}>
                                <Grid container>
                                    <Grid item xs={2} md={4}>
                                        <Title color="#000" size="body2" bold content="Téléphone" />
                                    </Grid>
                                    <Grid item xs={10} md={8}>
                                        <Box className={classes.borderBox}>
                                            <Text color="#000" size="body1">{numero_telephone || ""}</Text>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mb={3}>
                                <Grid container>
                                    <Grid item xs={2} md={4}>
                                        <Title color="#000" size="body2" bold content="Email" />
                                    </Grid>
                                    <Grid item xs={10} md={8}>
                                        <Box className={classes.borderBox}>
                                            <Text color="#000" size="body1">
                                                {
                                                    email
                                                        ?
                                                        <a href={`mailto:${email}`}>{email}</a>
                                                        :
                                                        ""
                                                }</Text>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mb={3}>
                                <Grid container>
                                    <Grid item xs={2} md={4}>
                                        <Title color="#000" size="body2" bold content="Site internet" />
                                    </Grid>
                                    {
                                        site_internet && (
                                            <Grid item xs={10} md={8}>
                                                <Box className={classes.borderBox}>
                                                    <Button
                                                        className={classes.btn}
                                                        onClick={() => _handleClick(site_internet)}>
                                                        {site_internet || ""}
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        )
                                    }

                                </Grid>
                            </Box>
                            <Box mb={3}>
                                <Grid container>
                                    <Grid item xs={2} md={4}>
                                        <Title color="#000" size="body2" bold content="Expertise" />
                                    </Grid>
                                    <Grid item xs={10} md={8}>
                                        {
                                            competences && (
                                                <Box className={classes.borderBox}>
                                                    {
                                                        competences && competences.map((comp, index) => (
                                                            <Box key={index}>
                                                                <Chip className={classes.chip} label={comp.type} />
                                                            </Box>
                                                        ))
                                                    }
                                                </Box>
                                            )
                                        }

                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mb={3}>
                                <Grid container>
                                    <Grid item xs={2} md={4}>
                                        <Title color="#000" size="body2" bold content="Projets" />
                                    </Grid>
                                    <Grid item xs={10} md={8}>
                                        {
                                            projets && (
                                                <Box className={classes.borderBox}>
                                                    {
                                                        projets.map((proj, index) => (
                                                            <Box key={index}>
                                                                <Chip className={classes.chip2} label={proj.nom} />
                                                            </Box>
                                                        ))
                                                    }
                                                </Box>
                                            )
                                        }

                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mb={3}>
                                <Grid container>
                                    <Grid item xs={2} md={4}>
                                        <Title color="#000" size="body2" bold content="Présentation" />
                                    </Grid>
                                    <Grid item xs={10} md={8}>
                                        <HtmlContent content={presentation_adherent || ""} />
                                    </Grid>
                                </Grid>
                            </Box>
                            {/* <Table>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Adresse
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">{adresse}</TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Téléphone
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">{numero_telephone}</TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Email
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">{email}</TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Site internet
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">
                                      
                                        <Button
                                            className={classes.btn}
                                            onClick={() => _handleClick(site_internet)}>
                                            {site_internet}
                                        </Button>
                                    </TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Compétences
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">
                                        <Grid container spacing={2}>
                                            {
                                                competences && competences.map((comp, index) => (
                                                    <Box key={index}>
                                                        <Chip className={classes.chip} label={comp.type} />
                                                    </Box>
                                                ))
                                            }
                                        </Grid>
                                    </TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Projets
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">
                                        <Grid container>
                                            {
                                                projets && projets.map((proj, index) => (
                                                    <Box key={index}>
                                                        <Chip className={classes.chip2} label={proj.nom} />
                                                    </Box>
                                                ))
                                            }
                                        </Grid>
                                    </TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Présentation
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">
                                        <HtmlContent content={presentation_adherent} />
                                    </TableCell>
                                </TableBody>
                            </Table> */}
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(getAdherent(id))
    const adherent = await res.json()
    return {
        props: { adherent }
    };
}

export default Adherent