import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    blocForm: {
        background: "#2699B0",
        borderRadius: "10px",
        padding: "1.5rem"
    },

    blocTop: {
    },

    titre: {
        display: "flex",
        gridGap: "0.5rem",
        alignItems: "end"
    },

    titreText: {
        color: "#fff",
        margin: "unset",
        fontWeight:"700",
    },

    text: {
        color: "#fff",
        marginTop: "0.5rem",
        "@media (min-width: 992px)": {
            fontSize: "16px"
        }
    },

    boldText: {
        fontWeight: "bold"
    },

    img: {
        width: "100px",
        objectFit: "contain"
    },

    blocBottom: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gridGap: "1rem",
        "@media (min-width: 768px)": {
            flexDirection: "row",
            gridGap: "4rem"
        },
        "@media (min-width: 992px)": {
            gridGap: "8rem"
        }
    },

    imgBottom: {
        width: "100%",
        maxWidth: "250px",
        "@media (min-width: 992px)": {
            maxWidth: "250px",
            maxHeight: "270px"
        }
    },

    form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gridGap: "1rem",
        maxWidth: "700px"
    },

    email: {
        background: "#fff",
        borderRadius: "10px",
        padding: "0.5rem 1.5rem",
        display: "flex",
        alignItems: "center",
        gridGap: "1rem"
    },
    inputEmail: {
        background: "none",
        border: "none",
        width: "100%",
        color: "#E95E2E",
        fontWeight:"400",
        "&::placeholder": {
            color: "#E95E2E",
            "@media (min-width: 992px)": {
                fontSize: "16px"
            }
        },
        "&:focus": {
            outline: "none"
        },
        "@media (min-width: 992px)": {
            fontSize: "16px",
            padding: "10px"
        }
    },

    imgEmail: {
        maxWidth: "40px"
    },

    demande: {
        background: "#fff",
        borderRadius: "10px",
        padding: "0.5rem 1.5rem",
        display: "flex",
        alignItems: "flex-start",
        gridGap: "1rem"
    },

    inputDemande: {
        resize: "none",
        border: "none",
        fontFamily: 'Open Sans',
        width: "90%",
        fontWeight:"400",
        color: "#E95E2E",
        "&::placeholder": {
            color: "#E95E2E",
            fontFamily: 'Open Sans',
            "@media (min-width: 992px)": {
                fontSize: "16px"
            }
        },
        "&:focus": {
            outline: "none"
        },
        "@media (min-width: 992px)": {
            fontSize: "16px",
            padding: "10px"
        }
    },

    valider: {
        display: "flex",
        justifyContent: "end"
    },

    btn: {
        fontWeight:"700",
        background: "#E95E2E",
        borderRadius: "13px",
        color: "#fff",
        fontFamily: 'Open Sans',
        border: "none",
        width: "fit-content",
        padding: "5px 0.5rem",
        display: "flex",
        alignItems: "center",
        gridGap: "5px",
        cursor: "pointer",
        '&::before': {
            content: "''",
            backgroundImage: 'url(/static/icons/btnEnvoyer.png)',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "block",
            width: "17px",
            height: "17px"
        },
        "@media (min-width: 992px)": {
            fontSize: "16px"
        }
    }
}));

const submitContact = async (event) => {
    event.preventDefault();
    /*axios.post('http://localhost:1337/formulaire-mobins', {
        Email: event.target.email.value,
        Demande: event.target.demande.value,
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });*/
};

const FormulaireMobin = () => {
    const classes = useStyles();

    return (
        <Container className={classes.blocForm}>
            <div className={classes.blocTop}>
                <div className={classes.titre}>
                    <h2 className={classes.titreText}>J'adhère à</h2>
                    <img className={classes.img} src={'/static/icons/mobin-webinars.png'} alt="mobin webinar" />
                </div>
                <p className={classes.text}>Vous êtes opérateur de mobilité solidaire et vous souhaitez rejoindre le réseau Mob’in ? N’hésitez pas à nous laisser un message par le biais de ce formulaire de contact en indiquant votre <span className={classes.boldText}>région</span> et <span className={classes.boldText}>département</span>.</p>
            </div>
            <div className={classes.blocBottom}>
                <form onSubmit={submitContact} className={classes.form}>
                    <div className={classes.email}>
                        <img className={classes.imgEmail} src={'/static/icons/email.png'} alt="Champ email" />
                        <input
                            className={classes.inputEmail}
                            placeholder="Mon email..."
                            id="email"
                            name="email"
                            type="email"
                            required
                        />
                    </div>
                    <div className={classes.demande}>
                        <img className={classes.imgEmail} src={'/static/icons/demande.png'} alt="Champ demande" />
                        <textarea
                            className={classes.inputDemande}
                            id="demande"
                            name="demande"
                            placeholder="Ma demande..."
                            rows={5}
                            required
                        />
                    </div>
                    <div className={classes.valider}>
                        <button type="submit" className={classes.btn}>Envoyer</button>
                    </div>
                </form>
                <img className={classes.imgBottom} src={'/static/icons/form.png'} alt="Adhérer à Mobin" />
            </div>
        </Container>
    );
};

export default FormulaireMobin;
