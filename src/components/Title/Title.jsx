import React from 'react';

// import { Zoom } from '@material-ui/core';
import { Transition } from 'react-transition-group';
import { 
  Box, 
  Grid, 
  Typography,
 } from '@material-ui/core';

import { useStyles } from './styles';

export default function Title() {
  const classes = useStyles();

  return (
    <Box>
      <Grid className={ classes.root }>
        <Transition in={false} timeout={500}>
          <Typography variant='h5' className={ [classes.h5, classes.first] }>
            Hola! Me llamo
          </Typography>
        </Transition>
        <Typography variant='h2' className={ [classes.h2, classes.second] }>
          Federico García
        </Typography>
        <Typography variant='h5' className={ [classes.h5, classes.third] }>
          y soy
        </Typography>
        <Typography variant='h2' className={ [classes.h2, classes.fourth] }>
          Full-Stack Developer
        </Typography>
      </Grid>
    </Box>
  );
};

      // <Zoom in={checked}>
        
      // <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
       
