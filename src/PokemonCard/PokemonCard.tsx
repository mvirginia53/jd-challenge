import React, { FunctionComponent, useContext } from 'react';
import { Box, Card, CardContent, Typography, CardMedia, Chip } from '@mui/material';
import { Pokemon } from '../types';
import Context from '../Context/Context';
import { titleCase } from '../handlers';

import './PokemonCard.css';
import '../PokemonDetails/PokemonDetails.css';

interface PokemonCardProps {
	pokemon: Pokemon | undefined;
}

const PokemonCard: FunctionComponent<PokemonCardProps> = ({ pokemon }) => {
	const { setIsModalOpen, setCurrentPokemon } = useContext(Context);

	const handlePokemon = (): void => {
		if (pokemon) {
			setCurrentPokemon(pokemon);
			setIsModalOpen(true);
		}
	};

	return (
		<Box
			className='pokemon-card-box'
			sx={{ p: 1, m: 1, borderRadius: 2 }}
			onClick={handlePokemon}>
			<Card className='pokemon-card'>
				<CardMedia
					component='img'
					height='95'
					image={pokemon?.sprites.front_default}
					alt={pokemon?.name}
					sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
				/>
				<CardContent className='pokemon-card-content'>
					<Typography gutterBottom variant='h6' align='center'>
						{titleCase(pokemon?.name)}
					</Typography>
					<Box display='flex' justifyContent='center' alignItems='center'>
						<Chip size='small' label={`#${pokemon?.id}`} className='pokemon-card-chip' />
					</Box>
					<Typography variant='body2' className='pokemon-detail-text'>
						Type: {titleCase(pokemon?.types[0].type.name)}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};
export default PokemonCard;
