import React, { useState, useEffect, useMemo } from "react";
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
  const [show, setShow] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [title, setTitle] = useState("");
  const [closeId, setCloseId] = useState("");
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

  const handleClose = () => setShow(false);
  const handleShowModal = (id) => {
    setShow(true);
    setCloseId(id);
  };

  const toggleShowTitle = () => {
    setShowTitle(!showTitle);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  // *******************************************************************

  // Firebase Calls ****************************************************
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", currentUser.uid, "projects", id));
    handleClose();
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
            show={show}
            closeId={closeId}
            handleClose={handleClose}
            handleShowModal={handleShowModal}
            handleDelete={handleDelete}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
