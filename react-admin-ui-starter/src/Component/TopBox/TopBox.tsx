import React from 'react';
import './TopBox.css'
import {topDealUsers} from "../../data";

const TopBox = () =>
    (
        <div className="topBox">
            <h1>Top Users</h1>
            <div className="list">
            {
                topDealUsers.map((user)=>
                    (
                    <div className="ListItem" key={user.id}>
                        <div className="user">
                        <img src={user.img} alt=""/>
                        <div className="user-text">
                            <span className="username">{user.username}</span>
                            <span className="email">{user.email}</span>
                        </div>
                        </div>
                        <span className="amount">${user.amount}</span>
                    </div>
                    )
                )
            }
            </div>
        </div>
    );

export default TopBox;