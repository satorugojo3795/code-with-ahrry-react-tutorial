// import About from './components/About'
import { useState } from 'react';
import Navbar from './components/Navbar'
// import "./App.css"
import TextForm from './components/TextForm'
useState
function App() {

  return (
    <>
      <Navbar title="Text Utils" mode="light"/>
      <div className="container">
        <TextForm heading="Enter text to analyse"/>
      </div>
      {/* <About/> */}
    </>
  )
}

export default App
