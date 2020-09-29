import React from "react";
import User from "./User";
import "./UserList.css";

export default function UserList(props){
    return(
        <div className="userList-container">
            {props.users.map((user, index) => (
                <User user={user} />
            ))}
        </div>
    )
}