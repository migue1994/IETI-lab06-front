import React from "react";
import "./User.css";

export default function User(props){
    return(
        <div className="user-container">
            <div className="user-card">
                <h2><span>Name: </span>{props.user.name}</h2>
                <h2><span>Email: </span>{props.user.email}</h2>
            </div>
        </div>
    )
}