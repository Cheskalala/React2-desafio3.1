import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePokeAPI } from '../context/PokemonContext';
import Stat from '../components/Stat';

const PokemonInfo = () => {
  const { pokemonId } = useParams(); // Obtener el nombre del Pokémon de los parámetros de la URL
  const { pokemonInfo, loadingNames, error } = usePokeAPI();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [pokemonInfo]); // Actualizar cuando cambie pokemonInfo

  if (loadingNames) {
    return <div>Cargando información del Pokémon...</div>;
  }

  if (error) {
    return <div>Error al cargar la información del Pokémon.</div>;
  }

  if (!pokemonInfo) {
    return <div>No se encontró información del Pokémon.</div>;
  }

  return (
    <div className="pokemon-info">
      <h2 className="pokemon-name">{pokemonId}</h2>
      <img className="pokemon-img" src={pokemonInfo.sprites?.front_default} alt={pokemonId} />
      <h3>{pokemonInfo.types[0].type.name}</h3>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <ul className="pokemon-stats">
          {pokemonInfo.stats.map((stat, index) => (
            <Stat key={index} item={stat} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonInfo;
