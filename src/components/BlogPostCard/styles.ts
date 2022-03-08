import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    display: "flex",
    // height: theme.spacing(25),
    padding: theme.spacing(2),
    width: "100%",
  },
  body: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
    },
  },
  title: {
    fontWeight: "bold",
    marginTop: theme.spacing(2),
  },
  user: {},
  tags: { marginTop: theme.spacing(2) },
  coms: { marginTop: theme.spacing(2) },
}));

export default useStyles;
