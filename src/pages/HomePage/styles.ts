import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
    // backgroundColor: (props: { color: string }) => props.color,
  },
}));

export default useStyles;
