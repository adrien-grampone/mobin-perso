import { useState, useCallback, useContext } from 'react';
import {
  Container, Box, Grid, LinearProgress, Button, Paper, Divider, TextField, FormControl, Select, InputLabel, MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';
import Cookies from 'cookies';
import { Layout, Text } from '../../../components';
import { getThemes, getContactEmails, isTokenValid } from '../../../utils';
import { postDocumentAdherent } from '../../../lib/ressources';
import AppContext from '../../../context/AppContext';
import { sendResourceNotif } from '../../../src/services/sendEmail';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '2em',
    border: `2px solid ${theme.palette.grey.main}`,
  },
  paper2: {
    padding: '2em',
    border: `0.5px solid ${theme.palette.blue.main}`,
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    minWidth: '100%',
  },
  textFieldBox: {
    // textAlign: 'center'
  },
  btnBox: {
    textAlign: 'center',
  },
  btn: {
    paddingLeft: '2em',
    paddingRight: '2em',
    color: theme.palette.blue.main,
    fontWeight: 'bold',
    letterSpacing: '2px',
    borderColor: theme.palette.grey.main,
    borderRadius: '1.5em',
    '&:hover': {
      backgroundColor: theme.palette.golden.main,
      color: '#fff',
      borderColor: theme.palette.golden.main,
    },
  },
}));

const PrivateShareDocument = ({ themes = [], contactEmails = [] }) => {
  const classes = useStyles();
  const { user } = useContext(AppContext);
  const initialState = {
    titre: '',
    thematique: {},
    fichier: null,
  };
  const [variables, setVariables] = useState(initialState);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setVariables({ ...variables, fichier: acceptedFiles[0] });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.pdf',
  });

  const onSubmit = async () => {
    setLoader(true);
    const { titre, thematique, fichier } = variables;
    setError(null);

    if (!fichier) {
      setLoader(false);
      setError('Merci de télécharger un document pdf.');
      return;
    }

    if (titre.length < 1) {
      setLoader(false);
      setError('Un titre de document doit être saisi.');
      return;
    }

    if (Object.keys(thematique).length < 1) {
      setLoader(false);
      setError('Merci de choisir une thématique.');
      return;
    }

    try {
      // 1. Create Form Data with Document
      const formData = new FormData();
      formData.append('files.fichier', fichier, fichier.name);
      const data = {};
      data.titre = titre;
      data.thematique = thematique.id;
      formData.append('data', JSON.stringify(data));

      // 2. Post Form Data
      const response = await postDocumentAdherent(formData);

      // 3. Send Email Notif
      const emails = contactEmails.map((e) => ({ email: e.email }));
      const variables = {
        message: `L'utilisateur ${user.email} a déposé un nouveau document dans l'espace adhérents, section ${response?.data?.thematique?.titre || 'inconnue'}.`,
        emails,
        senderEmail: user.email,
      };
      const res = await sendResourceNotif(variables);
      // 4. Set Loader to false and success and variable to initial state
      setVariables(initialState);
      setSuccess('Votre document a bien été envoyé !');
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
      setError('Impossible de télécharger le document. Veuillez réessayer.');
    }
  };

  if (loader) {
    return (
      <LinearProgress color="primary" />
    );
  }

  return (
    <Layout>
      <Box mt={7}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={10} md={8}>
              <Paper className={classes.paper}>
                <Box mb={2}>
                  <Text size="h5" letterspacing="2px" bold>
                    <span style={{ color: '#e95e2e' }}>Proposer une ressource</span>
                    {' '}
                    <span style={{ color: '#2699b0' }}>au réseau</span>
                  </Text>
                </Box>
                <Box mb={4}>
                  <Text size="body2" bold color="#4ba829">
                    Vous avez un nouveau projet, vous venez de signer une nouvelle convention, vous avez un article dans la presse, vous avez recruté un nouvel adhérent, toutes les actualités sont les bienvenues ! N'hésitez pas à déposer un fichier en format PDF pour que Mob'In en soit informé et puisse diffuser cette actualité aux autres membres du réseau. Merci d'avance !
                  </Text>
                </Box>
                <Divider color="#b1b3b4" />
                <Box
                  mt={3}
                  mb={2}
                  className={classes.textFieldBox}
                >
                  <Box mt={2} mb={2}>
                    <Text bold size="body2">
                      Télécharger un fichier
                                        </Text>
                  </Box>
                  <Box mb={3}>
                    <Paper
                      variant="outlined"
                      className={classes.paper2}
                    >
                      <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          {
                                                    isDragActive
                                                      ? <Text>Téléchargez votre fichier PDF ici</Text>
                                                      : <Text>Téléchargez votre fichier PDF ici</Text>
                                                }
                          {
                                                    variables.fichier && (
                                                    <Text bold>{variables?.fichier?.name}</Text>
                                                    )
                                                }
                        </div>
                    </Paper>
                  </Box>
                  <Box mb={2}>
                    <TextField
                      value={variables.titre}
                      onChange={(event) => setVariables({ ...variables, titre: event.target.value })}
                      label="Titre"
                      variant="outlined"
                      size="small"
                      className={classes.textField}
                    />
                  </Box>
                  <Box mb={3}>
                    <FormControl
                      className={classes.textField}
                    >
                      <InputLabel>Thème</InputLabel>
                      <Select
                          value={variables.thematique || ''}
                          onChange={(event) => setVariables({ ...variables, thematique: event.target.value })}
                        >
                          {
                                                    themes.map((t, i) => (
                                                      <MenuItem
                                                        key={i}
                                                        value={t}
                                                      >
                                                        {t.titre}
                                                      </MenuItem>
                                                    ))
                                                }
                        </Select>
                    </FormControl>
                  </Box>

                </Box>
                {
                                    error && (
                                    <Box mt={3} mb={2}>
                                      <Text size="body1" bold color="#e5352c">
                                        {error}
                                      </Text>
                                    </Box>
                                    )
                                }
                {
                                    success && (
                                    <Box mt={3} mb={2}>
                                      <Text size="body1" bold color="#4ba829">
                                        {success}
                                      </Text>
                                    </Box>
                                    )
                                }
                <Box
                  mt={3}
                  mb={2}
                  className={classes.btnBox}
                >
                  <Button className={classes.btn} variant="outlined" onClick={() => onSubmit()}>
                    Valider
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const req = ctx.req ? ctx.req : null;
  if (req) {
    const cookies = new Cookies(ctx.req, ctx.res);
    const token = cookies.get('token');
    if (token) {
      const isTokValid = isTokenValid(token);
      if (isTokValid) {
        const res = await fetch(getThemes);
        const themes = await res.json();
        const res2 = await fetch(getContactEmails);
        const emails = await res2.json();
        return {
          props: { themes, contactEmails: emails },
        };
      }
      ctx.res.writeHead(302, { Location: '/' });
      ctx.res.end();
      return { props: {} };
    }
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return { props: {} };
  }
};

export default PrivateShareDocument;
