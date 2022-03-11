import { indigo } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  iconContainer: {
    // border: "1px solid black",
    // borderRadius: "50%",
    // padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainForumContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
  mainForumText: {
    marginLeft: theme.spacing(2),
  },
  forumTitle: {
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },

  titleLink: {
    textDecoration: "none",
    color: "inherit",
  },
  numericItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lastPostContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  subForumContainer: {
    display: "flex",
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  subForumText: {
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
