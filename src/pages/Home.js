import React, { useState } from "react";
import SideNav from "../components/SideNav";
import MainContent from "../components/MainContent";
import TodoToolCard from "../components/Todo/TodoToolCard";

function Home() {
  const [tools, setTools] = useState([]);

  const handleCreateTodoTool = () => {
    setTools((prevTools) => [...prevTools, <TodoToolCard />]);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
      <SideNav handleCreateTodoTool={handleCreateTodoTool} />
      <MainContent tools={tools} />
    </div>
  );
}

export default Home;
