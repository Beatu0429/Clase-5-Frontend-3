import React from "react";
import Tarjeta from "./Tarjeta";
import {pokemonData} from "./pokemonData";

const Rock = ()=>{
    return <div className="tarjetas">
        {pokemonData.rock.map(pokemon => (
            <Tarjeta class ="rock" name= {pokemon.pokemonName} avatar = {pokemon.avatar}/>
        ))}
    </div>
}

export default Rock;