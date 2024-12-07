import Paper from '@mui/material/Paper';
import GoogleIcon from '@mui/icons-material/Google';
import { Typography,TextField,Button,Link} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





    const Signup=()=>{
    const navigate=useNavigate();
    const[user,setUser]=useState({"userName":"","userEmail":"", "userPassword":"","confirmPassword":""});

    //input changes and update
    const handleChange = (e) =>{
      const {name,value}=e.target;
      setUser((prevState) =>({
        ...prevState,
        [name]:value,
      }));
    }
       // Handle form submission
    const handleSignup = () => {
    if (user.userPassword !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
   
    navigate('/signin');

    localStorage.getItem("userName")
    // Save to localStorage
    localStorage.setItem("userName", user.userName);
    localStorage.setItem("userEmail", user.userEmail);
    localStorage.setItem("userPassword", user.userPassword); // Avoid saving plain passwords in production

    alert("Sign-up successful! User data saved in localStorage.");
  };
      


    return(
        <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke'}}>
    <Paper sx={{height:'450px',width:'350px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px',padding:'20px'}} elevation={3} >
      <Typography variant='h4' sx={{fontFamily:'arial'}}>Sign up</Typography>
      <TextField id="outlined-basic" label="Username" variant="outlined" name="userName"
          onChange={handleChange} 
        fullWidth/>
      <TextField id="outlined-basic" label="Email" variant="outlined" name="userEmail"
      onChange={handleChange} 
      fullWidth/>

      <div style={{display:'flex',felxDirection:'row',gap:'10px'}}>
      <TextField id="outlined-basic" label="Password" variant="outlined" name="userPassword" type='password'
            onChange={handleChange} 
            fullWidth/>
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" name="confirmPassword" type='password'
            onChange={handleChange} 
            fullWidth/>
      </div>
      <Button variant="contained"  onClick={handleSignup} sx={{width:'100%'}}>Sign up</Button>
      <Typography >Already have an account?  <Link href='/login'>Log in</Link></Typography>
      <Typography>or</Typography>
      
      <Button variant="contained" sx={{width:'100%',display:'flex',gap:'10px'}}><GoogleIcon/>Sign up with Google</Button>
      
      </Paper>
  </div>
    );
}
export default Signup;