import './Menu.css';
import { menu } from '../../PersianMenu.ts';
import {useEffect, useState} from "react";
import { motion } from "framer-motion"
import Database from "../../exel/database.tsx";
import {abaali} from "../../database/SiteDAta/abaali.ts"
import {Link} from "react-router-dom";




const Menu = () => {
    const [open,setOpen]=useState(false)
    const [province,setProvince]=useState("")
    const [activeButtonId,setActiveButtonId]=useState(0)
    const [cities,setCities]=useState("")
    const [id,setId]=useState(10)
    const [filteredCellnames, setFilteredCellnames] = useState<string[]>([]);





    /* adding animation
     const variants:any={
         opened:{
             clipPath: "circle(1200px at 50px 50px)",
             transition: {
                 type: "spring",
                 stiffness: 20,
             }
         },
         closed:{
             clipPath:"circle(30px at 50px 50px)",
             transition:{
                 delay:0.5,
                 type:"spring",
                 stiffness:400,
                 damping:40,
             }
         }
     };*/





/*

    return (
        <div className="menu" dir="rtl">
            {
                menu.map((items) => (
                    <div className="item" key={items.id}>
                        <div className="dropdown">
                            <div tabIndex={0} role={"button"} className="dropdown-title" onClick={(e)=>{
                                e.preventDefault()
                                if(items.title === 'استان' )
                                    setOpen(!open)
                                else
                                    setOpen(false)
                                console.log(open)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16">
                                    <path id="Rounded_Rectangle_13_copy_2" data-name="Rounded Rectangle 13 copy 2" fill="white"
                                          className="cls-1" d="M1,0H14a1,1,0,0,1,0,2H1A1,1,0,0,1,1,0ZM1,7H14a1,1,0,0,1,0,2H1A1,1,0,0,1,1,7Zm0,7H14a1,1,0,0,1,0,2H1A1,1,0,0,1,1,14Z"/>
                                </svg>
                                {items.title}
                            </div>

                            {(items.title === "استان" && open )? (
                                <motion.div className={`dropdown-content`}
                                    onClick={() => {
                                        console.log(items.id)
                                    }}>

                                {
                                                items.listItems.map((item) => (
                                                    <motion.a key={item.id} className="List-item" onClick={()=>{
                                                        setProvince(item.title)
                                                        setOpen(false)
                                                    }}>
                                                        {item.title}
                                                    </motion.a>
                                                ))
                                            }
                                    </motion.div>
                                    ):""
                                }

                            {(items.title === "شهر" && (province != "") ) ? (
                                <motion.div className={`dropdown-content ${activeButtonId === items.id ? 'open' : ''} `}>
                                    <motion.a></motion.a>
                                    {items.listItems.map((item) => (
                                        item.title === province ? (
                                            (item.listItem || []).map((list) => (
                                                <motion.a key={list.id} className="List-item" onClick={()=>{
                                                    setCities(list.title)
                                                    setProvince("")
                                                }}>
                                                    {list.title}

                                                </motion.a>
                                            ))
                                        ) : null
                                    ))}
                                </motion.div>
                            ) : ""}
                            {(items.title === "سایت" && cities ) ? (
                                <motion.div className={`dropdown-content ${activeButtonId === items.id ? 'open' : ''} `}>
                                    <a></a>
                                    {items.listItems.map((item) => (
                                        item.title === cities ? (
                                            (item.listItem || []).map((list) => (
                                                <a href={`/sites/${list.id}`} key={list.id} className="List-item" >
                                                    {list.title}
                                                </a>
                                            ))
                                        ) : null
                                    ))}
                                </motion.div>
                            ) : ""}
                        </div>
                    </div>
                ))
            }

        </div>
    );*/

    useEffect(()=>
        {
            const filteredArray = abaali.filter((item) => {
                return (
                    item.province.toLowerCase() === province.toLowerCase() &&
                    item.city.toLowerCase() === cities.toLowerCase()
                );
            });


            const cellnames = filteredArray.map((item) => item.cellname);

            setFilteredCellnames(cellnames)
        }
        ,[cities,province])

    return (
        <>
            <div className="menu" dir="rtl">
                <div tabIndex={0} role={"button"} className="dropdown-title" onClick={(e) => {
                    e.preventDefault()
                }}>
                    <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M8.502 9.999h-7.002c-0.552 0-1 0.447-1 1v20.001c0 0.552 0.448 1 1 1h7.002c0.553 0 1-0.448 1-1v-20c0-0.553-0.447-1-1-1zM7.502 30h-5.002v-18h5.002v18zM19.492 15.945h-7.003c-0.553 0-1 0.448-1 1v14.055c0 0.552 0.447 1 1 1h7.003c0.552 0 1-0.448 1-1v-14.055c0-0.553-0.447-1-1-1zM18.492 30h-5.003v-12.055h5.003v12.055zM30.5 0h-6.992c-0.552 0-1 0.448-1 1v30c0 0.552 0.448 1 1 1h6.992c0.552 0 1-0.448 1-1v-30c0-0.552-0.448-1-1-1zM29.5 30h-4.992v-28h4.992v28z"/>
                        </g>

                    </svg>
                    <Link to={"/"}> مدیریت دارایی</Link>
                </div>

                <div tabIndex={0} role={"button"} className="dropdown-title" onClick={(e) => {
                    e.preventDefault()
                    setId(0)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16">
                        <path id="Rounded_Rectangle_13_copy_2" data-name="Rounded Rectangle 13 copy 2" fill="white"
                              className="cls-1"
                              d="M1,0H14a1,1,0,0,1,0,2H1A1,1,0,0,1,1,0ZM1,7H14a1,1,0,0,1,0,2H1A1,1,0,0,1,1,7Zm0,7H14a1,1,0,0,1,0,2H1A1,1,0,0,1,1,14Z"/>
                    </svg>
                    <h2>انتخاب سایت</h2>
                </div>
                {

                    abaali.map((items, index) => (
                        <div className="item" key={index}>
                            <div className="dropdown">

                                {(id===0) ? (
                                    <div>
                                        <motion.div className={`dropdown-content`}
                                                    onClick={() => {
                                                        setOpen(true)
                                                    }}>
                                            <div className="dropdown-content-header">
                                                <h2 style={{ textAlign: 'center' }}>انتخاب استان</h2>
                                            </div>
                                            <motion.a className="List-item" onClick={() => {
                                                setProvince(items.province)
                                                setId(1)
                                            }}>
                                                {items.province}
                                            </motion.a>
                                        </motion.div>
                                    </div>
                                ) : ""}


                                {(id===1 && (province !="")) ? (
                                    <motion.div className={`dropdown-content`}
                                                onClick={() => {
                                                    setOpen(true)
                                                }}>
                                        <div className="dropdown-content-header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"
                                                 viewBox="0 0 24 24" style={{position:"absolute",top:"11px"}} onClick={()=>setId(0)}>
                                                <polygon
                                                    points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
                                            </svg>

                                            <h2>انتخاب شهر</h2>
                                        </div>
                                        <a className="List-item" onClick={() => {
                                            setCities(items.city)
                                            setId(2)
                                        }}>
                                            {items.city}
                                        </a>
                                    </motion.div>
                                ) : ""}


                                {(id === 2 && cities !== "") ? (
                                    <motion.div className={`dropdown-content-container`}>
                                        <div className="dropdown-content-header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"
                                                 viewBox="0 0 24 24" onClick={()=>setId(1)}>
                                                <polygon
                                                    points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
                                            </svg>

                                            <h2>انتخاب سایت</h2>
                                        </div>
                                        {filteredCellnames.map((cellname) => (
                                            <motion.a
                                                key={cellname}
                                                href={`/sites/${cellname}`}
                                                className="List-item"
                                                onClick={() => {
                                                    setProvince("");
                                                    setCities("");
                                                    setId(10);
                                                }}
                                            >
                                                <div>
                                                    <h3>{cellname}</h3>
                                                </div>
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                ) : ""}
                            </div>
                        </div>
                    ))
                }

            </div>
        </>)
};

export default Menu;
