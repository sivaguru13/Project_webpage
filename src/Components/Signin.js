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
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setCredentials((prevState) => ({
        ...prevState,
        [name]: value,
    }));
    setErrors((prevState) => ({
        ...prevState,
        [name]: "", // Clear errors as user types
    }));
    }
    // vadidation for SignIn
    
    
        



    const handleSignin = () => {
        const validationErrors = validate();

   // Ensure validationErrors is always an object
   if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

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
          
            // localStorage.setItem(name)
          // Redirect to dashboard or another page
        } else {
            // alert("Invalid email or password!");
            document.getElementById('errormessage').style.display="flex";

        }
        };

        // validation logic 
        const validate = () => {
            const newErrors = {};
        
            // Email validation
            if (!credentials.email.trim()) {
            newErrors.email = "Email is required.";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(credentials.email)) {
            newErrors.email = "Enter a valid email address.";
            } 
             
        
            // Password validation
            if (!credentials.password.trim()) {
              newErrors.password = "Password is required.";
            }
            else if (credentials.password.length < 6) {
                newErrors.Password = "Password must be at least 6 characters.";
              }
        return newErrors;
    }


return (
    <div
    style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      
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
        error={!!errors.email}
        helperText={errors.email}
        value={credentials.email}
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
        error={!!errors.password}
        helperText={errors.password}
        value={credentials.password}
    />
    <div id='errormessage' style={{display:"none",color:"red"}}>Invalid Email or Password</div>
    <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
        
 <Button variant="contained" onClick={handleSignin}>Sign In</Button>
    <a href="#">
        Forgot password
    </a>
    </div>
   
    <Typography variant="p">
        Don't have an account?
        <a href="/signup" style={{margin:"5px",textDecoration:"none" }} >
        Signup
        </a>
    </Typography>
    <Typography variant="h6">-------------- or -------------</Typography>
   
    <Button variant="contained" sx={{display:'flex',gap:'10px'}} fullWidth><GoogleIcon/>Sign up with Google</Button>
   
   
    <Button variant="contained" sx={{display:'flex',gap:'10px'}} fullWidth><FacebookIcon/>Sign up with Facebook</Button>
    

   
    </Paper>
</div>
);
}

export default Signin;
