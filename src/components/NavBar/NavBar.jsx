import React from 'react';

import LongMenu from './components/LongMenu/LongMenu';

import {
  AppBar,
  Toolbar,
  Link,
} from '@material-ui/core';

import { list } from './data';

import { useStyles } from './styles';

export default function NavBar() {
  const classes = useStyles();
  
  const preventDefault = event => event.preventDefault();
  
  return (
    <>
      <AppBar className={ classes.appBar }>
        <Toolbar className={ classes.toolBar }>
          {
            list.map(item => {
              return (
                <Link 
                  key={ item.title } 
                  className={ classes.link }
                  href="#" 
                  onClick={ preventDefault }
                >
                  { item.icon }
                </Link>
              );
            })
          }
        </Toolbar>
        <div className={ classes.menu }>
          <LongMenu/>
        </div>
      </AppBar>
      <div className={ classes.offset }></div>
    </>
  );
};