import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



const Title = ({ size, color, uppercase, content, bold, italic, letterspacing, fontSize, listItem, listStyleType, listStylePosition, opacity, mr }) => {

    const useStyles = makeStyles((theme) => ({
        title: {
            color: color ? color : theme.palette.orange.main,
            textTransform: uppercase ? "uppercase" : undefined,
            fontWeight: bold ? 'bold' : undefined,
            fontStyle: italic ? 'italic' : undefined,
            letterSpacing: letterspacing ? letterspacing : '0px',
            fontSize: fontSize ? fontSize : undefined,
            display: listItem ? "list-item" : undefined,
            listStyleType: listStyleType ? listStyleType : undefined,
            listStylePosition: listStylePosition ? listStylePosition : undefined,
            opacity: opacity ? opacity : undefined,
            marginRight: mr ? mr : undefined
        }
    }))
    const classes = useStyles();

    return (
        <Typography className={classes.title} variant={size ? size : "h6"}>{content}</Typography>
    )
}

export default Title