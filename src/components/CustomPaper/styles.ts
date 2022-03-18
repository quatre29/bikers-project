import { makeStyles } from "@mui/styles";
import { deepPurple } from "@mui/material/colors";

const useStyles = makeStyles((theme: any) => ({
  paperContainer: {
    // padding: theme.spacing(4, 10, 4, 10),
    padding: (props: { noPadding?: boolean }) =>
      !props.noPadding && theme.spacing(4, 4, 4, 4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
    // backgroundColor: theme.palette.mode === "light" ? deepPurple[100] : "none",
    // marginTop: theme.spacing(4),
  },
}));

export default useStyles;
