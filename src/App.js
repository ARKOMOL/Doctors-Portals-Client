import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequiredAuth from './Pages/Login/RequiredAuth';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="App">

<Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/appointment' element={
        <RequiredAuth>
          <Appointment></Appointment>
        </RequiredAuth>
        
        } />
        <Route path='/review' element={<Signup/>} />
        <Route path='/contactUs' element={<Signup/>} />
        <Route path='/about' element={<Signup/>} />

   
      </Routes>
    </div>
  );
}

export default App;
