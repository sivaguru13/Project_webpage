import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/homepage';
import Login from './Components/Sigin';  
import Signup from './Components/Signup';

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Homepage/>}/>
            <Route path='/Signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
