import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Login from './Components/Signin';  
import Signup from './Components/signup';
import SellerDashboard from './Components/SellerDashboard';
import FortgotPassword from './Components/forgotPassword';
import Dashboard from './Components/Dashboard';
import { BarChartComponent } from "./Components/chart";


function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Homepage/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/seller' element={<SellerDashboard/>}/> 
            <Route path='/forgot-password' element={<FortgotPassword/>}/>   
            <Route path='/dashboard' element={<Dashboard/>}/>  
            <Route path='/chart' element={<BarChartComponent/>}/>      

        </Routes>
        </BrowserRouter>
    );
}

export default App;
