import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    minWidth: 320,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    fontFamily: "Roboto",
    fontSize: 14,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));