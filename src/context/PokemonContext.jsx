import React, { createContext, useState, useContext, useEffect } from 'react';

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonStat, setPokemonStat] = useState(null);
  const [loadingNames, setLoadingNames] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de Pokémon');
        }
        const data = await response.json();
        // console.log (data + 'awa')
        const names = data.results.map((pokemon) => pokemon.name);
        // console.log (names +'uwu')
        setPokemonList(names);
        setLoadingNames(false);
      } catch (error) {
        console.error('Error al obtener la lista de nombres de Pokémon:', error);
        setLoadingNames(false);
        setError(true);
      }
    };

    fetchPokemonList();
  }, []);

const getPokemonInfo = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener la información del Pokémon');
      }
      const data = await response.json();
      setPokemonInfo(data);
      return data;
    } catch (error) {
      setError(true); 
      throw error;
    }
  };

const getPokemonStat = async (pokemonName) => {
  try{
    const response = await fetch (`https://pokeapi.co/api/v2/stat/${pokemonName}`);
    if (!response.ok) {
      throw new Error('No se pudo obtener la información del Pokémon');
    }
    const data = await response.json();
    setPokemonStat(data);
    return data;
  } catch (error) {
    setError(true); 
    throw error;
  }
}

  return (
    <PokemonContext.Provider value={{ getPokemonInfo, pokemonInfo, pokemonList, loadingNames, pokemonStat, getPokemonStat, error, setError }}>
      {children}
    </PokemonContext.Provider>
  );
};

export function usePokeAPI() {
  return useContext(PokemonContext);
}
