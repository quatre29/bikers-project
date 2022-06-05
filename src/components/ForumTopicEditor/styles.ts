import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  forumItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  forumText: {
    fontWeight: "bold",
  },
  forumTextDisabled: {
    fontWeight: "bold",
    color: grey[500],
  },
  forumTextContainer: {
    display: "flex",
    alignItems: "center",
  },
  forumTextIcon: {
    marginRight: theme.spacing(0.5),
  },
  textLink: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  homeLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "row",
  },
  linkSeparator: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

export default useStyles;
