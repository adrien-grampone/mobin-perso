import { Box } from '@material-ui/core'
import { Text, Icon } from '../../components'
import Link from 'next/link'

export const integracodeText = () => {
    return (
        <Text size="body1" color="#000">
            <br />
            Obtenir le permis de conduire est une condition souvent nécessaire à l’accès à la mobilité et à l’emploi, notamment dans les territoires ruraux.
            Le permis B est également un cadre efficace à la socialisation et à l’apprentissage de la règle et de la citoyenneté. La préparation au code s’avère quasiment impossible sans formation préparatoire
            spécifique.
            <br />
            <br />
            Depuis 2018, les acteurs du réseau Mob’In développent ce programme en partenariat avec le Ministère de l’Intérieur pour :
            <br />
            <Box style={{
                marginTop: "1em",
                backgroundColor: "#f2f2f3",
                borderRadius: '10px',
                padding: "1em"
            }}>
                <Box mt={4} mb={4} style={{ display: 'flex', alignItems: "center" }}>
                    <Box mr={2}>
                        <Icon
                            src="/static/icons/P.ensavoirplus.png"
                            maxWidth="30px"
                        />
                    </Box>
                    <Text><span style={{ color: "#2699b0", fontWeight: 'bold' }}>un accès à la mobilité autonome</span> et au permis de conduire au service de l’<span style={{ color: "#2699b0", fontWeight: 'bold' }}>insertion socioprofessionnelle des personnes étrangères</span></Text>
                </Box>
                <Box mt={4} mb={4} style={{ display: 'flex', alignItems: "center" }}>
                    <Box mr={2}>
                        <Icon
                            src="/static/icons/P.ensavoirplus.png"
                            maxWidth="30px"
                        />
                    </Box>
                    <Text>
                        une meilleure <span style={{ color: "#2699b0", fontWeight: 'bold' }}>maîtrise de la langue française</span> au travers de <span style={{ color: "#2699b0", fontWeight: 'bold' }}>formations centrées sur la mobilité</span>
                    </Text>
                </Box>
                <Box mt={4} mb={4} style={{ display: 'flex', alignItems: "center" }}>
                    <Box mr={2}>
                        <Icon
                            src="/static/icons/P.ensavoirplus.png"
                            maxWidth="30px"
                        />
                    </Box>
                    <Text>
                        une <span style={{ color: "#2699b0", fontWeight: 'bold' }}>appropriation des codes de la citoyenneté</span> au travers d'un apprentissage basé sur le REMC.
                    </Text>
                </Box>
            </Box>
            <br />

            Depuis 2019, la marque Intégracode® est déposée à l’INPI.
            <br />
            <br />
            <br />
            <Text color="#2699b0" size="h5" letterspacing="2px" bold>Quelques <span style={{ color: "#e95e2e" }}>chiffres</span></Text>
            <br />

            <Box style={{
                marginTop: "1em",
                backgroundColor: "#f2f2f3",
                borderRadius: '10px',
                padding: "1em"
            }}>
                <Box mt={4} mb={4} style={{ display: 'flex', alignItems: "center" }}>
                    <Box mr={2}>
                        <Icon
                            src="/static/icons/P.ensavoirplus.png"
                            maxWidth="30px"
                        />
                    </Box>
                    <Text>
                        Plus de <span style={{ color: "#2699b0", fontWeight: 'bold' }}>100 professionnels</span> formés à l’animation de cette formation

                    </Text>
                </Box>
                <Box mt={4} mb={4} style={{ display: 'flex', alignItems: "center" }}>
                    <Box mr={2}>
                        <Icon
                            src="/static/icons/P.ensavoirplus.png"
                            maxWidth="30px"
                        />
                    </Box>
                    <Text>
                        Environ <span style={{ color: "#2699b0", fontWeight: 'bold' }}>500 bénéficiaires</span> par an sur <span style={{ color: "#2699b0", fontWeight: 'bold' }}>7 régions.</span>

                    </Text>
                </Box>
            </Box>
            <br />
            <br />
            <a target="_blank" href="/static/integracode/presentation.pdf">Télécharger la plaquette de présentation</a>
            <br />
            <a target="_blank" href="/static/integracode/fiche_action_integracode.pdf">Télécharger la fiche action</a>

            < br />
            <br />
            <Text color="#2699b0" size="h5" letterspacing="2px" bold>Contact</Text>
            <ul>
                <li>
                    <span><strong>
                        Pascal Grand
                    </strong></span>
                    <br /> Coordinateur national
                    <br />
                    <a href="mailto:integracode@mobin-solutions.fr"> integracode@mobin-solutions.fr</a>
                    <br />
                    06.16.99.90.29
                </li>
            </ul>
        </Text >
    )
}