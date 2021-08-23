import React from 'react';

import { 
	Box, 
	Grid, 
	Typography, 
} from '@material-ui/core';

import { useStyles } from './styles';

export default function Presentation() {
  const classes = useStyles();

	return (
		<Box id='quién soy?'>
			<Grid>
				<Typography variant='h3' className={ classes.title }>
					Quíen soy?
				</Typography>
				<Grid className={ classes.paragraph }>
					<Typography className={ classes.text }>
						Soy un Desarrollador Web Full-Stack enfocado en el Fron-End.
					</Typography>
					<Typography className={ classes.text }>
						Disfruto del trabajo en equipo y poder crecer gracias al mismo aprendiendo cosas
						nuevas en el día a día.
					</Typography>
					<Typography className={ classes.text }>
						Alcualmente me encuentro en la búsqueda de un lugar en donde pueda seguir desarrollandome
						en un ambiente de trabajo colaborativo. 
					</Typography>
				</Grid>
			</Grid>
		</Box>
  );
};