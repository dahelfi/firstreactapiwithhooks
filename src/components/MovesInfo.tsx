import React, { useEffect, useState } from 'react'
import '../styles/movesInfo.scss'

interface Props{
    currentPokemon: any;
    showOrHide: boolean;
}

export const MovesInfo = (props: Props) => {
    const [moveValues, setMoveValues] = useState<any>([]);
    const [movesLengthCounter, setMovesLengthCounter] = useState(0);

    useEffect(()=>{

         

        setMovesLengthCounter(0)
        let moveValuesTemp: any[] = [];
        if(props.currentPokemon.moves.length < 5){
            setMovesLengthCounter(props.currentPokemon.moves.length);
        }else{
            setMovesLengthCounter(4)
        }

        for (let i = 0; i < movesLengthCounter; i++) {
            let element: any = props.currentPokemon.moves[i].move.name;
    
            moveValuesTemp.push(element);
        
        }

        setMoveValues(moveValuesTemp);

  
      

    },[props.currentPokemon])

  return (
    <div className='moves-section' style={{display: (props.showOrHide ? "flex" : "none" )}}>
    <ul>
        {
        
        
        moveValues.map((item: any)=>{
            return <li key={item.id}>
                <div className='moves-element'>
                    <p>{item}</p>
                </div>

            </li>

        })}
    </ul>


</div>
  )
}









