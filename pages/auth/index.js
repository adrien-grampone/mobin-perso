import { Fragment } from 'react'
import { Container, Box, Grid, Card } from '@material-ui/core'
import { Layout, Title, Text, MonEspaceLinks } from '../../components'
import { monEspaceLinks, isTokenValid } from '../../utils'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import Cookies from 'cookies'



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
    mainImage: {
        maxHeight: '300px',
        maxWidth: 'auto',
        // opacity: 0.9,
        display: "block",
        textAlign: 'center'
    },
    monEspace: {
        display: "flex",
        justifyContent: "center",
        marginTop: '2rem',
        paddingBottom:"5rem"
    },
    blocImages: {
        width: "310px",
        position: "relative",
        "@media (min-width: 576px)": {
            width: "450px",
        },
        "@media (min-width: 768px)": {
            width: "550px",
        }
    },
    imageGlobable: {
        width: "310px",
        "@media (min-width: 576px)": {
            width: "450px",
        },
        "@media (min-width: 768px)": {
            width: "550px",
        }
    },
    buttons: {
        "& > :nth-child(1)": {
            left: "130px",
            bottom: "-15px",
            "@media (min-width: 576px)": {
                left: "190px",
                bottom: "-25px",
            },
            "@media (min-width: 768px)": {
                left: "235px",
                bottom: "-30px",
            },
        },
        "& > :nth-child(2)": {
            top: "150px",
            left: "45px",
            "@media (min-width: 576px)": {
                bottom: "170px",
                left: "65px",
                top:'unset'
            },
            "@media (min-width: 768px)": {
                bottom: "205px",
                left: "80px",
            },
        },
        "& > :nth-child(3)": {
            top: "65px",
            right: "45px",
            "@media (min-width: 576px)": {
                top: "105px",
                right: "60px",
            },
            "@media (min-width: 768px)": {
                top: "125px",
                right: "70px",
            },
        },
        "& > :nth-child(4)": {
            top: "90px",
            left: "100px",
            "@media (min-width: 576px)": {
                top: "130px",
                left: "155px",
            },
            "@media (min-width: 768px)": {
                top: "155px",
                left: "195px",
            },
        },
        "& > :nth-child(1) span": {
            width: "72px",
            borderRadius: "0 5px 5px 5px",
            transform: "translate(32px, -12px)",
            "@media (min-width: 576px)": {
                width: "102px",
                transform: "translate(45px, -15px)",
            },
            "@media (min-width: 768px)": {
                width: "120px",
                transform: "translate(58px, -20px)",
            },
        },
        "& > :nth-child(2) span": {
            width: "72px",
            borderRadius: "5px 0 5px 5px",
            transform: "translate(-48px, -6px)",
            "@media (min-width: 576px)": {
                width: "100px",
                transform: "translate(-92px, -15px)",
            },
            "@media (min-width: 768px)": {
                width: "115px",
                transform: "translate(-103px, -15px)",
            },
        },
        "& > :nth-child(3) span": {
            width: "64px",
            borderRadius: "5px 5px 5px 0",
            transform: "translate(25px, -76px)",
            "@media (min-width: 576px)": {
                width: "95px",
                transform: "translate(45px, -98px)",
            },
            "@media (min-width: 768px)": {
                width: "115px",
                transform: "translate(58px, -118px)",
            },
        },
        "& > :nth-child(4) span": {
            width: "82px",
            borderRadius: "5px 5px 0 5px",
            transform: "translate(-74px, -82px)",
            "@media (min-width: 576px)": {
                width: "121px",
                transform: "translate(-111px, -115px)",
            },
            "@media (min-width: 576px)": {
                width: "145px",
                transform: "translate(-132px, -137px)",
            },
        },
    },
}))

const AuthHome = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Text size="h4" letterspacing="2px" bold>
                                <span style={{ color: "#2699b0" }}>Mon espace</span> <span style={{ color: "#b1b3b4" }}>adhérent</span>
                            </Text>
                        </Box>
                    </Grid>
                    <div className={classes.monEspace}>
                        <div className={classes.blocImages}>
                            <img className={classes.imageGlobable} src={'/static/svg/mon-espace.svg'} alt="Mon espace" />
                            <div className={classes.buttons}>
                                {
                                    monEspaceLinks &&
                                    monEspaceLinks.map((section, index) => (
                                        <MonEspaceLinks section={section} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {/*
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={4} justify="center">
                                {
                                    privateMenuSections &&
                                    privateMenuSections.map((section, index) => (
                                        <Grid key={index} item xs={12} sm={6}>
                                            <PrivateDocumentsCard section={section} />
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </Grid>
                    </Grid>
                    */}

                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async (ctx) => {
    const req = ctx.req ? ctx.req : null
    if (req) {
        const cookies = new Cookies(ctx.req, ctx.res)
        const token = cookies.get('token')
        if (token) {
            const isTokValid = isTokenValid(token)
            if (isTokValid) {
                return { props: {} }
            } else {
                ctx.res.writeHead(302, { Location: '/' })
                ctx.res.end()
                return { props: {} }
            }


        } else {
            ctx.res.writeHead(302, { Location: '/' })
            ctx.res.end()
            return { props: {} }
        }
    } else {

    }
}


export default AuthHome