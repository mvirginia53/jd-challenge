import { FunctionComponent, useEffect, useState } from 'react';
import { Container, Box } from '@mui/material';
import { getPokemons, getPokemonData } from './features/pokemon/services/pokemonApi';
import Header from './Header';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';
import { Pokemon } from './types';
import Context from './Context/Context';

import './App.css';

export const App: FunctionComponent = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPokemon, setCurrentPokemon] = useState();
	const [pokemonsList, setPokemonsList] = useState<(Pokemon | undefined)[]>();
	useEffect(() => {
		const fetchPokemons = async () => {
			try {
				const data = await getPokemons();
				if (data?.results) {
					const basicPokemonsData = data.results;
					const pokemonsDetailsPromise = basicPokemonsData.map(
						async (pokemon, index: number) => {
							const pokemonId = index + 1;
							return await getPokemonData(pokemonId);
						},
					);
					const pokemonsDetails = await Promise.all(pokemonsDetailsPromise);
					setPokemonsList(pokemonsDetails as Pokemon[]);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchPokemons();
	}, []);

	if (!pokemonsList) return <></>;

	return (
		<Context.Provider value={{ isModalOpen, setIsModalOpen, currentPokemon, setCurrentPokemon }}>
			<Box sx={{ bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100') }}>
				<Header />
				<Container>
					<Box className='pokemon-list-box'>
						{pokemonsList &&
							pokemonsList.map((pokemon, index) => (
								<PokemonCard pokemon={pokemon} key={index} />
							))}
					</Box>
				</Container>
			</Box>
			<PokemonDetails currentPokemon={currentPokemon} />
		</Context.Provider>
	);
};
