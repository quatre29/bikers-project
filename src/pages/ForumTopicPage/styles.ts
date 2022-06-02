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
  linkAddressContainer: {
    display: "flex",
    alignItems: "center",
  },

  linkSeparator: {
    margin: theme.spacing(0, 1, 0, 1),
  },

  forumText: {
    fontWeight: "bold",
  },
  textLink: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  forumTextDisabled: {
    fontWeight: "bold",
    color: grey[500],
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
    width: "100%",
  },

  textEditorContainer: {
    // width: "100%",
    // border: "1px solid blue",
    marginTop: theme.spacing(2),
  },
  replyHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editMenuContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: "100%",
  },

  titleDivider: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
