import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



/* Опустится сам по мере заполнения страницы */
const Footer = () => (

        <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }} className="font-small pt-4 mt-4">
          <Container fluid className="text-center text-md-left">
                <Row>
                <Col md="6">
                    <h5 className="title">Footer Content</h5>
                    <p>
                    Here you can use rows and columns here to organize your footer
                    content.
                    </p>
                </Col>
                <Col md="6">
                    <h5 className="title">Links</h5>
                    <ul>
                    <li className="list-unstyled">
                        <a href="#!">Link 1</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Link 2</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Link 3</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Link 4</a>
                    </li>
                    </ul>
                </Col>
                </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid  style={{ backgroundColor: '#808080', color: '#fff', justifyContent: 'center', padding: '20px' }}>
              &copy; {new Date().getFullYear()} Copyright: <a href="https://www.rustennistur.com/players/30927" style={{color:"white" }}> Rustennistur.com </a>
            </Container>
          </div>
        </Container>

)

export default Footer;

/*  <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <p> Bottom Notes </p>
        </Container>
    </Container> */