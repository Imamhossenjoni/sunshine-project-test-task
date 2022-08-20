import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import {Routes,Route}from "react-router-dom"
import Nabvar from './pages/shared/Nabvar';
import Home from './pages/Home/Home'
import Parts from './pages/Home/Parts';
import Registration from './pages/shared/Registration';
import Login from './pages/shared/Login';
import Services from './pages/Services/Services';
import Contact from './pages/shared/Contact';

function App() {
  return (
    <div className="App">
      <Nabvar></Nabvar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>

      </Routes>
      {/* <Nabvar></Nabvar>
      <Parts></Parts>
      <Registration></Registration>
      <Login></Login> */}
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
