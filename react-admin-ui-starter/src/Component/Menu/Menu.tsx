import React from 'react';
import './Menu.css';
import {Link, NavLink} from "react-router-dom";
import {menu} from '../../data';

const Menu = () =>
{
    return(
        <div className="menu">
            {
                menu.map((items) =>
                    (
                    <div className="item" key={items.id}>
                        <span className="title">{items.title}</span>
                        {
                            items.listItems.map((item)=>
                                (
                                    <Link to={item.url} className="List-item" key={item.id}>
                                        <img src={item.icon}/>
                                        <span className="ListItemTitle">{item.title}</span>
                                    </Link>
                                ))
                        }
                    </div>
                    ))
            }
        </div>
    )
};

export default Menu;