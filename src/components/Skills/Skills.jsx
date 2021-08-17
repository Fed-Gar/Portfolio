import React from 'react';

import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';

import ImagesList from './components/ImageList/ImageList';
 
import { useStyles } from './styles';

export default function Skills() {
  const classes = useStyles();

  return (
    <Box> 
      <Grid className={  classes.root }>
        <Typography variant='h3' className={ classes.title }>
          Skills
        </Typography>
        <ImagesList/>
      </Grid>
    </Box> 
  );
};