import { useState, useContext } from 'react';
import {
  Container, Box, Grid, Card, Paper, Divider, TextField, Button, LinearProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Layout, Title, Text } from '../../components';
import { login } from '../../lib/auth';
import AppContext from '../../context/AppContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '2em',
    border: `2px solid ${theme.palette.grey.main}`,
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    minWidth: '100%',
  },
  textFieldBox: {
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

const Login = ({ }) => {
  const classes = useStyles();
  const { setUser } = useContext(AppContext);
  const [variables, setVariables] = useState({
    identifier: '',
    password: '',
  });
  const [loader, setLoader] = useState(false);

  const [error, setError] = useState(null);
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const onSubmit = async () => {
    setLoader(true);
    const { identifier, password } = variables;
    setError(null);
    if (!validateEmail(identifier)) {
      setLoader(false);
      setError('Merci de saisir une adresse email.');
      return;
    }
    if (password.length < 1) {
      setLoader(false);
      setError('Un mot de passe doit être saisi.');
      return;
    }

    try {
      const response = await login(variables);
      const { user } = response.data;
      setUser(user);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
      setError('Connexion impossible avec ce couple email/mot de passe. Veuillez réessayer.');
    }

    // submit credentials
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
                <Box mb={4}>
                  <Text size="h5" letterspacing="2px" bold>
                    <span style={{ color: '#b1b3b4' }}>Connexion</span>
                    {' '}
                    <span style={{ color: '#2699b0' }}>adhérent</span>
                  </Text>
                </Box>
                <Divider color="#b1b3b4" />
                <Box
                  mt={3}
                  mb={2}
                  className={classes.textFieldBox}
                >
                  <TextField
                    value={variables.identifier}
                    onChange={(event) => setVariables({ ...variables, identifier: event.target.value })}
                    label="Email"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </Box>
                <Box
                  mt={3}
                  mb={2}
                  className={classes.textFieldBox}
                >
                  <TextField
                    type="password"
                    value={variables.password}
                    onChange={(event) => setVariables({ ...variables, password: event.target.value })}
                    label="Mot de passe"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
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
                <Box
                  mt={3}
                  mb={2}
                  className={classes.textFieldBox}
                >
                  <Button className={classes.btn} variant="outlined" onClick={() => onSubmit()}>
                    Valider
                    {/* <ArrowRight /> */}
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

export default Login;
