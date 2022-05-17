import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles((theme: any) => ({
  container: {
    display: "flex",
    padding: theme.spacing(0.5),
    border: `1px solid white`,
    borderRadius: theme.shape.borderRadius,

    "&:hover": {
      border: `1px solid ${grey[500]}`,
      backgroundColor: grey[300],
      transition: "all 0.2s ease-in-out",
      cursor: "pointer",
    },
  },

  tagLink: {
    textDecoration: "none",
    color: "inherit",
  },

  tagText: {
    "&:hover": {
      color: grey[900],
    },
  },
}));

export default useStyles;
