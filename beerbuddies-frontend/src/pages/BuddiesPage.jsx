import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import creedpic from "../images/creed.jpeg"
import NavBar from "../components/NavBar"

export default function BuddiesPage() {
    return (
        <div>
          <Container className="user-profile-area">
            <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Col className="left-column">
                <Row style={{ textAlign: 'center' }}>
                  <img src={'https://images.unsplash.com/photo-1583547108417-8a9e539b60d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwZHJpbmtpbmclMjBhbGNvaG9sfGVufDB8fDB8fA%3D%3D&w=1000&q=80'} style={{height: '200px' }}/>
                </Row>
              </Col>
              <Col className="right-column">
                <Row>
                  <Form.Label>Handle:</Form.Label>
                  <p>@joshwilliams</p>
                </Row>
                <Row>
                  <Form.Label>City:</Form.Label>
                  <p>Tulsa</p>
                </Row>
                <Row>
                  <Form.Label>State:</Form.Label>
                  <p>Oklahoma</p>
                </Row>
                <Row>
                  <Form.Label>Beer Preference:</Form.Label>
                  <p>Golden Lager</p>
                </Row>
              </Col>
            </Row>
            <button style={{marginTop: '15px'}}>Send Token</button>
          </Container>
        </div>
      );
}