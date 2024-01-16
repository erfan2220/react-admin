import './Menu.css';
import { menu } from '../../PersianMenu.ts';
import { useState } from "react";


const Menu = () => {
    const [activeButtonId, setActiveButtonId] = useState(null);
    const [province,setProvince]=useState("")
    /**
     * const [city,setCity]=useState("")
     */
    const handleButton = (id:any) => {
        setActiveButtonId(id === activeButtonId ? null : id);
    };

    return (
        <div className="menu" dir="rtl">
            {
                menu.map((items) => (
                    <div className="item" key={items.id}>
                        <div className={`dropdown ${activeButtonId === items.id ? 'open' : 'open'}`}>
                            <div  tabIndex={0} role={"button"} className="dropdown-title justify-end btn m-1" onClick={() => handleButton(items.id)}>
                                {items.title}
                             </div>

                            {items.title === "استان" ? (
                                <select tabIndex={0} className="dropdown-content z-[1] menu p-2 w-54  shadow-lg  rounded-box w-52"
                                        onChange={(e) => {
                                            setProvince(e.target.value)}}>
                                    <option selected disabled></option>
                                    {
                                        items.listItems.map((item) => (
                                            <option key={item.id} className="List-item">
                                                {item.title}
                                            </option>
                                        ))
                                    }
                                </select>
                            ):""
                            }
                            {items.title === "شهر" ? (
                                <select tabIndex={0} className="dropdown-content z-[1] menu p-2 w-54 shadow-lg rounded-box w-52">
                                    <option selected disabled></option>
                                    {items.listItems.map((item) => (
                                        item.title === province ? (
                                            (item.listItem || []).map((list) => (
                                                <option key={list.id} className="List-item">
                                                    {list.title}
                                                </option>
                                            ))
                                        ) : null
                                    ))}
                                </select>
                            ) : ""}
                            {items.title === "سایت" ? (
                                <select tabIndex={0} className="dropdown-content z-[1] menu p-2 w-54  shadow-lg  rounded-box w-52">
                                    <option selected disabled></option>
                                    {
                                        items.listItems.map((item) => (
                                            <option key={item.id} className="List-item">
                                                {item.title}
                                            </option>
                                        ))
                                    }
                                </select>
                            ):""
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Menu;
