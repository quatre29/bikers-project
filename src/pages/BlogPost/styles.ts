import { makeStyles } from "@mui/styles";
import { deepPurple } from "@mui/material/colors";

const useStyles = makeStyles((theme: any) => ({
  container: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  banner: {
    width: "100%",
    height: "300px",
    borderRadius: theme.shape.borderRadius,
    objectFit: "cover",
    // border: theme.palette.mode === "light" && `1px solid ${deepPurple[200]}`,
    border:
      theme.palette.mode === "light" ? `1px solid ${deepPurple[200]}` : "none",
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  postContainer: {},
  postDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  postDetailsCreator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
  postText: {
    marginTop: theme.spacing(4),
  },
}));

export default useStyles;
