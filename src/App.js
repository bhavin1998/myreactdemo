// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Texttransform from './components/Texttransform';



function App() {

  const [mode,setmode] = useState('light');
  // const [changemode,togglemode] = useState('dark');

  const [alert,setAlert] = useState(null);

  const showalert = (message,type) => {
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null)
    }, 3000);
  }

  const changemodes = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#2f425c';
      document.body.style.color = 'white';
      showalert("darkmode enable","success");
      document.title = "ReactApp - Dark";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showalert("darkmode disable","success");
      document.title = "ReactApp - Light";
    }
  }
  return (
    <>
      <Navbar sitetitle="First app" abouttextt="About Us" mode={mode} togglebutton={changemodes}  />
      <Alert alert={alert}/>    
        <Texttransform headingtext="This is Demo task" mode={mode} togglebutton={changemodes}/>
      
    </>
  );
}

export default App;
