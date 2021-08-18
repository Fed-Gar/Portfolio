import React from 'react';

import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';

import { useStyles } from './styles';

export default function Footer() {
  const classes = useStyles();

  return (
    <Box> 
      <Grid>
        <div className={ classes.root }>
          <Typography variant='h3' className={ classes.text }>
            @2021 - Creado por García Federico 👋
          </Typography>
        </div>
      </Grid>
    </Box> 
  );
};