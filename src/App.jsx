import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login';
import UpdateProduct from './Components/UpdateProduct';
import AddProduct from './Components/AddProduct';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
        <Route path="" element={<Register/>}> </Route>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/update" element={<UpdateProduct/>}> </Route>
          <Route path="/add" element={<AddProduct/>}> </Route>
          <Route path="/register" element={<Register/>}></Route>
            
          

        </Routes>
      </BrowserRouter>






    </div>
  );
}

export default App;
