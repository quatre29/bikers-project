import { makeStyles } from "@mui/styles";
import { indigo } from "@mui/material/colors";

const useStyles = makeStyles((theme: any) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  linkContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(3),
  },

  link: {
    textDecoration: "none",
    color: indigo[500],

    "&:visited": {
      color: indigo[500],
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default useStyles;
