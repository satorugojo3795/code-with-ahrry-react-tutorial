// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';
import { useState } from 'react';

import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //tells whether datk mode is enabled or not
  const [alert,setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },900)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled","success");
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled","success");
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      <BrowserRouter>
        {/* <Navbar title="TextUtils" aboutText="about textutils"/> */}
        <Navbar title="TextUtis" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}></Route>
          </Routes>
          {/* <TextForm heading="Enter text to analyse" mode={mode}/>  */}
          {/* <About/> */}
        </div>
      </BrowserRouter>
    </>
  );

  // return (
  //   <>
  //     <BrowserRouter>
  //       <Navbar
  //         title="TextUtils2"
  //         aboutText="TextAbouts"
  //         mode={mode}
  //         toggleMode={toggleMode}
  //       />
  //       <Alert alert={alert} />
  //       <div className="container my-4" mode={mode}>
  //         <Routes>
  //           <Route exact path="/about" element={<About />}></Route>
  //           <Route
  //             exact path="/"
  //             element={
  //               <TextForm
  //                 showAlert={showAlert}
  //                 heading="Enter Text to analyze "
  //                 mode={mode}
  //               />
  //             }
  //           ></Route>
  //         </Routes>
  //       </div>
  //     </BrowserRouter>
  //   </>
  // );
}

export default App;