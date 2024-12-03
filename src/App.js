import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Homepage from './Components/Homepage';
import Login from './Components/Signin';  
import Signup from './Components/signup';
=======
import Homepage from './Components/homepage';
import Login from './Components/Sigin';  
import Signup from './Components/Signup';
>>>>>>> 2b4d4f75b6e93673e39fb05f957a8b16811409d9

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
