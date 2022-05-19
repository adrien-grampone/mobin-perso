import { useContext, useEffect, useState } from 'react'
import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Text, DownloadDocumentSection } from '../../../components'
import { getResources, isTokenValid } from '../../../utils'
import Cookies from 'cookies'
import AppContext from "../../../context/AppContext";

const PrivateNationalDocs = ({ docs = [] }) => {
    const { user } = useContext(AppContext);
    const [docsToDisplay, setDocsToDisplay] = useState(docs)

    useEffect(() => {
        if (user.role.type !== "mobin_admin") {
            const newsDocs = docs.filter(d => d.contenu_mobin_admin !== true)
            setDocsToDisplay(newsDocs)
        }
    }, [])

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Text size="h4" letterspacing="2px" bold>
                                <span style={{ color: "#e95e2e" }}>Documents</span> <span style={{ color: "#2699b0" }}>fédéraux</span>
                            </Text>
                        </Box>
                    </Grid>

                    <Box mb={2} mt={4}>
                        <Grid container spacing={10}>
                            {
                                docsToDisplay && docsToDisplay.map((doc, index) => (
                                    <Grid key={index} item xs={12} md={6}>
                                        <DownloadDocumentSection doc={doc} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>

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
                const res = await fetch(getResources)
                const resources = await res.json()
                const docs = resources.filter(doc => doc?.thematique?.titre === "Documents fédéraux").sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

                return {
                    props: { docs }
                };
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

export default PrivateNationalDocs