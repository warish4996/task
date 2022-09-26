import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "./users";
import { getUser } from "./Api";
import { UserType } from "./type";

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [currentId, setCurrentId] = useState<string>("0");

  useEffect(() => {
    getUser(currentId).then((res: UserType[]) => {
      setUsers(res);
    });
  }, [currentId]);

  const handleNext = () => {
    const nextNum = users[9].ID;
    setCurrentId(nextNum);
  };

  const handlePrevious = () => {
    const nextNum = users[0].ID;
    const Id = parseInt(nextNum) - 11;
    setCurrentId(Id.toString());
  };

  return (
    <div className="main_container">
      <div className="container">
        <h1 className="heading">User List</h1>
        <Users data={users} />
        <div className={currentId !== "0"?"lower_section":"no_prev"}>
          {currentId !== "0" && (
            <button className="button" onClick={handlePrevious}>
              Prev
            </button>
          )}
          <button className="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
