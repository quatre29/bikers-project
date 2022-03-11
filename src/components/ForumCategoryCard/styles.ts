import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  forumItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  forumText: {
    fontWeight: "bold",
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
  },
}));

export default useStyles;
