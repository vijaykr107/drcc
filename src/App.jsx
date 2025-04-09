import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [showtext, setshowtext] = useState(false)
  function handlebutton(){
    setshowtext(true)
  }
  return (
    <div>
      <h2>DRCC CHHAPIYA ALL TIME PLAYING X!</h2>
      <button onClick={handlebutton}
      
      className='btn-hover'>click here please</button>
      {showtext && <ol>
        <li>DHARMENDRA PRASAD (C)</li>
        <li>PAWAN MAURYA (TUNA)</li>
        <li>SANTA JI😪</li>
        <li>SUGREEV KUMAR😪</li>
        <li>SANDIP Sah </li>
        <li>MANTU YADAV</li>
        <li>BASANT GUPTA(VC)</li>
        <li>KAMLESH KUMAR</li>
        <li>KRISHNA YADAV</li>
        <li>SANDEEP SAH</li>
        <li>ALAKH NIRANJAN</li>
        <li>JAVED Ali</li>
        
        
        </ol>}




    </div>
  )
}

export default App