import React, {useEffect, useState} from "react";
import "./App.css";
import UserList from "./components/UserList";

export default function App(){

  const axios = require('axios').default;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://ieti-lab06-front.herokuapp.com/api/users')
        .then(response => response.data)
        .then(data => setUsers(data));
  }, [axios])

  return(
      <div className="app-container">
        <UserList users={users} />
      </div>
  )
}