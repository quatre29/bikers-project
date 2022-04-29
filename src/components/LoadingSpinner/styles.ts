import { makeStyles } from "@mui/styles";
import { indigo } from "@mui/material/colors";

const useStyles = makeStyles((theme: any) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  },
}));

export default useStyles;
