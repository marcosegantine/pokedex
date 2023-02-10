import React from 'react';

const PokeDex = ({ pokedex }) => {
  return (
    <>
      {!pokedex.name ? (
        ''
      ) : (
        <>
          <div className="pokeInfoContainer right-content">
            <h1 className="tittle-pokedex">{pokedex.name}</h1>
            <div className="imgContainer">
              <img
                src={pokedex.sprites.other.dream_world.front_default}
                alt={pokedex.name}
              />
            </div>
            <div className="type-container">
              {pokedex.types.map((data) => (
                <p className="type-pokemon" key={data.type.name}>
                  {data?.type.name}
                </p>
              ))}
            </div>

            <div>
              <div className='ability-group'
               
              >
                ABILITY: 
                {pokedex.abilities.map((data) => (
                  <span key={data.ability.name } >{data.ability.name}</span>
                ))}
              </div>
              <div className='info-pokedex'>
                {
                  pokedex.stats.map((stat) =>(
                    <p key={stat.stat.name} >{stat.stat.name}: <span>{stat.base_stat}</span></p>
                    ))
                }
              </div>
              <p className='info-pokedex'>HEIGHT: {pokedex.height}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokeDex;
