import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';




function App() {
  const[mode, setMode]=useState('light'); //weather dark moe is enable or not
  const[alert, setAlert]= useState(null); //setAlert mere alert value ko set krne ke lea hai

  const showAlert=(message, type)=>{      // showAlert ek arrow functio hai jo humare alert msg ko show krne me help krega
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title='Textutils - Dark Mode'
     /* setInterval(() => {
        document.title='Textutils is Amazing';
      }, 2000);

      setInterval(() => {
        document.title='install Textutils Now'
      }, 1500); */
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title='Textutils - Light Mode'
    }
  }
  return (
    <>
   {/* <Navbar tittle="Textutils" aboutText="About Textutils"/> */}
   {/* <Navbar/> */}
   <Navbar tittle="textutils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
   <Textform showAlert={showAlert}heading ="Enter the text to analyze below" mode={mode}/> 
   </div>
   
    </>
    

  );
}

export default App;
