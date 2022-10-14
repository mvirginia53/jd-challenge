import React from 'react';
import { Pokemon } from '../types';

type ContextState = {
	isModalOpen: boolean;
	setIsModalOpen: (value: boolean) => void;
	currentPokemon: Pokemon | undefined;
	setCurrentPokemon: (value: any) => void;
};

const Context = React.createContext<ContextState>({
	isModalOpen: false,
	setIsModalOpen: () => undefined,
	currentPokemon: {} as Pokemon,
	setCurrentPokemon: () => undefined,
});

export default Context;
