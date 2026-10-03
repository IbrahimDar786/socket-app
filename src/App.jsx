
import Button from './components/Button/Button'
import CountryCapital from './components/CountryCapital'
import ShowInfo from './components/ShowInfo'
import TestKnowledge from './components/TestKnowledge'
import Chat from './pages/Chat/Chat'
import { useState } from 'react'
const Toolbar = ({ onPlayMovie, onUploadImage, onInfo }) => {
  return (
    <div onClick={onInfo} style={{ backgroundColor: "beige", padding: "20px", border: "1px solid black", display: 'inline-flex', gap: 5 }}>
      <button onClick={onPlayMovie}>Play Movie</button> <br />
      <button onClick={onUploadImage}>Upload Image</button>
    </div>
  )
}
const App = () => {

  const [show, setShow] = useState(false);


  return (
    <div >
      <ShowInfo>Info: Click the Show button to display the other interface.</ShowInfo>
      <Button onClick={() => setShow(!show)}>   {show ? "Hide" : "Show"} </Button> 
      {show && 

        <div style={{display:"flex", gap:"20px", margin:"10px"}}>
          <CountryCapital /> 
          <TestKnowledge />
      </div>
      }

      <Chat />




    </div>
  )
}

export default App;










