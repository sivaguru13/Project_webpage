import Paper from '@mui/material/Paper';
import { Typography, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin =()=> {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    console.log(user);
    const handlechange = (event) => {
    if (event.target.name === "name") {
        setUser({ ...user, name: event.target.value });
    }
    if (event.target.name === "email") {
        setUser({ ...user, email: event.target.value });
    }
    if (event.target.name === "password") {
        setUser({ ...user, password: event.target.value });
    }
    };
  // login button action backend connection
    const Navigate=useNavigate();
    const handlelogin=()=>{
    
    axios.post('http://localhost:3001/login',JSON.stringify(user),{headers:{"Content-Type":"application/json"}})
    .then((res)=>{
        alert('Login Successfully');
        console.log(res.data)})
    .catch((err)=>{console.log(err)})
    }
    const signup=()=>{
        Navigate('/signup');
        
    }
  // 
  // Navigate('/register');

return (
    <div
    style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }}>
    <Paper
    sx={{
        width: "350px",
        height: "450px",
        borderRadius: "30px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        gap: "10px",
        
    }}
    elevation={24}
    >
    <Typography variant="h5"><span style={{color:"blue"}}>Welcome</span> ,Sign in</Typography>
    
  
    <TextField
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
        fullWidth
        onChange={(event) => handlechange(event)}
    />
    <TextField
        id="outlined-basic"
        label="Password"
        name="password"
        variant="outlined"
        fullWidth
        onChange={(event) => handlechange(event)}
    /><div>
 <Button variant="contained" onClick={handlelogin}>Sign In</Button>
    <a href="#" style={{ color: "black",marginLeft:"100px" }}>
        Forgot password
    </a>
    </div>
   
    <Typography variant="p">
        Don't have an account?
        <a href="/signup" style={{ color: "black",margin:"5px" }} onClick={{signup}}>
        Signup
        </a>
    </Typography>
    <Typography variant="h6">-------------- or -------------</Typography>
    <div style={{display:'flex',gap:"5px"}}>
    <Button variant="contained" sx={{width:'100%',display:'flex',gap:'10px'}}><GoogleIcon/>Sign up with Google</Button>
    </div>
    <div>
    <Button variant="contained" sx={{width:'100%',display:'flex',gap:'10px'}}><FacebookIcon/>Sign up with Facebook</Button>
    </div>

   
    </Paper>
</div>
);
}

export default Signin;
