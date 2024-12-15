// import { useState } from "react";
// import "./Dashboard.css"
// function Dashboard(){
//     const [step,setStep]=useState(1);



//     window.addEventListener('load',function(){
//         let email= localStorage.getItem('email');
//         if(email){
//             document.getElementById('msg').innerHTML="Welcome " + email;
//         }
//     });
//     const logOut = () =>{
//         localStorage.removeItem('email');
//         window.location.href='index.html';
//     }
//     const pageLoad = () =>{}
//        // window.addEventListener('load',function(){
//     //     document.getElementById('rightside').innerHTML="<object style='height:100%; width:100%;' type=text/html data=home.html></object>"
//     // });
//     // const pageLoad = (page) =>{
//     //     switch(page){
//     //         case 'home':
//     //             document.getElementById('rightside').innerHTML="<object style='height:100vh;width:100%' type=text/html data=home.html></object>";
//     //             break;
//     //         case 'about':
//     //             document.getElementById('rightside').innerHTML="<object style='height:100vh' type=text/html data=about.html></object>";
//     //             break;
//     //         case 'service':
//     //             document.getElementById('rightside').innerHTML="<object style='height:100vh' type=text/html data=service.html></object>";
//     //             break;
//     //         case 'payment':
//     //             document.getElementById('rightside').innerHTML="<object style='height:100vh' type=text/html data=payment.html></object>";
//     //             break;
//     //         default:
//     //             alert('pagenot found');
//     //     }
//     // }
//     return(
//         {step === 1 &&(
//     <div class="whole">
//         <div class="sidebar">
//             <img src="https://static.vecteezy.com/system/resources/previews/005/544/770/original/profile-icon-design-free-vector.jpg" alt=""/>
//             <h1 id="msg">Wecome</h1>
//             <div class="nav-left"><button onclick={pageLoad('home')} class="butns">Home</button><button onclick={pageLoad('about')} class="butns">About</button><button onclick={pageLoad('service')} class="butns">Service</button><button onclick={pageLoad('payment')}  class="butns">Payment</button></div>
//         </div>
//         <button onclick={logOut} id="but1"><i class="fa-solid fa-right-from-bracket"></i> logout</button>
//         <div id="rightside">
            
//         </div>
//     </div>
//     )}
//     );
// }

// export default Dashboard;
import { useState, useEffect } from "react";
import "./Dashboard.css";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Person2Icon from '@mui/icons-material/Person2';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Dashboard() {
    const [step, setStep] = useState(1); // Controls which page/section to display
    const [email, setEmail] = useState("");
    const [activeSection, setActiveSection] = useState("addProduct"); // Default section
    const [products, setProducts] = useState([]); // State for managing product list
    const navigate=useNavigate();


    const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
        id: products.length + 1,
        name: event.target.name.value,
        price: event.target.price.value,
        category: event.target.category.value,
    };
    setProducts([...products, newProduct]);
    event.target.reset(); // Reset form fields
    alert("Product added successfully!");
    };


    useEffect(() => {
    // Runs when the component mounts
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
        setEmail(storedEmail);
    }
    }, []);

    //menubar
    const menuClick = () =>{
      // navigate('/signin')
      if(document.getElementById('sidebar').style.display==="flex"){
        document.getElementById('sidebar').style.display="none"
        document.getElementById('rightside').style.width="100%"
      }
      else{
        document.getElementById('sidebar').style.display="flex"
      }
    }

    const logOut = () => {
    localStorage.removeItem("email");
    navigate('/signin');
    };

    return (
    <div className="whole">
      {/* Sidebar */}
     <Button onClick={menuClick} style={{height:"30px",padding:"0px"}}><MenuIcon className="menu-icon" style={{position:"absolute",left:"10",top:"10"}} /></Button>
     
        <div id="sidebar" >
        
        <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/770/original/profile-icon-design-free-vector.jpg"
            alt="Profile"
        />
        <h1 id="msg">Welcome {email}</h1>
       
        <div className="nav-left">
          {/* Buttons to change step */}
            <button onClick={() => setStep(1)} className="butns">
            Home
            </button>
            <button onClick={() => setStep(2)} className="butns">
            Add Product
            </button>
            <button onClick={() => setStep(3)} className="butns">
            Manage Listings
            </button>
            <button onClick={() => setStep(4)} className="butns">
            SalesReports
            </button>
            
        </div>
        </div>

      {/* Logout Button */}
        <button onClick={logOut} id="logout-btn">
        <LogoutIcon style={{color:"black"}}/>Logout
        </button>

      {/* Right Side Content */}
        <div id="rightside">
        {step === 1 && 
        <div>
            <div className="wholecontent">
              <div className="dashboards content1">
                <h3 style={{color: "rgb(59, 103, 9, 1)"}}><div className="icondiv icn1"><ShoppingCartIcon style={{fontSize:"2pc"}}/></div>Orders</h3></div>
              <div  className="dashboards content2">
              <h3 style={{color:"rgb(6, 7, 96, 1)"}}><div className="icondiv icn2"><ShoppingBagIcon style={{fontSize:"2pc"}}/></div>Inventory</h3></div>
              <div  className="dashboards content3">
              <h3 style={{color:"rgb(6, 7, 96, 1)"}}><div className="icondiv icn3">< Person2Icon  style={{fontSize:"2pc"}}/></div> Customer</h3></div>
              <div  className="dashboards content4">
              <h3 style={{color:"rgb(119, 5, 14, 1)"}}><div className="icondiv icn4"><CurrencyRupeeIcon style={{fontSize:"2pc"}}/></div> Revenue</h3></div>
            </div>
        </div>}
        {step === 2 && 
            <div>
            <div className="seller-dashboard">
            <h1>Seller Dashboard</h1>
            <div style={{width:"75%"}}>
            <div className="content">
            {activeSection === "addProduct" && (
            <div className="add-product">
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <label>
                Product Name:
                <input type="text" name="name" required />
                </label>
                <label>
                Price:
                <input type="number" name="price" required />
                </label>
                <label>
                Category:
                <input type="text" name="category" required />
                </label>
                <button type="submit">Add Product</button>
            </form>
            </div>
            )}
            
            
        </div>
        </div>
    {/* </div> */}
    </div>  
            </div>}
        {step === 3 && 
            <div>
            <div className="seller-dashboard">
        <h1>Seller Dashboard</h1>
        {/* <div style={{display:"flex",width:"100%"}}> */}
        {/* <div className="navigation">
        <button onClick={() => setActiveSection("addProduct")}>Add Product</button>
        <button onClick={() => setActiveSection("manageListings")}>Manage Listings</button>
        <button onClick={() => setActiveSection("salesReports")}>Sales Reports</button>
        </div> */}
        <div style={{width:"75%"}}>
        <div className="content">
        {activeSection === "manageListings" && (
          <div className="manage-listings">
            <h2>Manage Listings</h2>
            {products.length > 0 ? (
              <ul>
                {products.map((product) => (
                  <li key={product.id}>
                    {product.name} - ${product.price} - {product.category}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products listed yet.</p>
            )}
          </div>
        )}
    </div>
    </div>
{/* </div> */}
</div> 
</div> 
}
        {step === 4 && 
            <div>
            <div className="seller-dashboard">
            <h1>Seller Dashboard</h1>
            <div style={{width:"75%"}}>
            <div className="content">
            {activeSection === "salesReports" && (
          <div className="sales-reports">
            <h2>Sales Reports</h2>
            <p>Sales reports feature coming soon!</p>
          </div>
        )}
            </div>
            </div>
            </div>
            </div>
        }
        </div>
    </div>
    );
}

export default Dashboard;
