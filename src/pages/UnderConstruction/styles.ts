import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    // [theme.breakpoints.up("sm")]: {
    //   justifyContent: "center",
    // },
    marginTop: theme.spacing(10),
    justifyContent: "flex-start",
    alignItems: "center",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 15, 0, 15),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0, 30, 0, 30),
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(0, 50, 0, 50),
    },
  },
  image: {
    width: "100%",
    maxWidth: "350px",
    height: "auto",
  },
  text: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
}));

export default useStyles;
