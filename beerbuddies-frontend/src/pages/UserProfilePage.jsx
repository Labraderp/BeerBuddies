import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import creedpic from '../images/creed.jpeg';


export default function UserProfilePage() {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row><img src={creedpic} /></Row>
                        <Row>@myuserhandle</Row>
                        <Row>City, State</Row>
                        <Row>Beer Preferences</Row>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}