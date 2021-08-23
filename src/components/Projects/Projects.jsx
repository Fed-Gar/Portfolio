import React from 'react';

import TODO from '../../assets/todo-app.gif'; 
import FOOD from '../../assets/food.gif'; 

import {
  Box,
  Grid,
	Typography
} from '@material-ui/core';

import Project from './components/Project/Project';

import { useStyles } from './styles';

export default function Projects() {
  const classes = useStyles();

  return (
    <Box id='trabajos'> 
      <Grid className={ classes.root }>
				<Typography variant='h3' className={ classes.title }>	
          Proyectos
        </Typography>
        <Project 
          title={ 'To Do App' } 
          description={ `To Do App es una aplicación en donde podrás crear una lista de tareas con su respectivo título, descripción, lugar y fecha. También podrás modificar su status(To Do, In progress, Done) o eliminar una tarea. Las mismas se muestran en el home agrupadas según su status.` }
          tecno={ 'HTML, JavaScript, React, Redux, SASS.' }
          alt={ 'Imagen animada de proyecto To Do App' }
          img={ TODO  }
          />
        <Project 
          title={ 'Recetas' } 
          description={ 'SPA con temática de recetas de cocina, en la cual los usuarios pueden buscar recetas, realizar filtrados, ordenamientos y crear su propia receta. La información se toma de una API externa en conjunto con un DB propia.' }
          tecno={ 'HTML, JavaScript, React, Redux, Express, PostgreSQL, Sequelize.' }
          alt={ 'Imagen animada de proyecto recetas' }
          img={ FOOD  }
          />
      </Grid>
    </Box> 
  );
};