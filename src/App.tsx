import { FunctionComponent, useEffect, useState } from 'react';
import { Container, Box } from '@mui/material';
import { getPokemons, getPokemonData } from './features/pokemon/services/pokemonApi';
import Header from './Header';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';
import { Pokemon } from './types';
import Context from './Context/Context';

import './App.css';
import AppPagination from './AppPagination';

export const App: FunctionComponent = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPokemon, setCurrentPokemon] = useState();
	const [pokemonsList, setPokemonsList] = useState<(Pokemon | undefined)[]>();
	const [currentPage, setCurrentPage] = useState(1);
	const [total, setTotal] = useState<Number>();
	const fetchPokemons = async () => {
		try {
			const data = await getPokemons(24 * (currentPage - 1), 24);
			if (data?.count) setTotal(Math.ceil(data.count / 24));
			if (data?.results) {
				const basicPokemonsData = data.results;

				const pokemonsDetailsPromise = basicPokemonsData.map(
					async (pokemon) => await getPokemonData(pokemon.url),
				);
				const pokemonsDetails = await Promise.all(pokemonsDetailsPromise);
				setPokemonsList(pokemonsDetails as Pokemon[]);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchPokemons();
	}, []);

	useEffect(() => {
		fetchPokemons();
	}, [currentPage]);

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
			<AppPagination currentPage={currentPage} total={total} setCurrentPage={setCurrentPage} />
			<PokemonDetails currentPokemon={currentPokemon} />
		</Context.Provider>
	);
};
