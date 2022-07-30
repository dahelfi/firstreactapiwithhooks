
export const calculateBackgroundColor = (inputString: string) => {
    let backgroundColor: string = 'rgb(240,188,128)';

    if(inputString == "grass"){
        backgroundColor= 'rgb(25,170,37)';
    }else if (inputString == "fire"){
        backgroundColor = 'rgb(184,9,30)';
    }
    else if (inputString  == "flying"){
        backgroundColor = 'rgb(240,236,12)'
    }else if (inputString == "bug"){
        backgroundColor = 'rgb(90,204,189)'
    }else if (inputString  == "poison"){
        backgroundColor = 'rgb(188,190,42)'
    }else if (inputString  == "water"){
        backgroundColor = 'rgb(74,146,228)'
    }else if (inputString  == "electric"){
        backgroundColor = 'rgb(284,108,15)'
    }else if (inputString  == "fairy"){
        backgroundColor = 'rgb(184,9,30)'
   }else if(inputString  == "ground"){
        backgroundColor = 'rgb(146,82,8)'
   }


    return backgroundColor;
}
