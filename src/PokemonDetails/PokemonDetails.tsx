import React, { FunctionComponent, useContext } from 'react';
import { Backdrop, Chip, Box, Modal, Fade, Typography, Tooltip } from '@mui/material';
import { Pokemon } from '../types';
import Context from '../Context/Context';
import { titleCase } from '../handlers';
import { getTypeIcon } from '../handlers/getTypeIcon';

import './PokemonDetails.css';
import '../PokemonCard/PokemonCard.css';

interface PokemonDetailProps {
	currentPokemon: Pokemon | undefined;
}

const PokemonDetails: FunctionComponent<PokemonDetailProps> = ({ currentPokemon }) => {
	const { isModalOpen, setIsModalOpen, setCurrentPokemon } = useContext(Context);
	const handleClose = () => {
		const clearPokemon = undefined;
		setCurrentPokemon(clearPokemon);
		setIsModalOpen(!isModalOpen);
	};

	if (!currentPokemon) return <></>;
	return (
		<div>
			<Modal
				className='pokemon-detail-mmodal'
				aria-labelledby='pokemon details'
				open={isModalOpen}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{ timeout: 500 }}>
				<Fade in={isModalOpen}>
					<Box className='pokemon-details-box'>
						<Box display='flex' justifyContent='space-between'>
							<Chip
								label={`#${currentPokemon?.id}`}
								size='small'
								className='pokemon-card-chip'
							/>
						</Box>

						<Box
							component='img'
							sx={{ width: 150 }}
							src={currentPokemon?.sprites.front_default}
							alt={currentPokemon?.name}
						/>
						<Typography gutterBottom variant='h6'>
							{titleCase(currentPokemon?.name)}
						</Typography>

						<Typography variant='body2' className='pokemon-detail-text'>
							Height: {currentPokemon?.height}
						</Typography>
						<Typography variant='body2' className='pokemon-detail-text'>
							Weight: {currentPokemon?.weight}
						</Typography>

						<Typography variant='body2' className='pokemon-detail-text'>
							<Box display='flex' alignItems='center' justifyContent='center'>
								<Typography variant='body2' className='pokemon-detail-text types'>
									types:
								</Typography>

								{currentPokemon?.types.map((type) => (
									<div>
										<Tooltip title={type.type.name} placement='top-end'>
											<Box
												component='img'
												sx={{ width: 30, marginRight: '10px' }}
												src={getTypeIcon(type.type.name)}
												alt={type.type.name}
											/>
										</Tooltip>
									</div>
								))}
							</Box>
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default PokemonDetails;
