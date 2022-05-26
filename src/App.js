import { useState } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Fire from './Fire';
import Water from './Water';
import Rock from './Rock';
import Electric from './Electric';


function App() {

  const [pokemon, setPokemon] = useState("Seleccione un tipo de pokemon");

  const handlePokemon = (param) => {
    if(param === 1){
      setPokemon(<Fire/>)
    }else if(param ===2){
      setPokemon(<Water/>)
    }else if(param === 3){
      setPokemon(<Rock/>)
    }else if(param === 4){
      setPokemon(<Electric/>)
    }
  }

  return (
    <div className="App">
      <Navigation pokemonFn = {handlePokemon}></Navigation>
      {pokemon}
    </div>
  );
}

export default App;
