import Paper from '@mui/material/Paper';
import GoogleIcon from '@mui/icons-material/Google';
import { Typography,TextField,Button,Link} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





    const Signup=()=>{
    const navigate=useNavigate();
    const[user,setUser]=useState({"userName":"","userEmail":"", "userPassword":"","confirmPassword":""});
    const [errors, setErrors] = useState({});
    //input changes and update
    const handleChange = (e) =>{
      const {name,value}=e.target;
      setUser((prevState) =>({
        ...prevState,
        [name]:value,
      }));
      setErrors((prevState) => ({
        ...prevState,
        [name]: '', // Clear errors as user types
      }));
    }
// this is for validation logic 
    const validate = () => {
      const newErrors = {};
  
      if (!user.userName.trim()) {
        newErrors.userName = 'Username is required.';
      }
  
      if (!user.userEmail.trim()) {
        newErrors.userEmail = 'Email is required.';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.userEmail)
      ) {
        newErrors.userEmail = 'Enter a valid email address.';
      }
  
      if (!user.userPassword) {
        newErrors.userPassword = 'Password is required.';
      } else if (user.userPassword.length < 6) {
        newErrors.userPassword = 'Password must be at least 6 characters.';
      }
  
      if (user.userPassword !== user.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
      }
  
      return newErrors;
    };

       // Handle form submission
    const handleSignup = () => {
      const validationErrors = validate();

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
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
    <Paper sx={{width:'350px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px',padding:'20px'}} elevation={3} >
      <Typography variant='h4' sx={{fontFamily:'arial'}}>Sign up</Typography>
      <TextField id="outlined-basic" label="Username" variant="outlined" name="userName" value={user.userName}
          onChange={handleChange}
          error={!!errors.userName}
          helperText={errors.userName}
        
        fullWidth/>
      <TextField id="outlined-basic" label="Email" variant="outlined" name="userEmail" type="email" value={user.userEmail}
          onChange={handleChange}
          error={!!errors.userEmail}
          helperText={errors.userEmail}
    
      fullWidth/>

      <div style={{display:'flex',felxDirection:'row',gap:'10px'}}>
      <TextField id="outlined-basic" label="Password" variant="outlined" name="userPassword" type="password" value={user.userPassword}
          onChange={handleChange}
          error={!!errors.userPassword}
          helperText={errors.userPassword}
            fullWidth/>
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" name="confirmPassword" type="password"
          value={user.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
            fullWidth/>
      </div>
      <Button variant="contained"  onClick={handleSignup} sx={{width:'100%'}}>Sign up</Button>
      <Typography >Already have an account?  <Link href='/signin'>Log in</Link></Typography>
      <Typography>or</Typography>
      
      <Button variant="contained" sx={{width:'100%',display:'flex',gap:'10px'}}><GoogleIcon/>Sign up with Google</Button>
      
      </Paper>
  </div>
    );
}
export default Signup;