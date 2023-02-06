import React, { useState, useEffect, useMemo, useCallback } from "react";
import MainNav from "../components/MainNav/MainNav";
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
import { Container, Row, Col } from "react-bootstrap";

function Home() {
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

  // *******************************************************************

  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col className=" nav-col col-xl-2 col-md-3 col-12 d-flex flex-column p-0">
          <MainNav
            handleCreateProject={handleCreateProject}
            toggleShowTitle={toggleShowTitle}
            showTitle={showTitle}
            title={title}
            handleTitle={handleTitle}
          />
        </Col>

        <Col className="col-xl-8 col-md-9 col-12">
          <MainContent
            projects={projects}
            showModal={showModal.show}
            showModalId={showModal.id}
            handleModal={handleModal}
            handleDelete={handleDelete}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
