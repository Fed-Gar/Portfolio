import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  root: {
		width: '85%',
		height: 255,
		marginLeft: 'auto',
		marginRight: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.background.default,
    '& ::-webkit-scrollbar': {
      width: 12,
      height: 12, 
    },
    '& ::-webkit-scrollbar-thumb': {
      background: theme.palette.background.primary,
      borderRadius: 4,
    },
    '& ::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.background.cream,
    },
    '& ::-webkit-scrollbar-thumb:active': {
      background: theme.palette.background.cream,
    },
    '& ::-webkit-scrollbar-track': {
      background: 'transparent',
      borderRadius: 4,
    },
    '& ::-webkit-scrollbar-track:hover': {
      background: 'transparent',
    },
    '& ::-webkit-scrollbar-track:active': {
      background: 'transparent',
    },
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.text.primary,
  },
	img: {
		width: 200,
		height: 200,
	},
	titleBar: {
		width: 200,
		backgroundColor: 'transparent',
		marginTop: 10,
	},
}));