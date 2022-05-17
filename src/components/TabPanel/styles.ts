import { blue, blueGrey, grey, indigo } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  activeTabText: {
    fontWeight: "bold",
    color: blueGrey[900],
  },

  tabLabel: {
    padding: theme.spacing(2),
    borderRadius: "5px",
    color: blueGrey[900],
    "&:hover": {
      cursor: "pointer",
      backgroundColor: indigo[50],
      color: indigo["A400"],
    },
  },

  tabLabelActive: {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      cursor: "pointer",
      // backgroundColor: grey[300],
      color: blue[700],
    },
    // backgroundColor: grey[50],
    backgroundColor: theme.palette.background.paper,
    // border: "1px solid #e2e2e2",
  },

  tabContentContainer: {},
}));

export default useStyles;
