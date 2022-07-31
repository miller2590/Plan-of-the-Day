import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import MainContent from "../components/MainContent";
import TodoToolCard from "../components/Todo/TodoToolCard";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase-config";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

function Home() {
  const [tools, setTools] = useState([]);
  const [show, setShow] = useState(false);
  const [closeId, setCloseId] = useState("");
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      const querySnap = await getDocs(
        collection(db, "users", currentUser.uid, "todos")
      );

      querySnap.forEach((doc) => {
        setTools((prevTools) => [
          ...prevTools,
          <TodoToolCard handleShow={handleShow} id={doc.id} />,
        ]);
      });
    };
    fetch();
  }, [currentUser.uid]);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setCloseId(id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", currentUser.uid, "todos", id));
    handleClose();
  };

  // FIX THIS NEXT LOSER!!!!!
  const handleCreateTodoTool = async () => {
    const userRef = collection(db, "users");

    const newTodo = await addDoc(
      collection(userRef, currentUser.uid, "todos"),
      {}
    );

    // setTools((prevTools) => [
    //   ...prevTools,
    //   <TodoToolCard handleShow={handleShow} id={newTodo.id} />,
    // ]);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <SideNav handleCreateTodoTool={handleCreateTodoTool} />
      <MainContent
        tools={tools}
        show={show}
        handleClose={handleClose}
        closeId={closeId}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Home;
