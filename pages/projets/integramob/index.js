import { Container, Box } from '@material-ui/core'
import { Layout, Title, Text } from '../../../components'
import { integramobText } from '../../../utils'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    flexBox: {
        display: "flex",
        alignItems: 'center'
    }
}))


const Integramob = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Box mb={3} className={classes.flexBox}>
                        <Title color="#4ba829" content="IntégraMob" size="h4" bold letterspacing="2px" />
                    </Box>
                    <Box mb={2}>
                        <Text size="h5" letterspacing="2px" bold>
                            <span style={{ color: "#2699b0" }}>La mobilité</span> <span style={{ color: "#b1b3b4" }}>des</span> <span style={{ color: "#e95e2e" }}>migrants</span>
                        </Text>
                    </Box>
                    <Box mb={2}>
                        <Text size="h5" letterspacing="2px" bold>
                            <span style={{ color: "#b1b3b4" }}>pour</span>  <span style={{ color: "#e95e2e" }}>l'intégration</span>
                        </Text>
                    </Box>
                    <Box mb={2}>
                        <Text size="h5" letterspacing="2px" bold uppercase>
                            <span style={{ color: "#e95e2e" }}>en partenariat</span>  <span style={{ color: "#2699b0" }}>avec le ministère de l'interieur</span>
                        </Text>
                    </Box>
                    <Box mt={2} mb={8}>
                        {integramobText}
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default Integramob