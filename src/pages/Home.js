import React, { useState } from "react";
import SideNav from "../components/SideNav";
import MainContent from "../components/MainContent";
import TodoToolCard from "../components/Todo/TodoToolCard";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase-config";
import { collection, doc, addDoc } from "firebase/firestore";

function Home() {
  const [tools, setTools] = useState([]);
  const { currentUser } = useAuth();

  const handleCreateTodoTool = async () => {
    const userRef = collection(db, "users");
    await addDoc(collection(userRef, currentUser.uid, "todos"), {
      name: "todo",
      age: "33",
    });

    setTools((prevTools) => [...prevTools, <TodoToolCard />]);
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
      <MainContent tools={tools} />
    </div>
  );
}

export default Home;
