import { blueGrey, grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(0, 2, 0, 2),
  },

  title: {
    fontWeight: "bold",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  author: { marginRight: theme.spacing(2) },

  titleLink: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },

  authorLink: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: grey[900],
    },
  },
}));

export default useStyles;
