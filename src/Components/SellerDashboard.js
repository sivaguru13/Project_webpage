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
            FreshConnect
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
    <div style={{width:"100%"}}>
    <Slider {...settings}>
        <div className="carouselimage">
          <img src="https://th.bing.com/th/id/OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8?rs=1&pid=ImgDetMain" className="imgcarousel"/>
          
        </div>
        <div className="carouselimage">
          <img/>
        </div>
        <div className="carouselimage">
          <img/>
        </div>
        <div className="carouselimage">
          <img/>
        </div>
        <div className="carouselimage">
          <h3>5</h3>
        </div>
        <div className="carouselimage">
          <h3>6</h3>
        </div>
      </Slider></div>
      
      {/* Category */}
      <div style={{height:"10vh",backgroundColor:"blue"}}>
            welcomes you
      </div>
      </>

  );
};

export default BuyerWebpage;