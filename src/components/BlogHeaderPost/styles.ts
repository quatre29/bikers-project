import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    // background: "center",
    // backgroundImage:
    //   "url(https://images.unsplash.com/photo-1646422462528-0a48ac201c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
    height: theme.spacing(40),
    width: "100%",
    backgroundSize: "auto",
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(30),
    },
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // background: (props: { image: string }) =>
    //   `linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),center url(${props.image})`,
    textAlign: "center",
  },
  titleLink: {
    textDecoration: "none",
    "&:hover": {
      color: "whitesmoke",
      textDecoration: "underline",
    },
  },
}));

export default useStyles;
