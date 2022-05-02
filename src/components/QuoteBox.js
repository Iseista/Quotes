import React, {useState} from 'react';
import quotes from '../data_json/quotes.json';
import Colors from '../components/Colors';


<Colors></Colors>
const QuoteBox = () => {
    
    //UserSate y recarga de la página
  
    const randomIndex = Math.floor(Math.random()* quotes.length)

    const [index, setIndex] = useState(randomIndex)
  
    //Fin
    //Creamos la funcion que cambio de usuario en boton
    const changeUser = () =>{
    const randomIndex = Math.floor(Math.random()* quotes.length)
    setIndex(randomIndex)

    //Logica cambio de colores
    const randomColor = Math.floor(Math.random()* Colors.length)
    document.body.style = `background: ${Colors[randomColor]}`
    //Fin logica de colores

    //Fin logica boton
    }
    return (
        <div>
            <h1>{quotes[index].author}</h1>
            <p>{quotes[index].quote}</p>
            <button onClick={changeUser}>Cambiar usuario</button>
        </div>
    );
};

export default QuoteBox;