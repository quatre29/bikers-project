import { indigo } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  commentTextArea: {
    fontFamily: "inherit",
    // padding: "0.25em 0.5em",
    borderColor: "#ccc",
    // backgroundColor: '#fff',
    lineHeight: "1",
    // backgroundColor: '#eee',
    borderRadius: "5px",
    width: "100%",
    resize: "none",
    // height: '50%',
    // transition: '180ms height ease',
    padding: theme.spacing(2),

    "&:focus": {
      // height: '120%',
      outline: "none",
      border: `2px solid ${indigo["A400"]}`,
    },
  },

  comments: {
    marginTop: theme.spacing(4),
  },
}));

export default useStyles;
