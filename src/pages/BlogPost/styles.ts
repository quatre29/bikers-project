import { makeStyles } from "@mui/styles";
import { grey, deepPurple, lightGreen } from "@mui/material/colors";

const useStyles = makeStyles((theme: any) => ({
  container: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  banner: {
    width: "100%",
    height: "300px",
    borderRadius: theme.shape.borderRadius,
    objectFit: "cover",
    // border: theme.palette.mode === "light" && `1px solid ${deepPurple[200]}`,
    border: theme.palette.mode === "light" ? `1px solid ${grey[400]}` : "none",
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  postContainer: {},
  postDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 2, 2, 0),
    borderRadius: theme.shape.borderRadius,
  },
  postDetailsCreator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
  tagContainer: {
    display: "flex",
  },
  tagItem: {
    marginRight: theme.spacing(1),
  },
  postText: {
    marginTop: theme.spacing(4),
  },

  //--------------action bar-------------------
  containerActionBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "sticky",
    top: theme.spacing(10),
    // overflowY: "scroll",
    // overflowX: "hidden",
  },
  itemActionBar: {
    marginBottom: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  actionBarBookmarkIconButton: {
    color: grey[700],
    "&:hover": {
      backgroundColor: deepPurple[50],
      color: deepPurple[400],
    },
  },

  bookmarksLength: {
    color: grey[700],
    fontWeight: "bold",
  },

  actionBarPinIconButton: {
    color: grey[700],

    "&:hover": {
      backgroundColor: lightGreen[100],
      color: lightGreen[700],
    },
  },

  moreIcon: {
    color: grey[700],
  },

  //-----------------comments----------------
  commentsContainer: {
    marginTop: theme.spacing(5),
  },

  sectionTitle: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
