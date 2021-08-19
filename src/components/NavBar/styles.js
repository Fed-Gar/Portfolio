import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.cream,
  },
  toolBar: {
    width: '50%',
    justifyContent: 'space-between',
  },
  link: {
    color: theme.palette.text.dark,
    cursor: 'pointer',
    '&:hover' : {
      color: theme.palette.text.linkHover,
    },
  },
  menu: {
    position: 'absolute',
    right: 15,
  },
}));