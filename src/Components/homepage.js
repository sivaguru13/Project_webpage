import { Button } from "@mui/material";
import './Homepage.css';
import { useNavigate } from "react-router-dom";

function Homepage(){

    //
    window.addEventListener('load',function(){
        let email= localStorage.getItem('email');
        if(email){
            document.getElementById('msg').innerHTML="Welcome " + email;
        }
    });
    const navigate = useNavigate();
     const logOut =()=>{
        localStorage.removeItem('email');
        navigate("/signin");
        alert("Logout Succesfully");

     }

    return(
        <div className="whole">
        <div className="sidebar">
            <img src="https://static.vecteezy.com/system/resources/previews/005/544/770/original/profile-icon-design-free-vector.jpg" alt=""/>
            <h1 id="msg">Wecome</h1>
            <div className="nav-left"><Button onclick="pageLoad('home')" className="butns">Home</Button><Button onclick="pageLoad('about')" className="butns">About</Button><Button onclick="pageLoad('service')" className="butns">Service</Button><Button onclick="pageLoad('payment')" class="butns">Payment</Button></div>
        </div>
        <Button onClick={logOut} id="but1">logout</Button>
        <div id="rightside">
            
        </div>
    </div>
    );

}

export default Homepage;