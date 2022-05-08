import { makeStyles } from "@mui/styles";
import { blueGrey, indigo, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: blueGrey[700],
  },
  bg: {
    backgroundColor: blueGrey[50],
    padding: theme.spacing(8),
    marginTop: theme.spacing(15),
  },
  icon: {
    color: blueGrey[500],
    fontSize: 30,
  },
  iconSocialLink: {
    cursor: "pointer",
    color: blueGrey[500],
    fontSize: 30,
    "&:hover": {
      color: blueGrey[700],
    },
  },
}));

export default useStyles;
