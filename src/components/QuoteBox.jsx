import quote from '../quote.json'
import colors from '../colors.json'
import { useState } from 'react';


const QuoteBox = () => {

  // ######## variables ramdom ############
  const ramdomMessage = Math.floor(Math.random() * quote.length );
  const ramdomColors = Math.floor(Math.random() * colors.length );

  // ########## variables ##############
  const quoteMesage = `${quote[ramdomMessage].quote}`;
  const quoteAutor = `${quote[ramdomMessage].author}`;

  //####### variables usestate ############
  const [indexCuote, setIndexCuote] = useState(ramdomMessage);
  const [indexColors, setIndexColors] = useState(ramdomColors);


  // ######## Function ####################
  const ChangeCuote =()=>{
  const newRamdomMessage = Math.floor(Math.random() * quote.length );
    setIndexCuote(newRamdomMessage);
  }

  document.body.style = `background-color: ${colors[ramdomColors].hex}`

  
    return (
        <div>
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
    );
};

export default QuoteBox;