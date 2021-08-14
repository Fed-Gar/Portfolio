import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import MailIcon from '@material-ui/icons/Mail';
import WorkIcon from '@material-ui/icons/Work';

import { useStyles } from './styles';

const list = [
    {
			title: 'Quién soy?',
			icon: <AssignmentIndIcon />,
    },
    {
			title: 'Skills',
			icon: <ComputerOutlinedIcon />,
		},
    {
			title: 'Trabajos',
			icon: <WorkIcon />,
		},
    {
			title: 'Contacto',
			icon: <MailIcon />,
		},
];

export default function NavBar() {
  const classes = useStyles();

  const preventDefault = (event) => event.preventDefault();
  
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
      </AppBar>
      <div className={ classes.offset }></div>
    </>
  );
};