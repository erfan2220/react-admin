import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () =>
    (
        <div className="Navbar_container">
            <div className="Navbar_wrapper">
           <div className="setting_navbar_container">
               <div className="logo_seacrh_container">
                   <div className="logo_container">
                       <img src="/navbar_logo.svg" alt=""/>
                   </div>
                   <div className="search_box_container">
                       <img src="/search.svg" alt=""/>
                       <p>Search here...</p>
                   </div>
               </div>
               <div className="profile_langauge_box">
                   <div className="langauge_content_box">
                       <img src="/Mask%20group.svg" alt=""/>
                        <p>English</p>
                       <img src="/CaretDown.svg" alt=""/>
                   </div>
                   <img src="/user_profile.svg" alt=""/>
                   <img src="/Gear.svg" alt=""/>
               </div>
           </div>
            <ul className="menu_navbar">
                   <li>
                       <Link to="/dashboard">
                       Dashboard
                       </Link>
                   </li>
                   <li>Inventory</li>
                   <li>Config Management</li>
                <li>
                    <Link to="/asset">
                        Asset
                    </Link>
                </li>
                <li>Visualize</li>
            </ul>
            </div>
        </div>
    );

export default Navbar;