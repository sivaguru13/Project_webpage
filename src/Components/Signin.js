import Paper from '@mui/material/Paper';
import { Typography, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin =()=> {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        });

    const navigate = useNavigate();
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setCredentials((prevState) => ({
        ...prevState,
        [name]: value,
    }));
    }


    const handleSignin = () => {
        // Retrieve stored data from localStorage
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");
    
        // Check credentials
        if (
            credentials.email === storedEmail &&
            credentials.password === storedPassword
        ) {
            alert("Sign-in successful!");
            navigate("/home");
          // Redirect to dashboard or another page
        } else {
            alert("Invalid email or password!");
        }
        };



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
        id="email"
        className="email"
        label="Email"
        name="email"
        variant="outlined"
        fullWidth
        onChange={handleChange}
    />
    <TextField
        id="password"
        className="password"
        label="Password"
        name="password"
        variant="outlined"
        fullWidth
        type='password'
        onChange={handleChange}
    /><div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
 <Button variant="contained" onClick={handleSignin}>Sign In</Button>
    <a href="#" style={{ color: "black" }}>
        Forgot password
    </a>
    </div>
   
    <Typography variant="p">
        Don't have an account?
        <a href="#x" style={{ color: "black",margin:"5px" }} >
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
