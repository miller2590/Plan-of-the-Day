import React from "react";

import SideNav from "../components/SideNav";
import MainContent from "../components/MainContent";

function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
      <SideNav />
      <MainContent />
    </div>
  );
}

export default Home;
