import { grey, indigo } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    // display: "flex",
    // flexDirection: "row",
    // width: "100%",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0, 2, 0, 2),
    backgroundColor: theme.palette.background.paper,
  },
  details: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    marginLeft: theme.spacing(4),
  },
  userLink: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: indigo["A400"],
    },
  },
  usernameText: {
    color: grey[600],
    marginLeft: theme.spacing(4),
  },
}));

export default useStyles;
