import React, { useEffect, useState } from 'react'
import './styles/app.scss'
import {PokemonOverview} from './components/PokemonOverview';
import {PokemonCard} from './components/PokemonCard';



export const App = () => {
  const [currentPokemon, setCurrentPokemon] = useState<any>(null);
  const [showPokemonCard, setShowPokemonCard] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    const fetchData = async() =>{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=5');
      const data = await response.json();
      
      setItems(data.results);
    
    }
    fetchData();
    
    },[]);

  const retreatToOverview = () =>{
    setShowPokemonCard(false);
  }

  const showPokemonCardFunction = (id: number) =>{

    
   items.forEach((item, elementId: number) =>{

    if(elementId === id){  
      setCurrentPokemon(item);
      setShowPokemonCard(true);
    }
   })

  }


  return (
    <div>
    <PokemonOverview showAndHide={showPokemonCard} showElement={showPokemonCardFunction} items={items}/>
    <PokemonCard showAndHide={showPokemonCard} retreatOverview={retreatToOverview} currentPokemon={currentPokemon} /> 
   <div className="background"/>
   </div>
  )
}
