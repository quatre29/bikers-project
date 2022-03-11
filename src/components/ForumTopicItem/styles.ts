import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginLeft: theme.spacing(1),
  },
  usernameText: {
    fontWeight: "bold",
  },
}));

export default useStyles;
