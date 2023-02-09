import React from 'react';
import PokeInfo from './PokeDex';

const Card = ({ data, loading, setPokedex }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="left-content">
            {data.map((item) => (
              <div
                key={item.data.id}
                className="card"
                onClick={() => setPokedex(item.data)}
              >
                <div style={{ display: 'flex', gap: '10px' }}>
                  <h2>{item.data.id}</h2>
                  <h2>{item.data.name}</h2>
                </div>
                <img
                  style={{ width: '70px' }}
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
