import React from "react";
import AuthForm from "../components/AuthForm";
import { styles } from "../utils/styles";

function LandingPage() {
  return (
    <div style={styles.LandingPageContainer}>
      <div style={{ width: "100%", justifyContent: "center" }}>
        <h1 className="text-center mb-4">Plan Of The Day</h1>
        <AuthForm />
      </div>
    </div>
  );
}

export default LandingPage;
