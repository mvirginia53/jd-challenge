// Original api documentation
// https://pokeapi.co/docs/v2#pokemon

// ts wrapper
// https://github.com/Gabb-c/pokenode-ts
import { NamedAPIResourceList, PokemonClient } from 'pokenode-ts';

const api = new PokemonClient();

export const getPokemons = async () => {
	try {
		return await api.listPokemons();
	} catch (error) {
		console.error('error fetching Pokemons: ', error);
	}
};

export const getPokemonData = async (id: number) => {
	try {
		return await api.getPokemonById(id);
	} catch (error) {
		console.error("error fetching Pokemon's details: ", error);
	}
};
