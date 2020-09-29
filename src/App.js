import React, {useEffect, useState} from "react";
import "./App.css";
import UserList from "./components/UserList";

export default function App(){

  const axios = require('axios').default;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://taskplanner-backend.westcentralus.azurecontainer.io:8080/api/users')
        .then(response => response.data)
        .then(data => setUsers(data));
  }, [axios])

  return(
      <div className="app-container">
        <UserList users={users} />
      </div>
  )
}