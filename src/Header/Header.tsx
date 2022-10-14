import React from 'react';
import { Typography } from '@mui/material';

import './Header.css';

const Header = () => {
	return (
		<div className='pokemons-header-box'>
			<Typography variant='h5' gutterBottom>
				Pokemons
			</Typography>
		</div>
	);
};

export default Header;
