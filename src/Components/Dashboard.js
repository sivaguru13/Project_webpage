
import { useState, useEffect, useMemo } from "react";
import "./Dashboard.css";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Divider, rgbToHex } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Person2Icon from '@mui/icons-material/Person2';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ChecklistIcon from '@mui/icons-material/Checklist';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

// Recharts for Charts
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip, ResponsiveContainer,PieChart, Pie,Label, LabelList  } from "recharts";
import { Box, TrendingUp } from "lucide-react";


import {
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

function Dashboard() {
    const [step, setStep] = useState(1); // Controls which page/section to display
    const [name, setName] = useState("");
    const [activeSection, setActiveSection] = useState("addProduct"); // Default section
    const [products, setProducts] = useState([]); // State for managing product list
    const [showConfirmation, setShowConfirmation] = useState(false);
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

    // document.addEventListener("DOMContentLoaded", () => {
    //   document.getElementById("msg").innerHTML = "Hello!";
    // });
    

    useEffect(() => {
    // Runs when the component mounts
    const name = localStorage.getItem('userName');
    if (name) {
        setName(name);
        
    }
    }, []);
    
       // this for conformation message 
    const logOut = () => {
      setShowConfirmation(true); // Open confirmation dialog
  };

  const handleConfirm = () => {
      setShowConfirmation(false); // Close dialog
      localStorage.removeItem("userName");
      navigate('/signin'); // Navigate to sign-in
  };

  const handleCancel = () => {
      setShowConfirmation(false); // Close dialog
  };

 


    //menubar
    const menuClick = () =>{
      // navigate('/signin')
      if(document.getElementById('sidebar').style.display==="flex"){
        document.getElementById('sidebar').style.display="none"
        document.getElementById('rightside').style.width="100%"
        document.getElementById('menuicons').style.display="flex"
      }
      else{
        document.getElementById('sidebar').style.display="flex"
        document.getElementById('menuicons').style.display="none"
      }
    }


      // Dummy data for the chart
  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];

    // Define different colors for each bar
    const barColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1", "#a4de6c"];
  const chartVistorData = [
    { browser: "chrome", visitors: 275, fill: "#4285F4" }, // Chrome Color
    { browser: "safari", visitors: 200, fill: "#FFCD00" }, // Safari Color
    { browser: "firefox", visitors: 287, fill: "#FF7139" }, // Firefox Color
    { browser: "edge", visitors: 173, fill: "#0078D7" }, // Edge Color
    { browser: "other", visitors: 190, fill: "#9E9E9E" }, // Other Color
  ];


    //dummy visitors
    const totalVisitors = useMemo(
        () => chartVistorData.reduce((acc, curr) => acc + curr.visitors, 0),
        []
      );
    


    return (
    <div className="whole">
      {/* Sidebar */}
      <Button onClick={menuClick} style={{height:"30px",padding:"0px"}}><MenuIcon className="menu-icon" style={{position:"absolute",left:"10",top:"10"}} /></Button>
      <div id="menuicons">
      <Button onClick={() => setStep(1)} sx={{color:"red"}}><HomeIcon/></Button>
      <Button onClick={() => setStep(2)} sx={{color:"red"}}><AddShoppingCartIcon/></Button>
      <Button onClick={() => setStep(3)} sx={{color:"red"}}><ChecklistIcon/></Button>
      <Button onClick={() => setStep(4)} sx={{color:"red"}}><CollectionsBookmarkIcon/></Button>
      </div>
        <div id="sidebar" >
        
        <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/770/original/profile-icon-design-free-vector.jpg"
            alt="Profile"
        />
        <h1 id="msg">{name ? `Welcome ${name}` : 'Loading...'}</h1>
       
        <div className="nav-left">
          {/* Buttons to change step */}
            <button onClick={() => setStep(1)} className="butns">
            Home
            </button>
            <button onClick={() => setStep(2)} className="butns">
            Add Product
            </button>
            <button onClick={() => setStep(3)} className="butns">
            Listings
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
        {/* confomation alert message for logout */}
        {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to logout?</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      )}

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
            </div >
            <div style={{display:"flex",marginTop:"10px"}}>
            <div className="chart-card">
              <h2>Monthly Product Sale</h2>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tickFormatter={(value) => value.slice(0, 3)} />
                  <Tooltip />
                   {/* Apply dynamic colors to each bar */}
          <Bar
            dataKey="desktop"
            fill="#8884d8"
            barSize={50}
            // Set custom colors
            shape={(props) => {
              const { x, y, width, height, index } = props;
              return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={barColors[index % barColors.length]}
                />
              );
            }}
          />
                </BarChart>
              </ResponsiveContainer>
              <div className="chart-footer">
                Trending up by 5.2% this month <TrendingUp style={{ color: "green" }} />
                <p> Showing total Revenue for the last 6 months</p>
              </div>
              </div>





            
              <Card sx={{ maxWidth: 400,margin: "20px auto",padding: "10px", backgroundColor: 'rgb(217, 222, 222, 1)',boxShadow:"none"}}>
              <CardHeader
              title={<Typography variant="h6" align="center"></Typography>}
              subheader={<Typography variant="body2" align="center">Jan - June</Typography>}
              />
              <Divider />
              <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
              <PieChart width={300} height={250}>
            <Pie
            data={chartVistorData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            outerRadius={100}
            strokeWidth={0}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            />
            <svg >
            <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "18px", fontWeight: "bold", fill: "#333" }}
            >
            <tspan
            style={{
            fill: totalVisitors > 300 ? "green" : "red",
            fontSize: "24px",
            fontWeight: "bold",
            }}
            >
            {totalVisitors}
    </tspan>
  </text>
</svg>

          
            <Tooltip />
            </PieChart>
            </div>
            
          </CardContent>
          
        </Card>
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
