import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: 100,
		display:' flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 150,
		backgroundColor: theme.palette.background.cream,
  },
  text: {
		fontSize: 15,
		color: theme.palette.text.dark,
  },
}));