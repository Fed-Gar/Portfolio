import React from 'react';

import {
  Box,
  Grid,
	Typography
} from '@material-ui/core';

import { useStyles } from './styles';

export default function Project({ img, title, description, alt, tecno }) {
  const classes = useStyles();

  return (
    <Box> 
      <Grid className={ classes.root }>
        <Typography variant='div' className={ classes.info }>
          <Typography variant='h3' className={ classes.title }>	
            { title }
          </Typography>
          <div variant='div' className={ classes.text }>
            { description }
          </div>
          <Typography variant='h6' className={ classes.sub }>
            Tecnologías usadas: 
          </Typography>
          <div variant='div' className={ classes.text }>
            { tecno }
          </div>
        </Typography>
        <Typography variant='div' className={ classes.images }>
          <img src={ img } alt={ alt } style={{ width:'600px', borderRadius: '.5em' }}/>
        </Typography>
      </Grid>
    </Box> 
  );
};