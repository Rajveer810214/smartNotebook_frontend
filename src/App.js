import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState'
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Profile from './components/Profile';
import ForgotPassword from './components/ForgotPassword';
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <div style={{fontFamily:"monsteerat"}}> 
      
      <NoteState >
      <BrowserRouter >
    <Navbar />   
    <div className="alert " style={{ margin: "53px" }}>
    <Alert alert={alert} />
    </div>   
        <Routes>
          
          <Route exact path="/"  element={<Home showAlert={showAlert}/>} />
          {localStorage.getItem('token')!==null?<Route exact path="/profile" element={<Profile />} />:<Route exact path="/profile" element={<Signup />} />}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login"  element={<Login showAlert={showAlert}/> } />
          <Route exact path="/signup"   element={<Signup showAlert={showAlert} />}/>

         <Route exact path="/forgotpassword"   element={<ForgotPassword showAlert={showAlert} />}/>
        </Routes>
        
      <Footer/>
      </BrowserRouter>
      </NoteState>
    </div>

  );
}

export default App;
