import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    marginTop: theme.spacing(4),
  },

  //------------------Header---------------
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  fullName: {
    marginTop: theme.spacing(2),
    fontWeight: "bold",
  },

  profileOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  userCategory: {
    fontWeight: "bold",
  },

  categoryContainer: {
    marginTop: theme.spacing(4),
  },

  description: {
    marginTop: theme.spacing(3),
    textAlign: "center",
    color: grey[600],
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20),
    },
  },

  //-----------------About-------------------------

  detailsContainer: {
    // marginTop: theme.spacing(2),
  },

  detailsItem: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "row",
    marginTop: theme.spacing(2),
  },

  detailsText: {
    marginLeft: theme.spacing(2),
  },

  detailsIcon: {
    paddingBottom: theme.spacing(0.5),
  },

  //-------------------Badges---------------------------

  badgesContainer: {
    marginTop: theme.spacing(4),
  },
}));

export default useStyles;
