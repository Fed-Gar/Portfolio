import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    height: 250,
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: theme.palette.background.cream,
  },
  title: {
    position: 'absolute',
    top: 20,
    color: theme.palette.text.dark,
  },
  text: {
    fontSize: '1.5rem',
    fontWeight: 10,
    color: theme.palette.background.default,
    marginBottom: 25,
  },
  icons: {
    width: '50%',
    display: 'flex',
    position: 'absolute',
    bottom: 30,
    justifyContent: 'space-between',
  }, 
  icon: {
    width: '3em',
    height: '3em',
    color: theme.palette.background.default,
    '&:hover' : {
      color: theme.palette.text.linkHover,
    },
  },
}));