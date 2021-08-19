import React from 'react';

import {
  AppBar,
  Toolbar,
} from '@material-ui/core';

import { Link } from "react-scroll";

import LongMenu from './components/LongMenu/LongMenu';
import BackToTop from './components/BackToTop/BackToTop';

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
                  onClick={ preventDefault }
                  activeClass="active"
                  to={ item.title.toLowerCase() }
                  spy={ true }
                  smooth={ true }
                  offset={ -70 }
                  duration={ 700 }
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
      <BackToTop/>
    </>
  );
};