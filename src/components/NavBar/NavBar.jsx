import React, { useState } from 'react';

import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import MailIcon from '@material-ui/icons/Mail';
import WorkIcon from '@material-ui/icons/Work';

import { useStyles } from './styles';
import { useTheme } from '@material-ui/core/styles';

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
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuOpenOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={ { paper: classes.drawerPaper, } }
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {list.map((item) => (
            <ListItem button key={ item.title }>
              <ListItemIcon> { item.icon } </ListItemIcon>
              <ListItemText primary={ item.title }/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};