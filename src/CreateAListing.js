import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {
    useMarketplace,
    useNetwork,
    useNetworkMismatch,
  } from "@thirdweb-dev/react";
  import { NATIVE_TOKEN_ADDRESS, TransactionResult } from "@thirdweb-dev/sdk";

import styles from "./Home.module.css";
import './ListingStyle.css';



export const CreateAListing = () => {

// Connect to our marketplace contract via the useMarketplace hook
const marketplace = useMarketplace(
    "0x96bA733fCaC2a4B95d7Dc5a1aDC22f56d879DbFf" // Your marketplace contract address here
);

return (
    
    <form>

    <h1 style={{paddingTop: '5rem'}}> </h1>
        <div className={styles.container}>
            {/* Form Section */}
            <div className={styles.collectionContainer}>
                <h1 className={styles.ourCollection}>
                    Upload your NFT to the marketplace:
                </h1>

                {/* Toggle between direct listing and auction listing */}
                <div className={styles.listingTypeContainer}>
                    <input
                    type="radio"
                    name="listingType"
                    id="directListing"
                    value="directListing"
                    defaultChecked
                    className={styles.listingType}
                    />
                    <label htmlFor="directListing" className={styles.listingTypeLabel}>
                    Direct Listing
                    </label>
                    <input
                    type="radio"
                    name="listingType"
                    id="auctionListing"
                    value="auctionListing"
                    className={styles.listingType}
                    />
                    <label htmlFor="auctionListing" className={styles.listingTypeLabel}>
                    Auction Listing
                    </label>
                </div>

                {/* NFT Contract Address Field */}
                <input
                    type="text"
                    name="contractAddress"
                    className={styles.textInput}
                    placeholder="NFT Contract Address"
                />

                {/* NFT Token ID Field */}
                <input
                    type="text"
                    name="tokenId"
                    className={styles.textInput}
                    placeholder="NFT Token ID"
                />

                {/* Sale Price For Listing Field */}
                <input
                    type="text"
                    name="price"
                    className={styles.textInput}
                    placeholder="Sale Price"
                />

                <button
                    type="submit"
                    className={styles.connectButton}
                    style={{ marginTop: 32, borderStyle: "none", marginBottom:52 }}
                >
                    List NFT
                </button>
            </div>
        </div>
    </form>
    
);
};






















/* export const CreateAListing = () => (
    <>
        <Styles>
            <h2 style={{paddingTop: '5rem'}}> Upload your NFT to the marketplace: </h2>
            <Form>

                <Form.Group controlId="fromBasicContractAddress" style={{paddingLeft: '2rem', paddingRight: '2rem' }}>
                    <Form.Label></Form.Label>
                    <Col>
                    <Form.Control size="lg" type="ContractAddress" placeholder="Enter NFT Contract Address"/>
                    </Col>
                </Form.Group>

                <Form.Group controlId="fromBasicTokenID" style={{paddingLeft: '2rem', paddingRight: '2rem' }}>
                    <Form.Label></Form.Label>
                    <Col>
                    <Form.Control size="lg" type="TokenID" placeholder="Enter NFT Token ID"/>
                    </Col>
                </Form.Group>

                <Form.Group controlId="fromBasicSalePrice" style={{paddingLeft: '2rem', paddingRight: '2rem' }}>
                    <Form.Label></Form.Label>
                    <Col>
                    <Form.Control size="lg" type="SalePrice" placeholder="Enter Sale Price"/>
                    </Col>

                <Button type="submit" className={styled.mainButton} style={{ marginTop: 32, borderStyle: "none" }}> List NFT </Button>

                </Form.Group>

            </Form>
        </Styles>
    </>
) */
