import "./visualize.css"
import IranMap from "../../Component/IranMap/iranMap.tsx";
import {useState} from "react";
import Citites_english from "../../dataMap/Cities_english.js"
import {Link} from "react-router-dom";

const Visualize = () => {
    const [minimize,setMinimize]=useState(false)
    const [hoverIndex,setHoverIndex]=useState(1)
    const uniqueRegions = [...new Set(Citites_english.map(item => item.region))];

    const uniqueProvinces = [...new Set(Citites_english.map(item => item.provinces))];
    const [openTag,setOpenTag]=useState(0)
    const [valuesTag,setValuesTag]=useState([])

    const uniqueProvinces2 = [...new Set(
        Citites_english
            .filter(item => item.region === valuesTag[0]) // Filter based on region
            .flatMap(item => Object.values(item)) // Flatten the array of arrays
    )];

    const handle_values =(value)=>
    {
        setValuesTag(prevValuesTag => [...prevValuesTag, value]);
    }

    return (
        <div className="vis-container">
            { !minimize?
            <div className="vis-menu">
                <div className="items-container">
                    <h2>Region</h2>
                    <div className="item" onClick={()=>{
                        if(openTag ===1) {
                            setOpenTag(0)
                        }
                        else {
                            setOpenTag(1)
                        }
                    }}>
                        <span>Choose Region</span>
                        <img src="./arrow_down.svg" alt="" width={16} height={16}/>

                    </div>
                    {  openTag===1 && (
                    <ul className="Region_container_vis">
                        <div className="search_box_vis">
                            <img src="./search.svg" alt="" width={20}/>
                            <input placeholder="search here..."/>
                        </div>
                        {

                            uniqueRegions.map((region,index) => (
                                    <li className={hoverIndex ===index?"active_hover":""} onMouseEnter={()=>(
                                        setHoverIndex(index)
                                    )}
                                    onClick={()=>{
                                    handle_values(region)
                                        setOpenTag(2)
                                    }}>
                                        {
                                            region
                                        }

                                    </li>
                            ))
                        }
                    </ul>
                    )
                    }
                </div>

                <div className="items-container">
                    <h2>Province</h2>
                    <div className="item" onClick={()=>{
                        if(openTag ===2) {
                            setOpenTag(0)
                        }
                        else {
                            setOpenTag(2)
                        }
                    }}>
                        <span>Choose Province</span>
                        <img src="./arrow_down.svg" alt="" width={16}/>
                    </div>

                    {  openTag===2 && (
                        <ul className="Region_container_vis">
                            <div className="search_box_vis">
                                <img src="./search.svg" alt="" width={20}/>
                                <input placeholder="search here..."/>
                            </div>
                            {

                                uniqueProvinces2.map((item,index) => (
                                    <li className={hoverIndex ===index?"active_hover":""} onMouseEnter={()=>(
                                        setHoverIndex(index)
                                    )}
                                        onClick={()=>{
                                            handle_values(item)
                                            setOpenTag(0)
                                        }}>
                                        {
                                            item
                                        }

                                    </li>
                                ))
                            }
                        </ul>
                    )
                    }
                </div>

                <div className="items-container">
                    <h2>City</h2>
                    <div className="item" onClick={()=>{
                        if(openTag ===3) {
                            setOpenTag(0)
                        }
                        else {
                            setOpenTag(3)
                        }
                    }}>
                    <span>Choose City</span>
                        <img src="./arrow_down.svg" alt="" width={16}/>
                    </div>

                    {  openTag===3 && (
                        <ul className="Region_container_vis">
                            <div className="search_box_vis">
                                <img src="./search.svg" alt="" width={20}/>
                                <input placeholder="search here..."/>
                            </div>
                            {
                                uniqueRegions.map((region,index) => (
                                    <li className={hoverIndex ===index?"active_hover":""} onMouseEnter={()=>(
                                        setHoverIndex(index)
                                    )}
                                        onClick={()=>{
                                            handle_values(region)
                                            setOpenTag(3)
                                        }}>
                                        {
                                            region
                                        }

                                    </li>
                                ))
                            }
                        </ul>
                    )
                    }

                </div>

                <div className="items-container">
                    <h2>Site</h2>
                    <div className="item" onClick={()=>{
                        if(openTag === 4) {
                            setOpenTag(0)
                        }
                        else {
                            setOpenTag(4)
                        }
                    }}>
                        <span>Choose Site</span>
                        <img src="./arrow_down.svg" alt="" width={16}/>
                    </div>
                </div>

                <div className="items-container">
                    <h2>Cell</h2>
                    <div className="item" onClick={()=>{
                        if(openTag ===5) {
                            setOpenTag(0)
                        }
                        else {
                            setOpenTag(5)
                        }
                    }}>
                        <span>Choose Cell</span>
                        <img src="./arrow_down.svg" alt="" width={16}/>
                    </div>
                </div>
                <button className="button_color">
                    Filter
                </button>
                <div className="minimize_container" onClick={()=>{
                    setMinimize(!minimize)
                }}>
                    <img src="./Minimize_button.svg" alt="" width={40} height={40}/>
                </div>

            </div> :
                <div className="vis-menu-minimize">
                    <div className="minimize_container-minimized" onClick={() => {
                        setMinimize(!minimize)
                    }}>
                        <img src="./Minimize_button.svg" alt="" width={40} height={40}/>
                    </div>
                </div>
            }
            <div className="map-visualize-container">
                <h2>Visualize</h2>
                <div className="map-google-container">
                    <IranMap/>
                </div>
            </div>
        </div>
    );
};

export default Visualize;