import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
	root: {
		height: 400,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
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