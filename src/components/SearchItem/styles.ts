import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles((theme: any) => ({
  searchContainer: {
    position: "relative",
    marginRight: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.05),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.1),
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(6),
    },

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIconWrapper: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: grey[700],
  },
  inputBase: {
    "& .MuiInputBase-input": {
      color: grey[700],

      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "16ch",
        "&:focus": {
          width: "25ch",
        },
      },
    },
  },
}));

export default useStyles;
