import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Homepage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
