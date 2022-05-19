import { Container, Grid, Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        marginTop: '1em',
        backgroundColor: theme.palette.gray.main,
        borderRadius: '10px',
        paddingRight: '1em'
    },
    boxCustom: {
        paddingTop: "unset",
        marginTop: "1rem"
    },
    iconSection: {
        paddingBottom: '10px'
    },
    flexBox: {
        display: 'flex',
        alignItems: 'center'
    },
    blocGrid: {
        display: "flex",
        gridGap: "3rem 1.5rem",
        flexDirection: "column",
        "@media (min-width: 576px)": {
            display: "grid",
            gridTemplateAreas: `"blocText blocText"
                               "blocTextOrange blocTextBleu"
                               "blocBleuFonce blocBleuFonce"`,
        },
        "@media (min-width: 992px)": {
            gridTemplateAreas: `"blocText blocText blocText blocTextOrange blocTextOrange"
                               "blocTextBleu blocBleuFonce blocBleuFonce blocBleuFonce blocBleuFonce"`,
        },
    },
    blocText: {
        borderRadius: "25px",
        background: "#fff",
        color: "#E95E2E",
        gridArea: "blocText",
        padding: "2rem"
    },
    blocTextOrange: {
        background: "#E95E2E",
        display: "flex",
        padding: "2rem 1rem",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "25px",
        gridArea: "blocTextOrange",
    },
    blocTextBleu: {
        background: "#2699B0",
        display: "flex",
        padding: "2rem 1rem",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "25px",
        gridArea: "blocTextBleu",
    },
    blocBleuFonce: {
        background: "#205164",
        display: "flex",
        padding: "2rem 1rem",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "25px",
        gridArea: "blocBleuFonce",
        "@media (min-width: 992px)": {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gridGap: "4rem"
        },
    },
    sousDiv: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "430px"
    },
    titre: {
        color: "#fff",
        textAlign: "center",
        marginTop:"unset",
        fontWeight:"700",
        "@media (min-width: 768px)": {
            fontSize: "27px"
        },
    },
    titreBlocOrange:{
        fontWeight:"700",
        marginTop:"unset",
        "@media (min-width: 768px)": {
            fontSize: "27px"
        },
    },
    img: {
        width: "200px"
    },
    imgOffre:{
        width: "170px",
        height:"180px"
    },
    p: {
        marginTop: "2rem",
        "@media (min-width: 768px)": {
            fontSize: "18px"
        },
    },
}));
const BlocsAccueil = () => {
    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.boxCustom} pt={10} pb={10}>
                <Grid className={classes.blocGrid}>
                    <div className={classes.blocText}>
                        <h2 className={classes.titreBlocOrange}>Lorem Ipsum</h2>
                        <p className={classes.p}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                    </div>
                    <div className={classes.blocTextOrange}>
                        <h2 className={classes.titre}>Découvrez la cartographie des adhérents</h2>
                        <img className={classes.img} src={'/static/icons/mobin.png'} alt="mobin" />
                    </div>
                    <div className={classes.blocTextBleu}>
                        <h2 className={classes.titre}>Découvrir notre offre de formations</h2>
                        <img className={classes.imgOffre} src={'/static/icons/offre-formations.png'} alt="offre formations" />
                    </div>
                    <div className={classes.blocBleuFonce}>
                        <div className={classes.sousDiv}>
                            <h2 className={classes.titre}>S’inscrire à la prochaine session de de webinaires de</h2>
                            <img className={classes.img} src={'/static/icons/mobin-webinars.png'} alt="mobin webinar" />
                        </div>
                        <img className={classes.img} src={'/static/icons/webinars-home.png'} alt="webinars home" />
                    </div>
                </Grid>
            </Box>
        </Container>
    );
};

export default BlocsAccueil;
