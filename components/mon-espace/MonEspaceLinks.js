import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainImage: {
        width: '40px',
        height: '40px',
        display: "block",
        textAlign: 'center',
        cursor: 'pointer',
        "@media (min-width: 576px)": {
            width: '55px',
            height: '55px',
        },
        "@media (min-width: 768px)": {
            width: '70px',
            height: '70px',
        },
    },
    lien: {
        'position': 'relative',
    },
    blocLien: {
        "position": "absolute",
        "&:hover span":{
            display:"block"
        }
    },
    infoHover: {
        display:"none",
        background: "#E95E2E",
        color: "#fff",
        textTransform: "uppercase",
        border: "2px solid #E95E2E",
        padding: "5px",
        fontWeight: "700",
        fontSize: "9px",
        position: "absolute",
        "@media (min-width: 576px)": {
           padding:"7px",
           fontSize:"13px"
        },
        "@media (min-width: 768px)": {
            fontSize:"16px"
         },
    }
}))
const MonEspaceLinks = ({ section = {} }) => {
    const classes = useStyles()
    return (
        <>
            <Link href={section.route}>
                <div className={classes.blocLien}>
                    <a className={classes.lien}>
                        <img
                            className={classes.mainImage}
                            src={section.picto}
                            alt="mobilite"
                        />
                        <span className={classes.infoHover}>{section.title}</span>
                    </a>
                </div>
            </Link>
        </>

    )
}

export default MonEspaceLinks