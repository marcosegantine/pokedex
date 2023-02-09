import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import PokeDex from './PokeDex';

const Content = () => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [data, setData] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllPokemon = async () => {
    const response = await axios.get(url);
    setLoading(true);
    setNextPage(response.data.next);
    setPrevPage(response.data.previous);

    const promises = response.data.results.map(async (pokemon) => {
      const data = await axios.get(pokemon.url);
      return data;
    });

    setData(await Promise.all(promises));
    setLoading(false);
  };

  function toPrevPage() {
    setUrl(prevPage);
  }
  function toNextPage() {
    setUrl(nextPage);
  }

  useEffect(() => {
    getAllPokemon();
  }, [url]);

  return (
    <>
      <div className="container">
        <Card data={data} loading={loading} setPokedex={setPokedex} />

        <PokeDex pokedex={pokedex} />
      </div>
      <div className="btn-container">
        <button
          className="btn"
          onClick={toPrevPage}
          disabled={prevPage ? false : true}
          // disabled = {true}
        >
          Anterior
        </button>

        <button
          className="btn"
          onClick={toNextPage}
          disabled={nextPage ? false : true}
        >
          Proximo
        </button>
      </div>
    </>
  );
};

export default Content;
