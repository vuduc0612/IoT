
import React from "react";

import { Card, Container, Row } from "reactstrap";
import AdminNavbar from "components/Navbars/AdminNavbar";



const Device = () => {
  return (
    <>
      <AdminNavbar brandText="Divice"/>
      <Container className="mt-0" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <h1> Hello </h1>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Device;
