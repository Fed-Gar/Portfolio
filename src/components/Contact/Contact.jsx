import React from 'react';

import {
	Box,
	Typography,
	Link,
} from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { useStyles } from './styles';

export default function Contact() {
	const classes = useStyles();

  return (
		<Box id='contacto'>
			<div className={ classes.root }>
				<Typography variant='h3' className={ classes.title }>
					Contáctame
				</Typography>
				<Typography className={ classes.text }>
					Envíame un mensaje en cualquiera de las siguientes redes para charlar...
				</Typography>
				<div className={ classes.icons }>
					<Link 
						href="https://www.linkedin.com/in/federico-garcia-full-stack-developer/" 
						target='_blanck'
						>
						<LinkedInIcon className={ classes.icon }/>
					</Link>
					<Link 
						href="https://github.com/Fed-Gar" 
						target='_blanck'
						>
						<GitHubIcon className={ classes.icon }/>
					</Link>
					<Link 
						href="https://wa.me/542215929628" 
						target="_blank"
						>
						<WhatsAppIcon className={ classes.icon }/>
					</Link>
				</div>
			</div>
		</Box>
  );
};