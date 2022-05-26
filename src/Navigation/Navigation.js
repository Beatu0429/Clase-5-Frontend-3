import React from "react";

const Navigation = ({pokemonFn}) =>{
    return <nav>
        <button onClick={()=> pokemonFn(1)}>Fire</button>
        <button onClick={()=> pokemonFn(2)}>Water</button>
        <button onClick={()=> pokemonFn(3)}>Rock</button>
        <button onClick={()=> pokemonFn(4)}>Electric</button>
    </nav>
}

export default Navigation;