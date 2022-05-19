import { Box } from '@material-ui/core'
import { Text, Icon } from '../../components'
import Link from 'next/link'

export const integramobText = () => {
    return (
        <Text size="body1" color="#000">
            <br />
            Dans la continuité de son programme Integracode, Mob’In France engage le développement de « IntegraMob ». Si Integracode répond à une partie du besoin des migrants, la préparation du permis B reste difficilement accessible à une large part de ce public. Le niveau de maîtrise du français requis ne permet pas d’envisager son obtention à court terme.
            <br />

            <br />
            C’est en partant de ce constat et en s’appuyant sur l’expérience de ses adhérents et des enseignements du programme IntegraCode que Mob’In France a développé IntegraMob en 2020. IntegraMob a pour objectif de former et d’accompagner les étrangers primo-arrivants vers les solutions de mobilité alternatives à la conduite automobile.
<br />

            <br />
            Sur chaque territoire, sont mis en place :
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
                    <Text><span style={{ color: "#2699b0", fontWeight: 'bold' }}>une formation mobilité « socle »</span> de 5 séances de 3 heures
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
                        une <span style={{ color: "#2699b0", fontWeight: 'bold' }}> formation complémentaire ASR de 30 heures</span> pour les participants qui souhaitent aller vers la conduite d’un engin motorisé
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
                        un <span style={{ color: "#2699b0", fontWeight: 'bold' }}>accompagnement mobilité individualisé</span> pour chaque participant.
                </Text>
                </Box>
            </Box>
            <br />

            Cet accompagnement se réalisera en lien étroit avec les structures locales d’hébergement et/ou d’accompagnement des migrants.
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
                        <span style={{ color: "#2699b0", fontWeight: 'bold' }}>17 territoires d’expérimentation</span> en 2020 sur  <span style={{ color: "#2699b0", fontWeight: 'bold' }}> 8 régions françaises</span>

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
                        Environ <span style={{ color: "#2699b0", fontWeight: 'bold' }}>250 EPA accompagnés</span> en 2020/2021.

                    </Text>
                </Box>
            </Box>
            <br />
            <Text color="#2699b0" size="h5" letterspacing="2px" bold>Contact</Text>
            <ul>
                <li>
                    <span><strong>
                        Justine Vuillaume
                                                </strong></span>
                    <br /> Coordinatrice nationale
                                                <br />
                    <a href="mailto:mailto:jvuillaume@mobin-solutions.fr"> jvuillaume@mobin-solutions.fr</a>
                    <br />
                    06.10.33.93.11
                                            </li>
            </ul>
        </Text >
    )
}