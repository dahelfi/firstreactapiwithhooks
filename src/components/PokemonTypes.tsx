import React, { useEffect, useState } from 'react'
import '../styles/pokemonTypes.scss'


interface Props{
    type: string;
}

export const PokemonTypes = (props: Props) => {
    const [backgroundColor, setBackgroundColor] = useState('rgb(240,188,128)');

    useEffect(()=>{

        if(props.type == "grass"){
            setBackgroundColor('rgb(25,170,37)');
        }else if (props.type == "fire"){
            setBackgroundColor('rgb(184,9,30)');
        }
        else if (props.type  == "flying"){
            setBackgroundColor('rgb(240,236,12)')
        }else if (props.type == "bug"){
            setBackgroundColor('rgb(90,204,189)')
        }else if (props.type  == "poison"){
            setBackgroundColor('rgb(188,190,42)')
        }else if (props.type  == "water"){
            setBackgroundColor('rgb(74,146,228)')
        }else if (props.type  == "electric"){
            setBackgroundColor('rgb(284,108,15)')
        }else if (props.type  == "fairy"){
            setBackgroundColor('rgb(184,9,30)')
        }else if(props.type  == "ground"){
            setBackgroundColor('rgb(146,82,8)')
        }

    },[]);

  return (
    <div className='typeElement' style={{backgroundColor: backgroundColor}}>
    {props.type}
    </div>
  )
}




