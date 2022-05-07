import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles((theme: any) => ({
  backDrop: {
    backdropFilter: "blur(15px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
}));

export default useStyles;
