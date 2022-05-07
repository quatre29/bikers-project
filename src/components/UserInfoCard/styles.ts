import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  container: {
    width: "100%",
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    marginTop: theme.spacing(1),
  },
  username: {
    color: "text.secondary",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
  detailField: {
    fontWeight: "bold",
  },
  description: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
