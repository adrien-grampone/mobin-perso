import { Card, CardContent, Box, List, ListItem, Grid } from '@material-ui/core';
import { Title, Text, Icon } from '../../global'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        zIndex: 0,
        position: "relative"
    },
    card: {
        border: `2px ${theme.palette.orange.main} solid`,
        borderRadius: "10px",
        position: "relative",
        zIndex: 1,
        // borderColor: theme.palette.orange.main
    },
    list: {
        listStyleType: "disc",
        fontSize: "20px",
        color: theme.palette.blue.main,
        paddingLeft: "15px"
    },
    icon: {
        marginBottom: '-30px',
        marginLeft: "20px",
        position: "relative",
        zIndex: 20,
        // top: "-0%",
        // left: "-50%",
        //   transforme: translate(-50%, -50%);
    }
}))

const MoveCard = ({ info = {} }) => {
    const classes = useStyles();

    const { title, infos, icon } = info
    return (
        <Box mb={4} mr={3} className={classes.box}>
            <div className={classes.icon}>
                <Icon
                    maxWidth="70px"
                    src={`/static/icons/${icon}.png`} />
            </div>
            <Card variant="outlined" className={classes.card}>
                <CardContent>
                    <Box mb={1} mt={2}><Title content={title} size="h6" uppercase bold letterspacing="1px" /></Box>
                    <List className={classes.list}>
                        {
                            infos.map((info, index) => (
                                <Box key={index} mb={1}><li><Text>{info}</Text></li></Box>
                            ))
                        }


                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}

export default MoveCard