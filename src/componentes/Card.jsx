import React from 'react';
import PokeInfo from './PokeInfo';

const Card = ({ pokeData, loading }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="container">
            <div className="left-content">
              {pokeData.map((pokemon) => (
                <div key={pokemon.id} className="card">
                  <h2>{pokemon.id}</h2>
                  <h2>{pokemon.name}</h2>
                  <img src={pokemon.sprites.front_default} alt="" />
                </div>
              ))}
            </div>

            <div className="right-content">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt=""
              />
              <div>
                <p>NOME: Bulbasaur</p>
                <p>TIPO: planta</p>
                <p>
                  GABILIDADE: <span>overgrow</span> <span>chlorophyll</span>
                </p>
                <p>ALTURA: 7</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
