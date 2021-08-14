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
		<Box className={ classes.root }>
			<Grid>
				<Typography variant='h3' className={ classes.title }>
					Quíen soy?
				</Typography>
				<Grid>
					<Typography className={ classes.text }>
						Soy un Desarrollador Web Full-Stack enfocado en el Fron-End.
						Disfruto del trabajo en equipo y poder crecer gracias al mismo aprendiendo cosas
						nuevas en el día a día.
						Alcualmente me encuentro en la búsqueda de un lugar en donde pueda seguir desarrollandome
						en un ambiente de trabajo colaborativo. 
					</Typography>
				</Grid>
			</Grid>
		</Box>
  );
};