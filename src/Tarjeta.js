import React from 'react';

const Tarjeta = (props) =>{
    return (
        <div className= {props.class}>
            <h2>{props.name}</h2>
            <img src={props.avatar} alt=""></img>
        </div>
    );
}

export default Tarjeta;