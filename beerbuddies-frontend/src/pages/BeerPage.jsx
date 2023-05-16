import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import creedpic from '../images/creed.jpeg'
import React, { useContext } from 'react';
import { userContext } from '../App';
import { decrementToken } from '../utilities';

export default function BeerPage() {
    const user_info = useContext(userContext)

    const handleBuyBeer = async () => {
        try {
            // Check if the user has enough tokens
            if (user_info.user.token_amount > 0) {
                const result = await decrementToken(user_info.user.handle);
                if (result) {
                    const updatedUserContext = {
                        ...user_info.user,
                        token_amount: user_info.user.token_amount - 1,
                    };
                    user_info.setUser(updatedUserContext);
                    // Show a success message
                    alert('1 token used');
                } else {
                    console.error('Failed to decrement token amount.');
                }
            } else {
                // Show a failure message
                alert('You do not have enough tokens. Please purchase more.');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row>
                        <img src={creedpic}></img>
                        Beer Rating
                        </Row>
                    </Col>
                    <Col>
                        <Row>Beer Name</Row>
                        <Row>Notes/Flavors</Row>
                        <Row><Button variant='success' onClick={handleBuyBeer}>Buy Beer</Button></Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
