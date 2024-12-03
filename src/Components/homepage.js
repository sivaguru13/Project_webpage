import { Button } from "@mui/material";
function Homepage(){
    return(
        <div style={{height:'100%'}}>
            <div className="leftside">
                <img></img>
                <h1>Welcom to Dashboard</h1>
            </div>
            <div>
                <Button variant="contained">Buy</Button>
                <Button variant="contained">Sale</Button> 
            </div>
            
            
        </div>
    );

}

export default Homepage;