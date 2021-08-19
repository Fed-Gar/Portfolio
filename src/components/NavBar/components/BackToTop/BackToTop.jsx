import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import NavigationIcon from '@material-ui/icons/Navigation';
import Zoom from '@material-ui/core/Zoom';

import { useStyles } from './styles';

function ScrollTop() {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if(anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
  };

  return (
    <Zoom in={ trigger }>
      <div onClick={ handleClick } role="presentation" className={classes.root}>
        <NavigationIcon className={ classes.button }/>
      </div>
    </Zoom>
  );
};

export default function BackToTop() {
  return (
    <>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop />
    </>
  );
};