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
      width: 15,
      height: 15, 
      background: theme.palette.background.empty,
    },
    '& ::-webkit-scrollbar-thumb': {
      background: 'rgb(238, 238, 238)',
      borderRadius: 4,
    },
    '& ::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.text.primary,
    },
    '& ::-webkit-scrollbar-thumb:active': {
      backgroundColor: 'rgb(96, 103, 114)',
    },
    '& ::-webkit-scrollbar-track': {
      background: theme.palette.background.empty,
      borderRadius: 4,
    },
    '& ::-webkit-scrollbar-track:hover': {
      background: theme.palette.background.empty,
    },
    '& ::-webkit-scrollbar-track:active': {
      background: '#d4d4d4',
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