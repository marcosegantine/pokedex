import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  
  return (
    <div className="app">
      <Header />
      <Content/>
    </div>
  );
}

export default App;
