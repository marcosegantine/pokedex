import React from 'react';
import PokeInfo from './PokeDex';

const Card = ({ data, loading, setPokedex }) => {
  return (
    <>
      {loading ? (
        <h1 className='loading'>Loading...</h1>
      ) : (
        <>
          <div className="left-content">
            {data.map((item) => (
              <div
                key={item.data.id}
                className="card"
                onClick={() => setPokedex(item.data)}
              >
                <div className='card-data'>
                  <h2>{item.data.id}</h2>
                  <h2>{item.data.name}</h2>
                </div>
                <img
                  src={item.data.sprites.front_default}
                  alt={item.data.name}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Card;
