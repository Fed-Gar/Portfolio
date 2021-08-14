import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
  title: {
    marginLeft: '4rem',
		marginBottom: '1rem',
  },
  text: {
		width: 1000,
		height: 'auto',
		position: 'relative',
		marginLeft: 'auto',
		marginRight: 'auto',
		fontSize: '1.6rem',
  },
}));