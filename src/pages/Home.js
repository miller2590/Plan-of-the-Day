import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import MainContent from "../components/MainContent";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase-config";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  query,
  onSnapshot,
} from "firebase/firestore";

function Home() {
  const [tools, setTools] = useState([]);
  const [show, setShow] = useState(false);
  const [closeId, setCloseId] = useState("");
  const { currentUser } = useAuth();

  useEffect(() => {
    const todoRef = query(collection(db, "users", currentUser.uid, "todos"));
    const unsub = onSnapshot(todoRef, (querySnap) => {
      const docIdRef = [];
      querySnap.forEach((doc) => {
        docIdRef.push(doc.id);
      });
      setTools(docIdRef);
    });
    return () => {
      unsub();
    };
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

  const handleCreateTodoTool = async () => {
    const userRef = collection(db, "users");

    await addDoc(collection(userRef, currentUser.uid, "todos"), {});
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
        handleShow={handleShow}
        closeId={closeId}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Home;
