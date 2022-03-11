import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    flexGrow: "0",
    height: "100%",
    background: theme.palette.background.default,
  },
  linkItem: {
    cursor: "pointer",
  },
}));

export default useStyles;
