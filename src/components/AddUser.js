import React, { useState } from "react";
import Card from "./UI/Card";
import styles from "./AddUser.module.css";
import Button from "./UI/Button";

const AddUser = ({ onSubmit, onOpenModal }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!userName.length) {
      onOpenModal({
        title: "Invalid User Name",
        content: "Please Eenter a Valid User Name.",
      });
      return;
    }
    if (+userAge < 1) {
      onOpenModal({
        title: "Invalid User Age",
        content: "Please Eenter a Valid User Age ( > 0).",
      });
      return;
    }
    console.log(userName, userAge);
    onSubmit(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeUserAge = (e) => {
    setUserAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={handleAddUser}>
        <div className="input">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={userName || ""}
            onChange={handleChangeUserName}
          ></input>
        </div>
        <div className="input">
          <label htmlFor="age">User Age</label>
          <input
            type="number"
            id="age"
            value={userAge || ""}
            onChange={handleChangeUserAge}
          ></input>
        </div>
        <div className={styles["btn-wrap"]}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
