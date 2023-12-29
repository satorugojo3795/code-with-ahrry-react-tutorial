// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';
import { useState } from 'react';

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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled","success");
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="about textutils"/> */}
    <Navbar title="TextUtis" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading="Enter text to analyse" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;