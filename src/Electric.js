import React from "react";
import {pokemonData} from "./pokemonData";
import Tarjeta from "./Tarjeta";

const Electric = ()=>{
    return (<div className="tarjetas">
    {pokemonData.electric.map(pokemon => (
        <Tarjeta class= "electric" name= {pokemon.pokemonName} avatar= {pokemon.avatar}/>
    ))}
</div>)
}

export default Electric;