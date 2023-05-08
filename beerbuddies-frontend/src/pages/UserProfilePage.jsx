import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import creedpic from '../images/creed.jpeg';
import React, { useContext } from 'react';
import { userContext } from '../App';

export default function UserProfilePage({}) {

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row><img src={creedpic} /></Row>
                        <Row>@</Row> {/* Display the user's handle */}
                        <Row>City, State</Row>
                        <Row>Beer Preferences</Row>
                    </Col>
                    <Col>
                        <Row>Token Count</Row>
                        <Row>Recent Reviews</Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
