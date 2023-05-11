import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import creedpic from '../images/creed.jpeg';
import React, { useContext } from 'react';
import { userContext } from '../App';

export default function UserProfilePage({}) {

    console.log(userContext, 'my context')
    const user_info = useContext(userContext)
    console.log(user_info.user)

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row><img src={creedpic} /></Row>
                        <Row>{user_info.user}</Row>
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
