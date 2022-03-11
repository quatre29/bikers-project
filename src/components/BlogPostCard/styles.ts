import { blueGrey } from "@mui/material/colors";
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
  user: {
    fontWeight: "bold",
    color: blueGrey[700],
  },
  tags: { marginTop: theme.spacing(2), color: theme.palette.text.secondary },
  coms: { marginTop: theme.spacing(2) },
  titleLink: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
