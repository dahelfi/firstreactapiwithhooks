import React, { Component } from 'react'
import '../styles/baseStatsInfo.scss'

interface Props {
    currentPokemon: any;
    showOrHide: boolean;
  
}



export const BaseStatsInfo = (props: Props) => {


  return (
    <div style={{display: (props.showOrHide ? "flex" : "none" )}} className="baseStats-section">
    <div className='baseStat-element'>
        <div className='baseStat-category'><p>HP</p></div>
        <div className='baseStat-value'><p><b>{props.currentPokemon.stats[0].base_stat}</b></p></div>
        <div className='baseStat-visualisation'>
            <div className='redBackground width136'></div>
        </div>
    </div>
    <div className='baseStat-element'>
        <div className='baseStat-category'><p>Attack</p></div>
        <div className='baseStat-value'><p><b>{props.currentPokemon.stats[1].base_stat}</b></p></div>
        <div className='baseStat-visualisation'>
            <div className='greenBackground width211'></div>
        </div>
    </div>
    <div className='baseStat-element'>
        <div className='baseStat-category'><p>Defense</p></div>
        <div className='baseStat-value'><p><b>{props.currentPokemon.stats[2].base_stat}</b></p></div>
        <div className='baseStat-visualisation'>
            <div className='redBackground width96'></div>
        </div>
    </div>
    <div className='baseStat-element'>
        <div className='baseStat-category'><p>Sp. Atk</p></div>
        <div className='baseStat-value'><p><b>{props.currentPokemon.stats[3].base_stat}</b></p></div>
        <div className='baseStat-visualisation'>
            <div className='greenBackground width111'></div>
        </div>
    </div>
    <div className='baseStat-element'>
        <div className='baseStat-category'><p>Sp. Def</p></div>
        <div className='baseStat-value'><p><b>{props.currentPokemon.stats[4].base_stat}</b></p></div>
        <div className='baseStat-visualisation'>
            <div className='greenBackground width158'></div>
        </div>
    </div>
    <div className='baseStat-element'>
        <div className='baseStat-category'><p>Speed</p></div>
        <div className='baseStat-value'><p><b>{props.currentPokemon.stats[5].base_stat}</b></p></div>
        <div className='baseStat-visualisation'>
            <div className='redBackground width53'></div>
        </div>
    </div>


</div>
  )
}



