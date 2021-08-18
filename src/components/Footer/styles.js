import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: 150,
		display:' flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 100,
		backgroundColor: theme.palette.background.darkGrey,
  },
  text: {
	fontSize: 15,
  },
}));