import { useState } from 'react';
import {
  Container, Box, Grid, TextField, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Layout, Title, Text } from '../../../components';
import { sendMail } from '../../../src/services/sendEmail';
import { getContactEmails } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
  },
  btn: {
    color: 'black',
    borderColor: theme.palette.orange.main,
    '&:hover': {
      backgroundColor: theme.palette.golden.main,
      color: '#fff',
      borderColor: theme.palette.golden.main,
    },
  },
}));

const Entreprises = ({ contactEmails }) => {
  const classes = useStyles();

  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const [senderEmail, setSenderEmail] = useState('');
  const [errorSenderEmail, setErrorSenderEmail] = useState(null);

  const minCharacters = 10;

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleClick = async () => {
    setErrorMessage(null);
    setErrorSenderEmail(null);
    if (message.length < minCharacters) {
      setErrorMessage(`Votre message doit contenir au moins ${minCharacters} caractères.`);
      return;
    }

    if (!validateEmail(senderEmail)) {
      setErrorSenderEmail('Merci de saisir votre email de contact.');
      return;
    }

    const emails = contactEmails.map((e) => ({ email: e.email }));
    const variables = {
      message,
      emails,
      senderEmail,
    };
    const response = await sendMail(variables);

    if (response) {
      setMessage('');
      setSenderEmail('');
      alert('Message envoyé !');
    } else {
      alert("Erreur dans l'envoi du message. Veuillez recommencer.");
    }
  };

  return (
    <Layout>
      <Box mt={7}>
        <Container maxWidth="lg">
          <Grid container>
            <Box mb={2}>
              <Title content="Vous souhaitez avoir des informations sur l’accompagnement proposé par Mob’In France ou vous avez un projet de mobilité solidaire au sein de votre entreprise ?" size="h5" bold letterspacing="2px" />
            </Box>
            <Box mb={2}>
              <Title content="N’hésitez pas à nous laisser un message par le biais de ce formulaire de contact :" size="body1" color="#000" />
            </Box>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={8} md={3}>
              <Box mt={2} mb={4}>
                <TextField
                  className={classes.textField}
                  label="Saisissez votre email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  variant="outlined"
                />
              </Box>
              <Box mb={4}>
                <Text color="#e5352c">{errorSenderEmail}</Text>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Box mt={2} mb={4}>
                <TextField
                  className={classes.textField}
                  label="Ecrivez-nous ici votre demande"
                  multiline
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  variant="outlined"
                />
              </Box>
              <Box mb={4}>
                <Text color="#e5352c">{errorMessage}</Text>
              </Box>
            </Grid>
            <Grid item xs={12}>

              <Box mb={4}>
                <Button
                  className={classes.btn}
                  variant="outlined"
                  onClick={() => handleClick()}
                >
                  Envoyer
                </Button>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(getContactEmails);
  const emails = await res.json();
  return {
    props: { contactEmails: emails },
  };
};

export default Entreprises;
