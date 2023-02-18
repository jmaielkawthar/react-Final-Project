import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo1 from "../img/Logo-Yves-Rocher.jpg";
import Filter from "./Filter";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col sm={3}>
            <div className="logo">
              <img src={logo1} alt="logo" />
            </div>
          </Col>
          <Col sm={6}>
            <div className="navbar">
              <ul>
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>

                <li>
                <Link to="/about">
                About Us
                 </Link>
                 </li>
                 <li>
                 <Link to="/contact">
                 Contact Us
                 </Link></li>

              </ul>
            </div>
          </Col>
          <Col sm={3}>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
