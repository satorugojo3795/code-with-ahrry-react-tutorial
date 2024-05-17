import About from './components/About'
import { useState } from 'react';
import Navbar from './components/Navbar'
// import "./App.css"
import TextForm from './components/TextForm'

import { BrowserRouter, Route, Routes } from "react-router-dom";


useState
function App() {

  const [myStyle, setStyle] = useState({
    color: "black"
  })

  const [mode, setMode] = useState("light");
  const [switchText, setSwitchText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === "light") {
      // console.log(mode)
      setStyle({
        color: 'white'
      })
      setSwitchText("Enable Light Mode");
      setMode("dark");
      document.body.style.backgroundColor = '#424242'
    }
    else {
      // console.log(mode)
      setStyle({
        color: 'black'
      })
      setSwitchText("Enable Dark Mode");
      setMode("light");
      document.body.style.backgroundColor = 'white'
    }

  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Utils" mode={mode} switchText={switchText} myStyle={myStyle} toggleMode={toggleMode} />
        {/* <div className="container">
        <TextForm heading="Enter text to analyse" myStyle={myStyle}/>
      </div> */}
        {/* <About /> */}
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<TextForm heading="Enter text to analyse" myStyle={myStyle}/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
