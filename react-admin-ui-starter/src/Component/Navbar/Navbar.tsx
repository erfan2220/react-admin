//@ts-nocheck
import './Navbar.css';
import {Link} from "react-router-dom";
import {useState, useRef, useEffect} from "react";

const Navbar = ({setLogin, setCount}) => {
    const [hambegermenu,setHambergermenu]=useState(false)
    const [settingsmobile,setSettingsmobile]=useState(false)
    const [tableIndex,setTableIndex]=useState(1)
    const [userProfile,setUserProfile]=useState(false)


    const newRef = useRef(null);
    const mobileRef = useRef(null);




    const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
        if (newRef.current && !newRef.current.contains(e.target)) {
            setHambergermenu(false)
        }
        if (mobileRef.current && !mobileRef.current.contains(e.target)) {
            setSettingsmobile(false)
        }
    };



    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    },[])









return(
    <div className="Navbar_container  z-50">
        {
            settingsmobile && (
                <div className="flex flex-col fixed  w-[100vw] h-[100vh]" >
                    <div className="flex flex-col gap-[28px] absolute  bottom-0 w-[100vw] justify-center
                        items-end bg-[#14141A] rounded-t-xl z-50 py-[28px] pl-[40px]" ref={mobileRef}>
                        <div className="flex flex-row-reverse gap-[28px] ">
                            <img src="./Lock2.svg" alt=""/>
                            <span>Change password</span>
                        </div>

                        <div className="flex flex-row-reverse gap-[28px]">
                            <img src="./Info (1).svg" alt=""/>
                            <span>About us</span>
                        </div>

                        <div className="flex flex-row-reverse gap-[28px]">
                            <img src="./SignOut.svg" alt=""/>
                            <span>Log out</span>
                        </div>

                    </div>
                </div>
            )
        }
        <div className="Navbar_wrapper">
            <div className="setting_navbar_container">
                <div className="logo_seacrh_container">
                    <div className="logo_container">
                        <img src="/navbar_logo.svg" alt=""/>
                    </div>
                    <div className="search_box_container">
                        <img src="/search.svg" alt=""/>
                        <input placeholder="Search here..."></input>
                    </div>

                </div>


                <div className="hamberger_menu">
                    <img className="hamberger_menu_svg" src="/List.png" alt="" onClick={()=>setHambergermenu(true)}/>
                    <img className="hamberger_config_svg" src="/Config-X.svg" alt=""/>
                    {
                     hambegermenu && (
                         <div className="flex  flex-col  items-end justify-between absolute left-0 top-0 bg-[#14141A]
                         w-[64%] h-[calc(100vh)] z-50 pl-[40px] pt-[32px] pb-[30px] " ref={newRef} >
                            <div className="flex flex-col items-end gap-[48px]">
                                 <img src="./menu_logo_mobile.svg" alt="" width={154}/>

                                 <div className="flex flex-col items-end gap-[24px]">
                                 <div className="item flex flex-row-reverse items-center gap-[28px]">
                                     <img src="./menu_mobile (1).svg" alt=""/>
                                     <span>Dashboard</span>
                                 </div>

                                 <div className="item flex flex-row-reverse items-center gap-[28px]">
                                     <img src="./menu_mobile (4).svg" alt=""/>
                                     <span>Inventory</span>
                                 </div>

                                 <div className="item flex flex-row-reverse items-center gap-[28px]">
                                     <img src="./menu_mobile (1).svg" alt=""/>
                                     <span>Config Management</span>
                                 </div>

                                 <div className="item flex flex-row-reverse items-center gap-[28px]">
                                     <img src="./menu_mobile (3).svg" alt=""/>
                                     <span>Asset</span>
                                 </div>

                                 <div className="item flex flex-row-reverse items-center gap-[28px]">
                                     <img src="./menu_mobile (2).svg" alt=""/>
                                     <span>Visualize</span>
                                 </div>
                             </div>
                            </div>



                                 <div className="flex flex-row-reverse items-center gap-[28px]" onClick={()=>{
                                     setSettingsmobile(true)
                                     setHambergermenu(false)
                                 }}>
                                     <img src="./Settings_svg.svg" alt="" />
                                     <span>Settings</span>
                                 </div>



                         </div>
                        )
                    }
                </div>


                <div className="profile_langauge_box">
                    <div className="langauge_content_box">
                    <img src="/Mask%20group.svg" alt=""/>
                        <p>English</p>
                        <img src="/CaretDown.svg" alt=""/>
                    </div>
                    <img className="user_profile_part" src="/user_profile.svg" alt="" onClick={()=>
                        setUserProfile(!userProfile)}/>
                    {
                        userProfile &&
                        (
                            <div className="User_Profile_Items">
                                <div className="User_Profile_Item">
                                    <img src="./Lock1.svg" alt=""/>
                                    <span>Change Password</span>
                                </div>

                                <div className="User_Profile_Item">
                                    <img src="./Info1.svg" alt=""/>
                                    <span>About</span>
                                </div>

                                <div className="User_Profile_Item" onClick={()=>
                                {
                                    setLogin(false)
                                    setCount(1)
                                }}>
                                    <img src="./SignOut1.svg" alt=""/>
                                    <span>Log Out</span>
                                </div>
                            </div>
                        )
                    }

                    <Link to="/Settings">
                        <img src="/Gear.svg" alt=""/>
                    </Link>
                </div>
            </div>

            <ul className="menu_navbar">
                <li className={tableIndex === 1 ? "active" : ""} onClick={() => setTableIndex(1)}>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li className={tableIndex === 2 ? "active" : ""} onClick={() => setTableIndex(2)}>
                    <Link to="/Inventory">
                        Inventory
                    </Link>
                </li>
                <li className={tableIndex === 3 ? "active" : ""} onClick={() => setTableIndex(3)}>
                    <Link to="/ConfigM">
                        Config Management
                    </Link>
                </li>
                <li className={tableIndex === 4 ? "active" : ""} onClick={() => setTableIndex(4)}>
                    <Link to="/asset">
                        Asset
                    </Link>
                </li>
                <li className={tableIndex === 5 ? "active" : ""} onClick={() => setTableIndex(5)}>
                    <Link to="/Visualize">
                        Visualize
                    </Link>
                </li>
            </ul>
        </div>
    </div>
)
}

export default Navbar;