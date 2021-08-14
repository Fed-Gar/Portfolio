import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: 400,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		marginTop: 64,
	},
	first: {
		marginLeft: '4rem',
	},
	second: {
		marginLeft: '5.5rem',
	},
	third: {
		marginLeft: '7rem',
	},
	fourth: {
		marginLeft: '8.5rem',
	},
	h2: {
		fontWeight: 600,
		lineHeight: '-10',
	},
}));