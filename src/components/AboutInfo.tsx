import React from 'react'
import '../styles/aboutInfo.scss'



interface Props {
  currentPokemon: any;
  showOrHide: boolean;

}

export const AboutInfo = (props: Props) => {

  return (
    <div style={{display: (props.showOrHide ? "flex" : "none" )}} className="about-section">
    <div className='about-element'>
        <div className='about-element-description'>
          <p>Species</p>  
        </div>
        <div className='about-section-worth'>
            <p>{props.currentPokemon.species.name}</p>
        </div>
    </div>
    <div className='about-element'>
        <div className='about-element-description'>
          <p>Height</p>  
        </div>
        <div className='about-section-worth'>
            <p>{props.currentPokemon.height+'"'}</p>
        </div>
    </div>
    <div className='about-element'>
        <div className='about-element-description'>
          <p>Weight</p>  
        </div>
        <div className='about-section-worth'>
            <p>{props.currentPokemon.weight+"kg"}</p>
        </div>
    </div>
    <div className='about-element'>
        <div className='about-element-description'>
          <p>Abilities</p>  
        </div>
        <div className='about-section-worth'>
            <p>{props.currentPokemon.abilities[0].ability.name+", "+ props.currentPokemon.abilities[1].ability.name}</p>
        </div>
    </div>


</div>
  )
}



