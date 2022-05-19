import {
  Container, Box, Grid, makeStyles, Button,
} from '@material-ui/core';
import {
  Layout, Title,
} from '..';
import Section from './Section';

const useStyles = makeStyles((theme) => ({
  subTitles: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  subTitle: {
    marginTop: '8px',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: theme.palette.blue.main,
    color: theme.palette.background.default,
    marginRight: '15px',
    paddingLeft: '3em',
    paddingRight: '3em',
    '&:hover': {
      backgroundColor: theme.palette.golden.main,
    },
  },
  dates: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '8px',
    '& span': {
      fontSize: '24px',
      fontWeight: 'bold',
    },
  },
}));

const OneFormation = ({ training = {} }) => {
  const classes = useStyles();
  const {
    titre = '',
    document_pdf = null,
    HTML = [],
    eligible_opco,
    contacts,
    footer,
    inscriptions,
  } = training;

  return (
    <Layout>
      <Box mt={7}>
        <Container maxWidth="lg">
          <Grid container justify="center">
            <Box mb={3}>
              <Title content={titre} size="h4" uppercase bold letterspacing="2px" />
              <div className={classes.subTitles}>
                {eligible_opco && (
                <div className={classes.subTitle}>
                  Eligible au financement par des OPCO.
                </div>
                )}
                {document_pdf && (
                <div className={classes.subTitle}>
                  <a target="_blank" href={document_pdf?.url} rel="noreferrer">Télécharger le document de présentation</a>
                </div>
                )}
              </div>
            </Box>
          </Grid>
          {inscriptions && (
          <Box mb={4}>
            {inscriptions.map((inscription) => (
              <Box mb={2} className={classes.dates}>
                <span>{inscription.Dates}</span>
                <Button
                  onClick={() => window.open(inscription.Lien, '_blank')}
                  className={classes.button}
                >
                  S&lsquo;inscrire
                </Button>
              </Box>
            ))}
          </Box>
          )}
          <Grid container spacing={2}>
            {HTML && HTML.map((section, index) => (
              <Grid item key={section.Titre} xs={12}>
                <Section
                  title={section.Titre}
                  description={section.Content}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>
          {contacts && (
            <Grid container spacing={2}>
              <Box mt={4} pl={1}>
                <Grid container spacing={2}>
                  {contacts.map(({ contact }, index) => (
                    <Grid item key={contact.Nom}>
                      <Section
                        title={contact.Nom}
                        subTitle={contact.Fonction}
                        index={index}
                      >
                        <div>{contact.Telephone}</div>
                        <a href={`mailto:${contact.Email}`}>{contact.Email}</a>
                      </Section>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          )}
          {footer && (
            <Box mt={4} pl={1}>
              <div>
                Pour retrouver le contenu de notre webinaire :
                <ul>
                  <li>
                    si vous êtes adhérent Mob&lsquo;In :
                    retrouver le replay dans votre accès privé dans la rubrique
                    &ldquo;outils de formation&ldquo;
                  </li>
                  <li>
                    si vous n&lsquo;êtes pas adhérent : n&lsquo;hésitez pas à nous contacter
                  </li>
                </ul>
              </div>
            </Box>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export default OneFormation;
