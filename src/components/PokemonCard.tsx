import React, { MouseEvent, useEffect, useState } from 'react'
import { calculateBackgroundColor } from '../services/calculateBackgroundColor';
import '../styles/pokemonCard.scss'
import {BaseStatsInfo} from './BaseStatsInfo';
import {MovesInfo} from './MovesInfo';
import {AboutInfo} from './AboutInfo';

interface Props {
    currentPokemon: any;
    showAndHide: boolean;
    retreatOverview(): void;
  }


export const PokemonCard = (props: Props) => {
    const [actualPokemonData, setActualPokemonData] = useState<any> (null);
    const [showAbout, setShowAbout] = useState(true);
    const [showBaseStats, setShowBaseStats] = useState(false);
    const [showMoves, setShowMoves] = useState(false);
  

    const showOrHide = (category: string) =>{

        if(category == 'about'){

                setShowAbout(true)
                setShowBaseStats(false)
                setShowMoves(false)
   
        }else if(category == 'baseStats'){
            setShowAbout(false)
            setShowBaseStats(true)
            setShowMoves(false)

        }else if(category == 'moves'){
            setShowAbout(false)
            setShowBaseStats(false)
            setShowMoves(true)

        }
    }

    useEffect(()=>{
    
        const fetchData = async () => {
        const response = await fetch(props.currentPokemon.url);
        const data = await response.json();
        setActualPokemonData(data);
                         
        };   
        fetchData();
      
    },[props.currentPokemon, actualPokemonData]);



   

   const stopPropagation = (e: any) =>{
        e.stopPropagation();
   }

    if(actualPokemonData != null){
    return (
    
    <div className='pokemon-card-background' style={{display: (props.showAndHide ? "flex" : "none" )}} onClick={()=> props.retreatOverview()}>
  
    <div className='pokemon-card' onClick={(event)=>stopPropagation(event)}>
        <div className='pokemon-card-top-section' style={{backgroundColor: calculateBackgroundColor(actualPokemonData['types'][0]['type']['name'])}}>
            <h1>{actualPokemonData.species.name}</h1>
          

        </div>
        <div className='pokemon-card-bottom-section'>
            <img src={actualPokemonData.sprites.other['official-artwork'].front_default}/>
            <div className='description'>
                <div style={{borderBottom: (showAbout ? "2px solid rgb(90,204,189)" : "2px solid black")}} onClick={()=>showOrHide('about')} className='testElement'><h2>about</h2></div>
                <div style={{borderBottom: (showBaseStats ? "2px solid rgb(90,204,189)" : "2px solid black")}} onClick={()=>showOrHide('baseStats')}><h2>base stats</h2></div>
                <div style={{borderBottom: (showMoves ? "2px solid rgb(90,204,189)" : "2px solid black")}} onClick={()=>showOrHide('moves')}><h2>moves</h2></div>
            
            </div>
              <div className='facts-section'>
              <AboutInfo currentPokemon={actualPokemonData} showOrHide={showAbout}/>

              <BaseStatsInfo currentPokemon={actualPokemonData} showOrHide={showBaseStats}/>

              <MovesInfo currentPokemon={actualPokemonData} showOrHide={showMoves}/>

              </div>
           
            
        </div>

    </div>

    
</div>

)

}else{

    return(
        <div></div>
    )

}
}


    





 




   
  
    

