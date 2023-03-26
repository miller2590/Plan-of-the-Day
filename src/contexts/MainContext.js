import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
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

export const MainContext = createContext();

export function useMain() {
  return useContext(MainContext);
}

export function MainProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState({ show: false, id: "" });
  const { currentUser } = useAuth();

  const todoRef = useMemo(
    () => query(collection(db, "users", currentUser.uid, "projects")),
    [currentUser.uid]
  );

  useEffect(() => {
    const unsub = onSnapshot(todoRef, (querySnap) => {
      const docIdRef = [];
      querySnap.forEach((doc) => {
        // Project card Object
        docIdRef.push({ id: doc.id, title: doc.data().title });
      });
      setProjects(docIdRef);
    });
    return () => {
      unsub();
    };
  }, [todoRef]);

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
