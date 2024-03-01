import React from `react`
import "./Header.css"
import {link} from "react-route-dom";
import{
    Home,
    HomeOutlined,
    Add,
    AddOutlined,
    SearchOutlined,
    Search,
    AccountCircle,
    AccountCircleOutlined,
} from "@mui/icons-material"; 

const Header = () =>{

    const[tab,setTab] = useState(window.location.pathname);


    return(
        <div className="header">

        <link to="/" onClick={() => setTab("/")}>
            {
                tab ==="/"?<Home style={{color:"black"}}/>:<HomeOutlined/>
            }
        </link>

        <link to="/newPost"  onClick={() => setTab("/ newpost")}>
        tab ==="/newpost"?<Add style={{color:"black"}}/>:<AddOutlined/>
        </link>

        <link to="/search"  onClick={() => setTab("/ search")}>
        tab ==="Search"?<Search style={{color:"black"}}/>:<SearchOutlined/>
        </link>

        <link to="account"  onClick={() => setTab("/ account")}>
        tab ==="/account"?<AccountCircle style={{color:"black"}}/>:<AccountCircleOutlined/>
        </link>

        </div>
    );
}

export default Header