import React, { useEffect, useState } from "react";
import "./SellerDashboard.css";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, InputBase, Toolbar, Typography } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ChecklistIcon from '@mui/icons-material/Checklist';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import SearchIcon from '@mui/icons-material/Search';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SellerDashboard = () => {
  const [steps, setSteps] = useState(1); // Controls which section to display
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) setUsername(name);
  }, []);

  const handleMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate('/signin');
  };

  // Styled Components
  const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div >
      {/* navabar */}
        <nav style={{width:"100vw",display:"flex",alignItems:"center",height:"12vh"}}>
        <div>
          <h1 id="msg">Welcome, {username || "User"}!</h1>
        </div>
        <div style={{width:"40%",display:"flex",justifyContent:"space-evenly"}}>
        <button onClick={() => setSteps(1)} className="butns">Home</button>
            <button onClick={() => setSteps(2)} className="butns">Add Product</button>
            <button onClick={() => setSteps(3)} className="butns">Listings</button>
            <button onClick={() => setSteps(4)} className="butns">Sales Reports</button>
        </div>
        </nav>

        {/* carousel */}
        <div className="full-width-carousel">
               <Slider {...carouselSettings}>
                 <div className="full-width-slide">
                   <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240307153443/GeeksforGeeks-Offline-Classes.webp"
                    alt="Slide 1"
                    className="slide-image"
                  />
                </div>
                <div className="full-width-slide">
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240307153531/GeeksforGeeks-Classroom-Program---DSA-For-Interview-Preparation-Course.webp"
                    alt="Slide 2"
                    className="slide-image"
                  />
                </div>
                <div className="full-width-slide">
                   <img
                     src="https://media.geeksforgeeks.org/wp-content/uploads/20240307153605/School-programming.png"
                     alt="Slide 3"
                     className="slide-image"
                   />
                 </div>
              </Slider>
             </div>
           </div>
  );
}
export default SellerDashboard;
