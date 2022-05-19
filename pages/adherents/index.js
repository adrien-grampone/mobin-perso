import { useEffect } from 'react'
import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title } from '../../components'
import ReactHtmlParser from 'react-html-parser';
import { FranceSVG } from '../../utils'
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router'

const useStyles = makeStyles((theme) => ({
    flexBox: {
        display: "flex",
        alignItems: 'center'
    },
}))

const Adherents = ({ }) => {
    const classes = useStyles()
    const html = FranceSVG

    // useEffect(() => {
    //     window.location.reload();

    // }, [])

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={3} className={classes.flexBox}>
                            <Box mr={1}>
                                <Title color="#2699b0" content="Nos " size="h4" bold letterspacing="2px" />
                            </Box>
                            <Title content="adhérents" size="h4" bold letterspacing="2px" />

                        </Box>
                    </Grid>
                    <Grid container>
                        <Box mb={3}>
                            <Title content=" L’association Mob'In France fédère des régions Mob'In, qui elles-mêmes fédèrent des structures adhérentes. Vous retrouverez la liste de ces structures locales en cliquant sur la région souhaitée." bold size="body1" color="#000" />
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Grid>
                    <Box>
                        <div className="map" id="map">
                            <div style={{
                                textAlign: "center",
                            }}>{ReactHtmlParser(html)}</div>
                        </div>
                    </Box>
                </Grid>
            </Box>
        </Layout>
    )
}

export default Adherents