import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Content = () => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getPokemonList, setGetPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon/',
  );
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();

  const pokeFunction = async () => {
    setLoading(true);
    const res = await axios.get(currentPage);
    setNextPage(res.data.next);
    setPrevPage(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    console.log(pokeData);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      console.log(result.data);

      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  function toNextPage() {
    setPokeData([]);
    setCurrentPage(nextPage);
  }
  function toPrevPage() {
    setPokeData([]);
    setCurrentPage(prevPage);
  }

  useEffect(() => {
    pokeFunction();
  }, [currentPage]);
  return (
    <>
      <Card pokeData={pokeData} loading={loading} />
      <div className="btn-container">
        {prevPage ? (
          <button className="btn" onClick={toPrevPage}>
            Anterior
          </button>
        ) : null}
        {nextPage ? (
          <button className="btn" onClick={toNextPage}>
            Proximo
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Content;
