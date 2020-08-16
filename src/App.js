import React from 'react';
import Header from './components/header';
import Recipes from './containers/recipes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Recipes/>
    </div>
  );
}

export default App;
