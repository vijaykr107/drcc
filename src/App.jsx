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
      <h2>DRCC CHHAPIYA ALL TIME GREATEST CRICKETER </h2>
      <button onClick={handlebutton}
      
      className='btn-hover'>click here please</button>
      {showtext && <ol>
        <li>DHARMENDRA PRASAD (C)</li>
        <li>PAWAN MAURYA (TUNA)</li>
        <li>SANTA JI🙏🙏</li>
        <li>SUGREEV KUMAR🙏🙏</li>
        <li>SANDIP Sah </li>
        <li>MANTU YADAV</li>
        <li>BASANT GUPTA(VC)</li>
        <li>SACHIN PANDEY</li>
        <li>KRISHNA YADAV</li>
        <li>KAMLESH KUMARY</li>
        <li>ALAKH NIRANJAN</li>
        <li>SAURABH BALISTER</li>
        <li>TINKU KUMAR</li>
        <li>CHANDAN YADAV</li>
        <li>JAVED ALI</li>
      
        
        
        </ol>}




    </div>
  )
}

export default App
