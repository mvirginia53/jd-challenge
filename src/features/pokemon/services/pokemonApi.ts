// Original api documentation
// https://pokeapi.co/docs/v2#pokemon

// ts wrapper
// https://github.com/Gabb-c/pokenode-ts
import { NamedAPIResourceList, PokemonClient } from 'pokenode-ts';

const api = new PokemonClient();

export const getPokemons = async (offset?: number, limit?: number) => {
	try {
		return await api.listPokemons(offset, limit);
	} catch (error) {
		console.error('error fetching Pokemons: ', error);
	}
};

export const getPokemonData = async (url: string) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("error fetching Pokemon's details: ", error);
	}
};
