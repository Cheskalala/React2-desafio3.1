import React from 'react'

function Stat({ item }) {
  if (!item || !item.stat) {
    return <div>No se encontraron datos de la estadística.</div>;
  }

  return (
    <li className="pokemon-stat">
      <span className="stat-name"><b>{item.stat.name}: </b></span>
      <span>{item.base_stat}</span>
    </li>
  );
}

export default Stat