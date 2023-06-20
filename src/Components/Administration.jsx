import React from 'react';
import { Switch } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Content from '../Components/Content';


const Administration = () => {
  return (
    <div className='administration'>
        <h1>Administration</h1>
       <Container>
        <Row>
          <Col sm={2}>
          <div className="sidebar">
            <ul className="sidebar-menu">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          </Col>
          <Col sm={10}>
            <div className="contenu">

            </div>
          </Col>
        </Row>
       </Container>
    
    </div>

  )
}

export default Administration