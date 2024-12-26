import React from "react";
import "./SellerDashboard.css";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import { Image } from "@mui/icons-material";
import { Button } from "@mui/material";




const BuyerWebpage = () => {

  const Search = styled('div')(({ theme }) => ({
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
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    
  }));
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,//arrows remove
    autoplay:true,//automatically slide
    autoplaySpeed:1000,//seconds to slide
    cssEase: "ease-in-out",  // Smooth easing effect for transitions
  };
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is an amazing product.",
      price: 99.99,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Product 2",
      description: "Another fantastic item.",
      price: 49.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 3",
      description: "Another fantastic item.",
      price: 49.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 4",
      description: "Another fantastic item.",
      price: 49.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 5",
      description: "Another fantastic item.",
      price: 49.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 6",
      description: "Another fantastic item.",
      price: 49.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 7",
      description: "Another fantastic item.",
      price: 49.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 8",
      description: "Another fantastic item.",
      price: 49.99,
      image: "https://via.placeholder.com/300",
    },
  ];

  
  return (
    <><Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        background: 'linear-gradient(45deg,rgb(40, 161, 6) 30%,rgb(7, 112, 42) 90%)',
      }}>
        <Toolbar
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'start', sm: 'center' },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <div style={{display:"flex",justifyContent:"space-between"}}>
            FreshConnect
            <Button variant="contained" sx={{backgroundColor:"white",color:"black"}}>Became a Seller</Button></div>
            
          </Typography>
          <Search>
            
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    <div style={{height:"60vh",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <div style={{width:"100%"}}>
    <Slider {...settings}>
        <div className="carouselimage">
          <img src="\Images\dream_TradingCard (4).jpg" className="imgcarousel"/>
          
        </div>
        <div className="carouselimage">
          <img src="\Images\dream_TradingCard (3).jpg" className="imgcarousel"/>
        </div>
        <div className="carouselimage">
          <img src="https://plus.unsplash.com/premium_vector-1713201017274-e9e97d783e75?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="imgcarousel" />
        </div>
        <div className="carouselimage">
          <img src="C:\Users\Siva\Downloads\Dream_Background.jpg"/>
        </div>
        <div className="carouselimage">
         
          <img src="\Images\artbreeder-image-2024-12-24T06_19_29.616Z.jpeg" className="imgcarousel"/>
        </div>
        <div className="carouselimage">
       
          <img src="\Images\DALL·E 2024-12-25 20.38.07 - A vibrant and colorful illustration featuring a variety of organic foods like fruits, vegetables, grains, and legumes, with a clear message written in.webp" className="imgcarousel"/>
        </div>
      </Slider>
      </div>
      </div>
      
      {/* Category */}
      <div style={{backgroundColor:'lightgreen',textAlign:'center', width:'100%',fontWeight:'20px',padding:'10px'}}>Product List</div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

    <div style={{width:"100%",height:"50vh",backgroundColor:"lightgreen",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

    </div>
      </>

  );
};

export default BuyerWebpage;