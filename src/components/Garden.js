import React, { useState, useEffect } from 'react';
import image from '../img/gardenV1.jpeg';
import axios from 'axios';


function Garden() {
  
  const [ pokemonName, setPokemonName ] = useState([]);
  const [ dbPokemon, setDbPokemon ] = useState([])

  const randomNum = Math.floor(Math.random() * 151) +1;
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${randomNum}.png?raw=true`;

  useEffect(()=> {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`).then(res => {
      setPokemonName(res.data.forms)
    })
    console.log(pokemonName)
    console.log(pokemonName[0].name) 
  }, []) 




  return (
  <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] rounded">
    <div className="px-6 pt-6 2xl:container rounded">
      <div className="">
        <div className="hero min-h-screen" style={{ backgroundImage:`url(${image})`}}>
          <p>HELLO world</p>
          <img data-tooltip-target="tooltip-no-arrow" className=" w-80 h-80" src={imageUrl}/>
          <div >
            <h1>{pokemonName[0].name} </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Garden