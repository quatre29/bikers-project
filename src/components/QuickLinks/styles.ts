import { makeStyles } from "@mui/styles";
import { blueGrey, indigo, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: any) => ({
  root: {
    color: blueGrey[900],
  },
  linkItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    padding: theme.spacing(1, 1, 1, 4),
    // paddingLeft: theme.spacing(4),
    marginRight: theme.spacing(2),
    textDecoration: "none",
    color: blueGrey[900],
    "&:hover": {
      cursor: "pointer",
      color: indigo["A400"],
      backgroundColor: indigo[50],
      borderRadius: theme.shape.borderRadius,
      //   textDecoration: "underline",
    },
  },
  icon: {
    // fontSize: '22px',
    padding: theme.spacing(0, 3, 0, 0),
    // marginBottom: theme.spacing(1),
    width: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  itemsContainer: {
    marginTop: theme.spacing(2),
  },
  text: {
    "&:hover": {
      // textDecoration: "underline",
    },
  },
}));

export default useStyles;
