import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import creedpic from "../images/creed.jpeg"

export default function BuddiesPage() {
    return(
        <Container>
            <Row>@BuddyHandle</Row>
            <Row>
                <Col><img src={creedpic} /></Col>
                <Col>
                    <Row>Beer Preferences</Row>
                    <Row>City, State</Row>
                    <Row>Other profile information</Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="success">Add</Button>
                </Col>

                <Col>
                    <Button variant="primary">Send Token</Button>
                </Col>

                <Col>
                    <Button variant="primary">Send Beer</Button>
                </Col>
            </Row>
        </Container>        
    );
}