import { blueGrey, grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  headerContainer: {},
  postsContainer: {
    marginTop: theme.spacing(4),
  },
  hashtag: {
    color: blueGrey[400],
  },
  tagDescriptionHeader: {
    color: grey[500],
    marginTop: theme.spacing(1),
  },
  postContainer: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
