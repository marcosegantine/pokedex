import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './componentes/Content';
import Header from './componentes/Header';
import PokeInfo from './componentes/PokeInfo';

function App() {
  
  return (
    <div className="app">
      <Header />
      <Content/>
    </div>
  );
}

export default App;
