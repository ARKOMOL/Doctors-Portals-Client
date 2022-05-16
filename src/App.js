import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequiredAuth from './Pages/Login/RequiredAuth';
import Appointment from './Pages/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';

function App() {
  return (
    <div className="App px-14">

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
          <Route path='/dashboard' element={
        <RequiredAuth>
          <Dashboard></Dashboard>
        </RequiredAuth>
               } >
          <Route index  element={<MyAppointments/>} />
          <Route path='myreview' element={<MyReview/>} />
          <Route path='myhistory' element={<MyHistory/>} />
          <Route path='users' element={<Users/>} />
        </Route>
        <Route path='/review' element={<Signup/>} />
        <Route path='/contactUs' element={<Signup/>} />
        <Route path='/about' element={<Signup/>} />

   
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
