import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    "&:hover": {
      backgroundColor: grey[100],
    },
    paddingBottom: theme.spacing(2),
  },
  text: {
    fontWeight: "bold",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleTextContainer: {
    display: "flex",
    alignItems: "center",
  },
  titleLink: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  divider: {
    // marginTop: theme.spacing(2),
  },
  newTopicLink: {
    textDecoration: "none",
  },
}));

export default useStyles;
