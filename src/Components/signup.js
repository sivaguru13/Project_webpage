import Paper from '@mui/material/Paper';
import GoogleIcon from '@mui/icons-material/Google';
import { Typography,TextField,Button,Link} from '@mui/material';
import { useState } from 'react';





    const Signup=()=>{



    const[user,setUser]=useState({"userName":"","userEmail":"", "userPassword":"","confirmPassword":""});
    console.log(user);
    const handleChange=(event)=>{
      // console.log(event);
      // console.log(event.target.value);
      // console.log(event.target.name);
      if(event.target.name==='text'){
        setUser({...user,userName:event.target.value})
      }
      if(event.target.name==='email'){
        setUser({...user,userEmail:event.target.value})
      }
      if(event.target.name==='password'){
        setUser({...user,userPassword:event.target.value})
      }
      if(event.target.name==='confirmPassword'){
        setUser({...user,confirmPassword:event.target.value})
      }
      // if(password.event.target.value===confirmPassword.target.value){
      //   console.log('password match');
      // }
      // else{
      //   console.log('password not matched');
        
      // }
  
}
    return(
        <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke'}}>
    <Paper sx={{height:'450px',width:'350px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px',padding:'20px'}} elevation={3} >
      <Typography variant='h4' sx={{fontFamily:'arial'}}>Sign up</Typography>
      <TextField id="outlined-basic" label="Username" variant="outlined" name="text"
          onChange={(event)=>handleChange(event)} 
        fullWidth/>
      <TextField id="outlined-basic" label="Email" variant="outlined" name="email"
      onChange={(event)=>handleChange(event)} 
      fullWidth/>

      <div style={{display:'flex',felxDirection:'row',gap:'10px'}}>
      <TextField id="outlined-basic" label="Password" variant="outlined" name="password"
            onChange={(event)=>handleChange(event)} 
            fullWidth/>
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" name="confirmPassword"
            onChange={(event)=>handleChange(event)} 
            fullWidth/>
      </div>
      <Button variant="contained" sx={{width:'100%'}}>Sign up</Button>
      <Typography >Already have an account?  <Link href='/login'>Log in</Link></Typography>
      <Typography>or</Typography>
      
      <Button variant="contained" sx={{width:'100%',display:'flex',gap:'10px'}}><GoogleIcon/>Sign up with Google</Button>
      
      </Paper>
  </div>
    );
}
export default Signup;