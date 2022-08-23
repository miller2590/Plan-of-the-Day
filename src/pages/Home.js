import React, { useState, useEffect } from "react";
import MainNav from "../components/MainNav";
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
    <>
      <Container fluid>
        <Row className="flex-xl-nowrap ">
          <Col className="col-xl-2 col-md-3 col-12 d-flex flex-column p-0  ">
            <MainNav handleCreateTodoTool={handleCreateTodoTool} />
          </Col>

          <Col className="col-xl-8 col-md-9 col-12">
            <MainContent
              tools={tools}
              show={show}
              closeId={closeId}
              handleClose={handleClose}
              handleShow={handleShow}
              handleDelete={handleDelete}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
