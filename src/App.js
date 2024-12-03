import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/homepage';
import Login from './Components/login';  
import Signup from './Components/signup';

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/sigin' element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
