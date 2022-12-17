import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quote from './quote.json'
import colors from './colors.json'

function App() {
 


  // ######## variables ramdom ############
  const ramdomMesage = Math.floor(Math.random() * quote.length );
  const ramdomColors = Math.floor(Math.random() * colors.length );

  // ########## variables ##############
  const quoteMesage = `${quote[ramdomMesage].quote}`;
  const quoteAutor = `${quote[ramdomMesage].author}`;

  //####### variables usestate ############
  const [indexCuote, setIndexCuote] = useState(ramdomMesage);
  const [indexColors, setIndexColors] = useState(ramdomColors);


  // ######## Function ####################
  const ChangeCuote =()=>{
  const newRamdomMesage = Math.floor(Math.random() * quote.length );
    setIndexCuote(newRamdomMesage);
  }

  
  document.body.style = `background-color: ${colors[ramdomColors].hex}`



  return (
    <div className="App">
      <div  className='card' style={{color: colors[ramdomColors].hex}}>
        <div className='quote'>
          <span className='quote-icon'><i className="fa-solid fa-quote-left"></i></span>
          <p>{quoteMesage}</p>
        </div>

        <div className='autor'>
          <span>{quoteAutor}</span>
          <button style={{color: colors[ramdomColors].hex}} onClick={ChangeCuote}className='btn-autor'><i className="fa-solid fa-circle-chevron-right"></i></button>
        </div>
       
      </div>
     
    </div>
  )
}

export default App
