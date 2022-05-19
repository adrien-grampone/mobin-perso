import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const Text = ({ size, color, uppercase, children, bold, letterspacing, fontSize, justify, center }) => {

    const useStyles = makeStyles((theme) => ({
        text: {
            color: color ? color : "black",
            textTransform: uppercase ? "uppercase" : undefined,
            fontWeight: bold ? 'bold' : undefined,
            letterSpacing: letterspacing ? letterspacing : '0px',
            fontSize: fontSize ? fontSize : undefined,
            textAlign: justify ? "justify" : center ? "center" : undefined,
            textAlign: "justify",
            // textAlign: center ? "center" : undefined,
            // textJustify: "inter-word",
            lineHeight: '30px'
        }
    }))
    const classes = useStyles();

    return (
        <Typography className={classes.text} variant={size ? size : "body1"}>{children}</Typography>
    )
}

export default Text