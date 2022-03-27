import React from "react";
 
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((preUsersList) => {
      return [
        ...preUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
    console.log(uName, uAge);
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
