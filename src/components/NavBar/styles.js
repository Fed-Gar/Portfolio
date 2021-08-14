import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  },
  toolBar: {
    width: '50%',
    justifyContent: 'space-between',
  },
  link: {
    color: theme.palette.text.primary,
  },
  offfset: theme.mixins.toolbar,
}));