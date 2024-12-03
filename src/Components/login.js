import Paper from '@mui/material/Paper';
import { Typography, TextField, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login =()=> {
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
    Navigate('/register');
      axios.post('http://localhost:3001/login',JSON.stringify(user),{headers:{"Content-Type":"application/json"}})
      .then((res)=>{
        alert('Login Successfully');
        console.log(res.data)})
      .catch((err)=>{console.log(err)})

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
    }}
  >
    <Paper
      sx={{
        width: "500px",
        height: "500px",
        borderRadius: "30px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        gap: "10px",
        backgroundColor: "transparent",
        fontWeight: "bold",
        border: "2px solid black",
        backdropFilter: "blur(5px)",
        boxShadow: "0px 0px 100px solid white",
      }}
      elevation={24}
    >
      <Typography variant="h5">Sign In</Typography>
      <Typography variant="p">Welcome ,please Sign in to Continue</Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        name="name"
        variant="outlined"
        fullWidth
        onChange={(event) => handlechange(event)}
      />
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
      />
      <Button variant="contained" onClick={handlelogin}>Sign In</Button>
      <a href="#" style={{ color: "black" }}>
        Forgot password
      </a>

      <Typography variant="h6">-------------- or -------------</Typography>
      <Typography variant="p">
        <a
          href="#"
          style={{
            color: "black",
            textDecoration: "none",
            border: "2px solid black",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <GoogleIcon></GoogleIcon>Sign in with Google
        </a>
      </Typography>
      <Typography variant="p">
        <a
          href="#"
          style={{
            color: "black",
            textDecoration: "none",
            border: "2px solid black",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <GitHubIcon></GitHubIcon>Sign in with Github
        </a>
      </Typography>

      <Typography variant="p">
        Don't have an account?
        <a href="/register" style={{ color: "black" }}>
          login
        </a>
      </Typography>
    </Paper>
  </div>
);
}

export default Login;
