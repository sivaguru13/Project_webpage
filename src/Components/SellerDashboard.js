import React, { useEffect, useState } from "react";
import "./SellerDashboard.css";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Divider, rgbToHex } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Person2Icon from '@mui/icons-material/Person2';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ChecklistIcon from '@mui/icons-material/Checklist';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';


const SellerDashboard = () => {
  const [steps, setSteps]=useState(1); // Controls which page/section to display
    // const navigate=useNavigate();


    
    useEffect(() => {
    // Runs when the component mounts
    const name = localStorage.getItem('userName');
    if (name) {
        // setName(name);
    }
    }, []);

  //menubar
  const menuClick = () =>{
    // navigate('/signin')
    if(document.getElementById('sidebar').style.display==="flex"){
      document.getElementById('sidebar').style.display="none"
      document.getElementById('rightside').style.width="100%"
      document.getElementById('menuicons').style.display="flex"
    }
    else{
      document.getElementById('sidebar').style.display="flex"
      document.getElementById('menuicons').style.display="none"
    }
  }

  const logOut = () => {
  localStorage.removeItem("userName");
  // navigate('/signin');
  }

  return (
    <div className="whole">
      {/* Sidebar */}
      <Button onClick={menuClick} style={{height:"30px",padding:"0px"}}><MenuIcon className="menu-icon" style={{position:"absolute",left:"10",top:"10"}} /></Button>
      <div id="menuicons">
      <Button onClick={() => setSteps(1)} sx={{color:"red"}}><HomeIcon/></Button>
      <Button onClick={() => setSteps(2)} sx={{color:"red"}}><AddShoppingCartIcon/></Button>
      <Button onClick={() => setSteps(3)} sx={{color:"red"}}><ChecklistIcon/></Button>
      <Button onClick={() => setSteps(4)} sx={{color:"red"}}><CollectionsBookmarkIcon/></Button>
      </div>
        <div id="sidebar" >
        
        <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/770/original/profile-icon-design-free-vector.jpg"
            alt="Profile"
        />
        <h1 id="msg"></h1>
       
        <div className="nav-left">
          {/* Buttons to change step */}
            <button onClick={() => setSteps(1)} className="butns">
            Home
            </button>
            <button onClick={() => setSteps(2)} className="butns">
            Add Product
            </button>
            <button onClick={() => setSteps(3)} className="butns">
            Listings
            </button>
            <button onClick={() => setSteps(4)} className="butns">
            SalesReports
            </button>
            
        </div>
        </div>

      {/* Logout Button */}
        <button onClick={logOut} id="logout-btn">
        <LogoutIcon style={{color:"black"}}/>Logout
        </button>

         {/* Right Side Content */}
      <div id="rightside">

        {steps === 1 &&
        <div>
          Welcome
        </div>
        }
      {steps === 2 && 
            <div>
            
            </div>
            }
            
            
        </div>
        </div>
          );
}

  

export default SellerDashboard;