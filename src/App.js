import { ToastContainer } from 'react-toastify';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Nabvar from './pages/shared/Nabvar';
import Home from './pages/Home/Home'
import Registration from './pages/shared/Registration';
import Login from './pages/shared/Login';
import Services from './pages/Services/Services';
import RequireAuth from './pages/shared/RequireAuth'
import Contact from './pages/shared/Contact';
import Footer from './pages/shared/Footer';

function App() {
  return (
    <div className="App">
      <Nabvar></Nabvar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={
          <RequireAuth>
            <Services></Services>
          </RequireAuth>
        }></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
