import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Login from './Components/Signin';  
import Signup from './Components/signup';
import FortgotPassword from './Components/forgotPassword';

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Homepage/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/forgot-password' element={<FortgotPassword/>}/>           
        </Routes>
        </BrowserRouter>
    );
}

export default App;
