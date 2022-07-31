import React, { useState, useEffect } from 'react';
import image from '../img/gardenV1.jpeg';
import axios from 'axios';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';

function Garden() {
  const [ imgToDB, setimgToDB ] = useState();
  const [ myPokemon, setMyPokemon ] = useState("");

  const randomNum = Math.floor(Math.random() * 151) +1;
  const pokemonCollectionRef = collection(db, "pokemen");

  useEffect(() => {
    const getPokemon = async() => {
      const data = await getDocs(pokemonCollectionRef);
      setMyPokemon(data.docs.map((doc) => ({...doc.data(), id: doc.id}))); 
    }
    getPokemon()
  }, [imgToDB]);  // each time a pokemon is added, pokemon will be fetched and looped on screen.

  const addPokemon = async (e) => {
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${randomNum}.png?raw=true`;
    setimgToDB(imageUrl);
    e.preventDefault(); 
    await addDoc(pokemonCollectionRef, {  url: imgToDB });
    console.log(imgToDB);
  }
  
  return (
  <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] rounded">
    <div className="px-6 pt-6 2xl:container rounded">
      <div className="">
        <div className="hero min-h-screen" style={{ backgroundImage:`url(${image})`}}>
          <div className="container mt-80 -my-80 flex">
            {myPokemon.length === 0
            ? null
            : <>
                {myPokemon.map((pokemon) => {
                  return(
                    <div key={pokemon.url}>
                      <img className=" w-40 h-40" key={pokemon.url} src={pokemon.url} /> 
                    </div>
              )
            })} 
              </>
            }
          </div>
        </div>
      </div>
      <footer class="footer bg-neutral text-neutral-content">
        <button onClick={addPokemon} className="text-white"><h1>ADD POKEMON</h1></button>
      </footer>
    </div>
  </div>
  )
}

export default Garden 

// const [ pokemonName, setPokemonName ] = useState([]);
// const [ pokemonIMGURL, setPokemonIMGURL ] = useState([]);
// const [ dbPokemon, setDbPokemon ] = useState([]);

  //const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${randomNum}.png?raw=true`;

  // useEffect(()=> {
  //   const pokemonRes = async() => {await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
  //   const pokemonIURL = pokemonRes.data.sprites.front_default;
  //   setPokemonIMGURL(pokemonIURL);
  //   const pokeName = pokemonRes.data.name;
  //   setPokemonName(pokeName);
  //   }
  // }, [ ]) 