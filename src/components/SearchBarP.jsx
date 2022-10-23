import React, { useState } from "react";
import { Container, Form, InputGroup, Row, Col } from "react-bootstrap";

const SearchBarP = ({
  DataTable,
  setDataTable,
  filteredDataTable,
  setFilteredDataTable,
}) => {
  function filter(filterInfo) {
    let filtered = [];
    if (filterInfo === "") {
      filtered = DataTable.rows;
    } else {
      filtered = DataTable.rows.filter((info) => {
        if (info.wellAPI.toLowerCase().includes(filterInfo.toLowerCase())) {
          return info;
        }
      });
    }
    setFilteredDataTable({
      columns: DataTable.columns,
      rows: filtered,
    });
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={6}>
            <InputGroup bsPrefix="input-group-container">
              <Form.Control
                style={{ borderRadius: "10px" }}
                placeholder="Search by Well API"
                onChange={(event) => filter(event.target.value)}
              />
              <InputGroup.Text bsPrefix="container-icon"></InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchBarP;
