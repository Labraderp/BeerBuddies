import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import creedpic from '../images/creed.jpeg';
import React, { useContext, useState, useEffect } from 'react';
import { userContext } from '../App';
import { incrementToken, updateUserPreferences } from "../utilities";

export default function UserProfilePage({}) {

    // console.log(userContext, 'my context')
    const user_info = useContext(userContext)
    const [tokenIncremented, setTokenIncremented] = useState(false);
    const [savedPreferences, setSavedPreferences] = useState({
        city: user_info.user.city || '',
        state: user_info.user.state || '',
        beerPreference: user_info.user.beer_preference || '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSavedPreferences((prevPreferences) => ({
            ...prevPreferences,
            [name]: value,
        }));
    };

    const handleSavePreferences = async () => {
        try {
            await updateUserPreferences(user_info.user.handle, savedPreferences);
            console.log('User preferences saved successfully!');
        } catch (error) {
            console.error('Error saving user preferences:', error);
        }
    };

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

    return (
        <div>
            <Container className="user-profile-area">
            <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Col className="left-column">
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={'https://st4.depositphotos.com/1008239/31617/i/600/depositphotos_316178144-stock-photo-cheerful-friends-pub-drinking-beer.jpg'} style={{height: '200px' }} />
                    <button style={{width: '50%', padding: '10px', marginTop: '10px'}}>Change profile picture</button>
                </Row>
                </Col>
                <Col className="right-column">
                <Row>
                    <Form.Label>Handle:</Form.Label>
                    <p>{user_info.user.handle}</p>
                </Row>
                <Form>
                    <Form.Label>City:</Form.Label>
                    <Form.Group controlId="cityInput">
                    <Form.Control
                        type="text"
                        name="city"
                        placeholder="Enter a city..."
                        value={savedPreferences.city}
                        onChange={handleInputChange}
                    />
                    </Form.Group>
                    <Form.Group controlId="stateSelect">
                    <Form.Label>State:</Form.Label>
                    <Form.Select
                        className="state"
                        name="state"
                        value={savedPreferences.state}
                        onChange={handleInputChange}
                    >
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="beerPreferenceSelect">
                    <Form.Label>Beer Preference:</Form.Label>
                    <Form.Select
                        name="beerPreference"
                        value={savedPreferences.beerPreference}
                        onChange={handleInputChange}
                    >
                        <option value="">Beer preference</option>
                        <option value="Light IPA">Light IPA</option>
                        <option value="Strong Stout">Strong Stout</option>
                        <option value="Golden Lager">Golden Lager</option>
                        <option value="Domestic">Domestic</option>
                        <option value="Imported">Imported</option>
                    </Form.Select>
                    </Form.Group>
                    <div>
                    <button style={{marginTop: '10px'}} onClick={handleSavePreferences}>Save Preferences</button>
                    </div>
                </Form>
                </Col>
            </Row>
            <div className="token-area">
                <div>Token Count: {user_info.user.token_amount}</div>
                <div>
                <button onClick={handleIncrementToken}>Add a token!</button>
                </div>
            </div>
            </Container>
        </div>
    );  
}
