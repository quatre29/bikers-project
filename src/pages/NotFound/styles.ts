import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "center",
    },
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
  },
}));

export default useStyles;
