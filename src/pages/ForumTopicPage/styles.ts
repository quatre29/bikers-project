import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  postPaginationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  },

  //--------------------------------------------
  replyContainer: {
    // padding: theme.spacing(2, 0, 2, 0),
    paddingBottom: theme.spacing(1),
  },
  replyUserContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "top",
    flexDirection: "column",
    borderRight: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(3, 0, 3, 0),
    height: "100%",
  },
  replyDate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    padding: theme.spacing(1),
    backgroundColor: grey[100],
  },
  replyQuote: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    padding: theme.spacing(1),
  },

  replyTextContainer: {
    padding: theme.spacing(3),
  },
  replyTitleContainer: {
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
