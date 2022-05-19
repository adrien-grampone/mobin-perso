import { Container, Box } from '@material-ui/core'
import { Layout, Title, Text } from '../../../components'
import { integracodeText } from '../../../utils'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    flexBox: {
        display: "flex",
        alignItems: 'center'
    }
}))


const Integracode = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Box mb={3} className={classes.flexBox}>
                        <Title color="#4ba829" content="Intégracode®" size="h4" bold letterspacing="2px" />
                    </Box>
                    <Box mb={2}>
                        <Text size="h5" letterspacing="2px" bold>
                            <span style={{ color: "#2699b0" }}>Améliorer</span> <span style={{ color: "#b1b3b4" }}>ses</span> <span style={{ color: "#e95e2e" }}>compétences sociolinguistiques</span>
                        </Text>
                    </Box>
                    <Box mb={2}>
                        <Text size="h5" letterspacing="2px" bold>
                            <span style={{ color: "#b1b3b4" }}>tout en assimilant les</span>  <span style={{ color: "#2699b0" }}>pré-requis</span> <span style={{ color: "#b1b3b4" }}>à l'entrée en</span>
                        </Text>
                    </Box>
                    <Box mb={2}>
                        <Text size="h5" letterspacing="2px" bold>
                            <span style={{ color: "#e95e2e" }}>formation</span>  <span style={{ color: "#e5352c" }}>code de la route</span>
                        </Text>
                    </Box>
                    <Box mb={2}>
                        <Text size="h5" letterspacing="2px" bold uppercase>
                            <span style={{ color: "#e95e2e" }}>en partenariat</span>  <span style={{ color: "#2699b0" }}>avec le ministère de l'interieur</span>
                        </Text>
                    </Box>
                    <Box mt={2} mb={8}>
                        {integracodeText}
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default Integracode