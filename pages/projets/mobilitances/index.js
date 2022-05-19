import { Container, Box } from "@material-ui/core";
import { Layout, Title, Text } from "../../../components";
import { mobilitancesText } from "../../../utils";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flexBox: {
    display: "flex",
    alignItems: "center",
  },
}));

const Mobilitances = ({}) => {
  const classes = useStyles();

  return (
    <Layout>
      <Box mt={7}>
        <Container maxWidth="lg">
          <Box mb={3} className={classes.flexBox}>
            <Title
              color="#4ba829"
              content="M[ob]ilitances"
              size="h4"
              bold
              letterspacing="2px"
            />
          </Box>
          <Box mb={2}>
            <Text size="h5" letterspacing="2px" bold>
              <span style={{ color: "#2699b0" }}>
                le livre blanc des mobilités inclusives en Europe
              </span>{" "}
            </Text>
          </Box>
          <Box mt={2} mb={8}>
            {mobilitancesText}
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Mobilitances;
