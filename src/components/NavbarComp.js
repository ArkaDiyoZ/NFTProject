import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import styles from "../Home.module.css";

/* Задание стилей для навбара */
const Styles = styled.div`
    a, .navbar-brand, .navbar-nav, .navlink {
      color: #fff;
      &:hover {
        color: white
      }
    }
`;

let NavbarComp = () => {
  
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <>
    <Styles>
      {['md'].map((expand) => (                                                     /* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */
        <Navbar fixed="top" key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand>
              <Link to='/'>
                <img src="main_logo.png"
                width={50} />
             </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Side Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href ="/CreateAListing" className={styles.createButton} style={{ color: "white"}}>
                    Create a listing
                  </Nav.Link>
                  <Nav.Link style={{textDecoration: "none"}} >
                    
                    {address ? (
                      <>
                        <a
                          onClick={() => disconnectWallet()} className={styles.connectButton} style={{textDecoration: "none"}}
                        >
                          Disconnect Wallet
                        </a>
                        <p>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
                      </>
                    ) : (
                      <a
                        onClick={() => connectWithMetamask()} className={styles.connectButton} style={{textDecoration: "none"}}
                      >
                        Connect Wallet
                      </a>
                     
                    )}
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </Styles>
    </>
  );
}

export default NavbarComp;