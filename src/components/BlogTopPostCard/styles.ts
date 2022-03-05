import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    height: theme.spacing(40),
    width: "100%",
    backgroundSize: "auto",
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(30),
    },
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: (props: { image: string }) =>
      `linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),center url(${props.image})`,
    textAlign: "center",
    padding: theme.spacing(2),
  },
}));

export default useStyles;
