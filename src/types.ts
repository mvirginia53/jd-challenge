export interface Pokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: PokemonAbility[];
	forms: NamedAPIResource[];
	game_indices: VersionGameIndex[];
	held_items: PokemonHeldItem[];
	location_area_encounters: string;
	moves: PokemonMove[];
	sprites: PokemonSprites;
	species: NamedAPIResource;
	stats: PokemonStat[];
	types: PokemonType[];
}
export interface VersionGameIndex {
	game_index: number;
	version: NamedAPIResource;
}
export interface PokemonAbility {
	is_hidden: boolean;
	slot: number;
	ability: NamedAPIResource;
}

export interface PokemonType {
	slot: number;
	type: NamedAPIResource;
}

export interface NamedAPIResource {
	name: string;
	url: string;
}

export interface PokemonMove {
	move: NamedAPIResource;
}
export interface PokemonHeldItem {
	item: NamedAPIResource;
	version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
	version: NamedAPIResource;
	rarity: number;
}
export interface PokemonStat {
	stat: NamedAPIResource;
	effort: number;
	base_stat: number;
}

export interface NamedAPIResourceList {
	count: number;
	next: string | null;
	previous: string | null;
	results: NamedAPIResource[];
}

export interface PokemonSprites {
	front_default: string;
	front_shiny: string;
	front_female: string;
	front_shiny_female: string;
	back_default: string;
	back_shiny: string;
	back_female: string;
	back_shiny_female: string;
}
