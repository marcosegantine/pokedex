import React from 'react';

const PokeDex = ({ pokedex }) => {
  return (
    <>
      {(!pokedex.name) ? "" : (
        <>
          <div className="pokeInfoContainer right-content">
            <h1 className="tittle-pokedex">{pokedex?.name}</h1>
            <div className="imgContainer">
              <img
                src={pokedex.sprites?.other.dream_world.front_default}
                alt=""
              />
            </div>
            <div className="type-container">
              {pokedex.types?.map((data) => (
                <span className="type-pokemon" key={data.type.name}>
                  {data.type.name}
                </span>
              ))}
            </div>

            <div>
              <p style={{ textTransform: 'capitalize' }}>
                NOME: {pokedex.name}
              </p>

              <p>
                ABILITY:{' '}
                {pokedex.abilities?.map((data) => (
                  <span key={data.ability.name}>{data.ability.name}</span>
                ))}
              </p>
              <p>HEIGHT: {pokedex.height}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokeDex;
