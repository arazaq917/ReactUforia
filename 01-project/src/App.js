import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const getData = (uName, uAge, id) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, key: id }];
    });
  };
  return (
    <div>
      <AddUser onAddHandler={getData} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
