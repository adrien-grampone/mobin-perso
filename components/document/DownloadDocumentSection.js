import { Grid, Box, Divider } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';
import { Title, Text } from '../../components'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    flex: {
        display: "flex",
        alignItems: 'center'
    },
    downloadIcon: {
        color: "#e95e2e"
    },
    gridItem: {
        justifyContent: "center"

    }
}))

const DownloadDocumentSection = ({ doc = {} }) => {
    const classes = useStyles()
    const { titre = "", description = "", documents = [] } = doc

    return (
        <Box mb={3}>
            <Box mb={1}>
                <Title color="#e95e2e" content={titre} size="h6" bold letterspacing="2px" />
            </Box>
            <Box mb={3}>
                <Text size="body2" color="#000">
                    {description}
                </Text>
            </Box>
            <Box mb={3}>
                {
                    documents && documents.map((doc, index) => (
                        <Box className={classes.flex} key={index}>
                            <Box mr={3}>
                                <a className={classes.downloadIcon} target="_blank" href={doc.url || "#"}>
                                    <GetAppIcon />
                                </a>
                            </Box>
                            <Text color="#000" bold size="body2">{doc.name || ''}</Text>
                        </Box>
                    ))
                }

            </Box>
            <Divider color="#e95e2e" />
        </Box>
    )

}

export default DownloadDocumentSection