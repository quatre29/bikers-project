import { blueGrey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
  },
  userDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  options: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  username: {
    marginRight: theme.spacing(1),
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    "&:hover": {
      color: blueGrey[700],
    },
  },
  userLink: {
    textDecoration: "none",
  },
  date: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary,
  },

  commentContainer: {
    width: "100%",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "5px",
    padding: theme.spacing(1),
  },
  edited: {
    color: theme.palette.text.secondary,
  },
  editedContainer: {
    marginTop: theme.spacing(1),
  },

  commentEditorContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export default useStyles;
