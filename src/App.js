import logo from './logo.svg';
import './App.css';
import {Routes,Route}from "react-router-dom"
import Nabvar from './pages/shared/Nabvar';
import Parts from './pages/Home/Parts';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<navbar/>}></Route>

      </Routes> */}
      <Nabvar></Nabvar>
      <Parts></Parts>
    </div>
  );
}

export default App;
