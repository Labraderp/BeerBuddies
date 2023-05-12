import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import creedpic from '../images/creed.jpeg';
import React, { useContext, useState, useEffect } from 'react';
import { userContext } from '../App';
import { incrementToken } from "../utilities";

export default function UserProfilePage({}) {

    console.log(userContext, 'my context')
    const user_info = useContext(userContext)
    console.log(user_info.user)
    console.log(user_info)

    const [tokenIncremented, setTokenIncremented] = useState(false);

    const handleIncrementToken = async () => {
        const result = await incrementToken(user_info.user.handle);
        if (result == true) {
          setTokenIncremented(true);
        } else {
          console.error('Failed to increment token amount.');
        }
      };

    useEffect(() => {
    if (tokenIncremented) {
        // Refresh the user_info context to reflect the updated token_amount. This will make sure other components are accessing the latest version of the user context
        const updatedUserContext = { ...user_info.user, token_amount: user_info.user.token_amount + 1 };
        user_info.setUser(updatedUserContext);
        setTokenIncremented(false); // Reset the tokenIncremented state
    }
    }, [tokenIncremented, user_info.setUser, user_info.user.token_amount]);

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row><img src={creedpic} /></Row>
                        <Row>{user_info.user.handle}</Row>
                        <Row>City, State</Row>
                        <Row>Beer Preferences</Row>
                    </Col>
                    <Col>
                        <Row>Token Count: {user_info.user.token_amount}</Row>
                        <Row>
                        <button onClick={handleIncrementToken}>Add a token!</button>
                        </Row>
                        <Row>Recent Reviews</Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
