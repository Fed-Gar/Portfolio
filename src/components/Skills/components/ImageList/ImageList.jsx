import React from 'react';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

import { skills } from '../../data';

import { useStyles } from './styles';

export default function ImagesList() {
  const classes = useStyles();

  return (
    <div className= { classes.root }>
      <ImageList className={ classes.imageList } cols={5.5} rowHeight={235} >
        {
					skills.map(skill => (
						<ImageListItem key={ skill.logo }>
							<img src={ skill.logo } alt={ skill.title } className={ classes.img } />
							<ImageListItemBar
								title={ skill.title }
								classes={{ root: classes.titleBar, title: classes.title, }}
								/>
						</ImageListItem>
					))
				}
      </ImageList>
    </div>
  );
};