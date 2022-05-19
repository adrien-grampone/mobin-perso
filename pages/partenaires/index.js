import { Fragment } from 'react'
import { Container, Box, Grid, Card } from '@material-ui/core'
import { Layout, Title, Text } from '../../components'
import { getPartners } from '../../utils'
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

const Partenaires = ({ partners = [] }) => {
    const classes = useStyles();
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

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={3} className={classes.flexBox}>
                            <Box mr={1}>
                                <Title color="#2699b0" content="Nos" size="h4" bold letterspacing="2px" />
                            </Box>
                            <Title content="partenaires nationaux" size="h4" bold letterspacing="2px" />

                        </Box>
                    </Grid>
                    <Grid container spacing={3}>
                        {
                            partners.map((partner, index) => (
                                <Grid item className={classes.gridItem} key={index} xs={12} sm={6} md={4}>
                                    {
                                        partner.logo_partenaire && (
                                            <Box mb={3}>
                                                <a
                                                    href="#"
                                                    onClick={() => _handleClick(partner.site_internet)}>
                                                    <img
                                                        className={classes.img}
                                                        src={partner.logo_partenaire[0].url}
                                                    />
                                                </a>
                                            </Box>
                                        )
                                    }
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
    const res = await fetch(getPartners)
    const partners = await res.json()
    return {
        props: { partners }
    };
}

export default Partenaires