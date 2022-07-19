import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const Home = () => (
    <>
        <h1 style={{paddingTop: '5rem', color: "white"}}> YAROSLAVA BARTASHEVICH PRESENTS </h1>  {/* Вызов всяких надписей */}
        <h2 style={{paddingBottom: '2rem', color: "white" }}> The beautiful NFT art! </h2>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem' }}> {/* Отрисовка НФТ-карточек */}
            <Row xs={1} md={4} className="g-4" >
            {Array.from({ length: 5 }).map((_, idx) => (
                <Col style={{}}>
                <Card border="dark" variant="light" style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="https://gateway.ipfscdn.io/ipfs/QmauzXS9PDTn3jUPSsjdnG261wpJaNRF4MFoAYcC1CUsMf/0.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                            10.0 YBART
                    </Card.Text>
                    <Button variant="success"> Purchase </Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
    </> 
)

