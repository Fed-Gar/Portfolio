import React from 'react';

import {
  Box,
  Grid,
} from '@material-ui/core';

import { useStyles } from './styles';

export default function Footer() {
  const classes = useStyles();

  return (
    <Box> 
      <Grid>
        <div className={ classes.root }></div>
      </Grid>
    </Box> 
  );
};