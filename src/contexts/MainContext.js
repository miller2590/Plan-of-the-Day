import React, { createContext, useContext, useState, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase-config";
import useDashboardState from "../hooks/useDashboardState";

import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";

export const MainContext = createContext();

export function useMain() {
  return useContext(MainContext);
}

export function MainProvider({ children }) {
  // const [projects, setProjects] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState({ show: false, id: "" });
  const { currentUser } = useAuth();
  const [projects] = useDashboardState();

  const handleModal = useCallback((id) => {
    setShowModal((prevState) => ({ show: !prevState.show, id: id || "" }));
  }, []);

  const toggleShowTitle = useCallback(() => {
    setShowTitle(!showTitle);
  }, [showTitle]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  // *******************************************************************

  // Firebase Calls ****************************************************
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", currentUser.uid, "projects", id));
    handleModal();
  };

  const handleCreateProject = async (title) => {
    const userRef = collection(db, "users");

    await addDoc(collection(userRef, currentUser.uid, "projects"), {
      title: title,
    });
  };

  const value = {
    handleCreateProject,
    handleDelete,
    handleTitle,
    toggleShowTitle,
    handleModal,
    projects,
    title,
    showModal,
    showTitle,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
