import React from "react";
import MainNav from "../components/MainNav/MainNav";
import { Container, Row, Col } from "react-bootstrap";

import { Outlet } from "react-router-dom";

function Home() {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col className=" nav-col col-xl-2 col-md-3 col-12 d-flex flex-column p-0">
          <MainNav />
        </Col>

        <Col className="col-xl-8 col-md-9 col-12">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
