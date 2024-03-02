import React, { useState } from 'react';
import { usePokeAPI } from '../context/PokemonContext';
import { useNavigate } from 'react-router-dom'; 

const Buscador = () => {
  const { pokemonList, loadingNames, getPokemonInfo } = usePokeAPI();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSelectChange = async (e) => {
    const selectedPokemon = e.target.value;
    setLoading(true);

    try {
      const pokemonData = await getPokemonInfo(selectedPokemon);
      // console.log(pokemonData);
      setLoading(false);
      
      navigate(`/pokemon/${selectedPokemon}`);
    } catch (error) {
      console.error('Error al obtener la información del Pokémon', error);
      setLoading(false);
    }
  };

  return (
    <div className="pokemon-dropdown-container">
      <label htmlFor="pokemonSelect">Selecciona un Pokémon:</label>
      <select
        id="pokemonSelect"
        className="pokemon-dropdown"
        onChange={handleSelectChange}
        disabled={loadingNames || loading}
      >
        {loadingNames ? (
          <option value="" disabled>
            Cargando nombres...
          </option>
        ) : (
          <>
            <option value="" disabled>
              Selecciona un Pokémon
            </option>
            {pokemonList.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
}

export default Buscador;

