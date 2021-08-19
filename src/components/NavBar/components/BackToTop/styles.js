import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(12),
    right: theme.spacing(2),
  },
  button: {
    borderRadius: '50%',
    fontSize: '2.5rem',
    padding: 4,
    color: theme.palette.text.dark,
    backgroundColor: theme.palette.background.cream,
    cursor: 'pointer',
    '&:hover' : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.text.linkHover,
    },  
  },
}));
  