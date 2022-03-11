import { indigo } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  textHomeLink: {
    color: theme.palette.text.primary,
    fontWeight: (props: { pathname: string }) =>
      props.pathname === "/" ? "bolder" : "normal",
  },
  textForumLink: {
    color: theme.palette.text.primary,
    fontWeight: (props: { pathname: string }) =>
      props.pathname === "/forum" ? "bolder" : "normal",
  },
  itemLink: {
    height: "100%",
  },
}));

export default useStyles;
