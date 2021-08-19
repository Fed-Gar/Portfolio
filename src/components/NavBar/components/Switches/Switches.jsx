import React, { useState } from 'react';

import { 
	Grid,
	Typography,
} from '@material-ui/core';

import Brightness6Icon from '@material-ui/icons/Brightness6'; 
import Brightness3Icon from '@material-ui/icons/Brightness3'; 

import { useStyles } from './styles';
import { AntSwitch } from './styles';

export default function Switches() {
  const classes = useStyles();
  
  const [state, setState] = useState({
    checked: false,
  });

  const handleChange = event => {
    setState({checked: event.target.checked });
  };

  return (
    <Typography component="div">
      <Grid component="label" className={ classes.root }>
        <Grid> <Brightness3Icon/> </Grid>
        <Grid>
          <AntSwitch checked={ state.checked } onChange={ handleChange } name="checked" />
        </Grid>
        <Grid> <Brightness6Icon/> </Grid>
      </Grid>
    </Typography>
  );
};