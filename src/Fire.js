import React from "react";
import Tarjeta from "./Tarjeta";
import {pokemonData} from "./pokemonData";

const Fire = ()=>{
    return <div className="tarjetas">
        {pokemonData.fire.map(pokemon => (
            <Tarjeta class ="fire" name= {pokemon.pokemonName} avatar = {pokemon.avatar}/>
        ))}
    </div>
}

export default Fire;