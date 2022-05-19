import { Box, Grid, Paper, Card, CardContent, Button, Chip, Divider } from '@material-ui/core'
import { Title, Text } from '../../global'
import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from "@material-ui/icons/ArrowRight"
import Router from 'next/router'

const useStyles = makeStyles((theme) => ({
    chip: {
        marginTop: "1em",
        marginRight: '5px',
        backgroundColor: theme.palette.blue.main,
        color: "#fff",
        borderRadius: "5px",
        // width: "100%"
    },
    btn: {
        color: "black",
        fontWeight: 'bold',
        borderColor: theme.palette.orange.main,
        '&:hover': {
            backgroundColor: theme.palette.golden.main,
            color: "#fff",
            border: 'none'
        }
    }
}))

const AdherentPreview = ({ adherent = {} }) => {
    const classes = useStyles();
    const { nom_adherent, adresse, competences, id } = adherent

    const handleSeeAdherent = id => Router.push(`/adherents/${id}`)

    return (
        <Grid item xs={12} sm={12} md={6}>
            <Box mt={2} ml={2}>
                <Paper>
                    <Card>
                        <CardContent>
                            <Box>
                                <Title
                                    content={nom_adherent}
                                    color="#e95e2e"
                                    size="h6" uppercase bold letterspacing="1px"
                                />
                                <Divider />
                            </Box>
                            <Box mt={1}>
                                <Text fontSize="13px">{adresse} </Text>
                            </Box>
                            <Box mb={2}>
                                <Grid container>
                                    {
                                        competences && competences.map((comp, index) => (
                                            <Box key={index}>
                                                <Chip className={classes.chip} label={comp.type} />
                                            </Box>
                                        ))
                                    }
                                </Grid>
                            </Box>
                            <Divider />
                            <Box mt={2}>
                                <Button className={classes.btn} variant="outlined" onClick={() => handleSeeAdherent(id)}>
                                    Voir la structure
                                    <ArrowRight />
                                </Button>
                            </Box>
                        </CardContent>

                    </Card>
                </Paper>

            </Box>
        </Grid>
    )
}

export default AdherentPreview