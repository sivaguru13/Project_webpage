import './forgotPassword.css';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Typography,TextField,Button} from '@mui/material';

const ForgotPassword=()=>{
    const [email, setEmail]=useState('');
    const [generatedCode, setGeneratedCode]=useState('');
    const [inputCode, setInputCode]=useState('');
    const [step, setStep]=useState(1);
    const [message, setMessage]=useState('');

    //Generate a 6 digit random number
    const generateCode=()=>Math.floor(100000 + Math.random()*900000);

    //handle send code to email (Send code button)
    const handleSendCode=()=>{
        if(!email){
            setMessage('Please enter a valid email.');
            return;
        }

        const randomCode=generateCode();
        setGeneratedCode(randomCode);
        localStorage.setItem('resetCode',randomCode);// store a code to localStorage
        setMessage('A code has been send to your email');
        setStep(2);
    }
    const handleVerifyCode=()=>{
        const storedCode=localStorage.getItem('resetCode');
        if(inputCode === storedCode){
            setMessage('Code verified Access granted');
            setStep(3);
            localStorage.removeItem('resetCode');

        }
        else{
            setMessage('Invalid Code');
        }
    }




return(
    <div className='Container'>
        <Paper  sx={{width:'350px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px',padding:'20px'}} elevation={3} >
      <Typography variant='h4' sx={{fontFamily:'arial'}}>Forgot Password</Typography>
        {step === 1 &&(
            <>
                <TextField 
                id="outlined-basic" 
                label="Enter your Email to send code" 
                variant="outlined" 
                name="Email" 
                type='email'
                onChange={(e)=>setEmail(e.target.value)}
                fullWidth/>
                <Button variant="contained" sx={{width:'100%'}} onClick={handleSendCode} >Send Code</Button>
            </>
        )}
        {step ===2 &&(
            <>
                
                <TextField
                 id="outlined-basic" 
                 label="Enter the code"
                variant="outlined" 
                name="Number"
                type='number'
                onChange={(e)=>setInputCode(e.target.value)}
                fullWidth/>
                <Button variant="contained" sx={{width:'100%'}}  onClick={handleVerifyCode}>verify</Button>
            </>

        )}
        {step === 3 && <p>Access granted! You can now reset your password.</p>}
        {message && <p>{message}</p>}
        </Paper>

    </div>

);
}
export default ForgotPassword;