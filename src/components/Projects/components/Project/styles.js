import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: 1000,
		height: 400,
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 50,
		padding: 15,
		backgroundColor: theme.palette.background.cream,
		borderRadius: 10,
		boxShadow: theme.palette.shadow.default,
  },
	title: {
    marginLeft: '4rem',
		marginBottom: '1rem',
		color: theme.palette.text.dark,
  },
	text: {
		width: 300,
		height: 'auto',
		marginBottom: '.5em',
		color: theme.palette.text.dark,
		fontSize: '1.1rem',
	},
	images: {
		width: 600,
		height: 350,
		display: 'flex',
		position: 'absolute',
		top: 30,
		right: 15,
	},
	sub: {
		color: theme.palette.text.dark,
	},
}));