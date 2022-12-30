import React, { useState } from "react";
import AddUser from "./components/AddUser";
import Modal from "./components/UI/Modal";
import ModalPortals from "./components/UI/ModalPortals";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [invalid, setInvalid] = useState(null);

  const onSubmit = (userName, userAge) => {
    console.log("onSubmit");
    const newUser = {
      id: Math.random().toString(),
      userName,
      userAge,
    };
    setUsers([...users, newUser]);
  };

  const onCloseModal = () => {
    setInvalid(null);
  };

  const onOpenModal = ({ title, content }) => {
    setInvalid({
      title: title,
      content: content,
    });
  };

  return (
    <div>
      <AddUser onSubmit={onSubmit} onOpenModal={onOpenModal}></AddUser>
      {users.length > 0 && <UserList users={users}></UserList>}
      <ModalPortals>
        {invalid && (
          <Modal
            onCloseModal={onCloseModal}
            title={invalid.title}
            content={invalid.content}
          ></Modal>
        )}
      </ModalPortals>
    </div>
  );
}

export default App;
