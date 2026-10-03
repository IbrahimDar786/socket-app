
import CountryCapital from './components/CountryCapital'
import TestKnowledge from './components/TestKnowledge'
const Toolbar = ({ onPlayMovie, onUploadImage, onInfo }) => {
  return (
    <div onClick={onInfo} style={{ backgroundColor: "beige", padding: "20px", border: "1px solid black", display: 'inline-flex', gap: 5 }}>
      <button onClick={onPlayMovie}>Play Movie</button> <br />
      <button onClick={onUploadImage}>Upload Image</button>
    </div>
  )
}
const App = () => {
  return (
    <div >
      <Toolbar onPlayMovie={() => alert(`Movie is playing...`)}
        onUploadImage={() => alert(`Image uploaded`)} onInfo={() => alert("you clicked on toolbar")} /> <br /> <br />

      <CountryCapital />  <br />
      <br />
      <TestKnowledge />




    </div>
  )
}

export default App;










