import React from 'react';

import {
  Box,
  Grid,
} from '@material-ui/core';

import Logo from './components/Logo/Logo';

import { useStyles } from './styles';

export default function Skills() {
  const classes = useStyles();

  return (
    <Box className={ classes.root }> 
      <Grid>
        <Logo />
      </Grid>
    </Box> 
  );
};