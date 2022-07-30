import React, { useState, useEffect } from 'react'
import { calculateBackgroundColor } from '../services/calculateBackgroundColor';
import '../styles/pokemonElement.scss'
import {PokemonTypes} from './PokemonTypes';


interface Props{
    currentPokemon: any;
 
}

export const PokemonElement = (props : Props) => {
    const [actualPokemonData, setActualPokemonData] = useState<any> (null);
    const [dataLoading, setDataLoading] = useState(false);

    useEffect(()=>{
    
       const fetchData = async () => {
           const response = await fetch(props.currentPokemon.url);
           const data = await response.json();
           setActualPokemonData(data);
                    
       };   
       fetchData();
 
    },[props.currentPokemon, actualPokemonData]);




    if(actualPokemonData != null){
      
        return (

            <div className='element' style={{backgroundColor: calculateBackgroundColor(actualPokemonData['types'][0]['type']['name'])}}>
            <div className='element-name'>
                <h3>{props.currentPokemon.name}</h3>
            </div>
          
               <div className='element-order'>
                <h3>#{actualPokemonData.order}</h3>
            </div> 
        
             <img src={actualPokemonData.sprites.other['official-artwork'].front_default} /> 
          
               <ul className='typeList'>
                {actualPokemonData.types.map((item: any) => (
                    <li key={item.id}>
                        <PokemonTypes type={item.type.name} />
                    </li>
                ))}
            </ul>        
        
        </div>
          )

    }else{
        return null;
    }



}



   


