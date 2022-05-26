import React from "react";
import Tarjeta from "./Tarjeta";
import {pokemonData} from "./pokemonData";

const Water = ()=>{
    return <div className="tarjetas">
        {pokemonData.water.map(pokemon => (
            <Tarjeta class ="water" name= {pokemon.pokemonName} avatar = {pokemon.avatar}/>
        ))}
    </div>
}

export default Water;