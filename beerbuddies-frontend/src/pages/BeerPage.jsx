import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import creedpic from '../images/creed.jpeg'

export default function BeerPage() {
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
                        <Row><Button variant='success'>Buy Beer</Button></Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}