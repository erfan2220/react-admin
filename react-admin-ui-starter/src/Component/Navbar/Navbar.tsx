import React from 'react';
import './Navbar.css';

const Products = () =>
    (
        <div className="Navbar">
            <div className="logo">
                <img src="logo.svg" alt="logo"/>
                <p>Admin-page</p>
            </div>
            <div className="icons-container">
                <img src="search.svg"></img>
                <img src="app.svg"></img>
                <img src="expand.svg"></img>

                <div className="notification">
                    <img src="notifications.svg"></img>
                    <span>1</span>
                </div>
                <div className="user-icon">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQbq01vH30cwFgEuaxdo1nSVlcUsPJFIa4gtMj2nP8VLa_iPUEySE_rYL3-3cXFBK07E&usqp=CAU"></img>
                    <span>Jane</span>
                </div>
                <img src="setting.svg"></img>
            </div>
        </div>
    );

export default Products;