import React, { useState } from 'react';

import Switches from '../Switches/Switches';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { useStyles } from './styles';

const ITEM_HEIGHT = 20;

export default function LongMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={ handleClick }
      >
        <MoreVertIcon className={ classes.icon }/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={ anchorEl }
        keepMounted
        open={ open }
        onClose={ handleClose }
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            backgroundColor: 'rgb(34, 40, 49)',
          },
        }}
      >
        <MenuItem key={1}  onClick={ handleClose }>
          <Switches />
        </MenuItem>
        <MenuItem key={2}  onClick= { handleClose }>
          <Switches />
        </MenuItem>
      </Menu>
    </div>
  );
};