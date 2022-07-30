import React, { Component } from 'react'
import '../styles/pokemonOverview.scss'
import {PokemonElement} from './PokemonElement';

interface Props{
  showAndHide: boolean;
  showElement(id: number): void;
  items: any[];
}



export const PokemonOverview = (props: Props) => {
  
  return (
    <div  className='overview-background' style={{display: (props.showAndHide ? "none" : "flex")}}>
               
    { <ul>
        {props.items.map((item: any, id: number) =>(
          <li key={item.id} onClick={() => props.showElement(id)} > 
            <div >
                <PokemonElement currentPokemon={item} />
            </div>
        
           
          </li>
        
      
        ))}

    </ul>}
</div>
  )
}



 
    

       

    

