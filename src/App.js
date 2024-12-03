import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Signup from './Components/Signup';

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
