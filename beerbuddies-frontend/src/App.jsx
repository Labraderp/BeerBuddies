import React, { useState } from 'react';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  
  const [user, setUser] = useState(null)

  return (
    <div className="App">
        <Container>
          {(user == null) ?
          <Row>
            <Col><SignUp /></Col>
            <Col><LogIn /></Col>
          </Row>
          :
          <Row>
            <Home />
          </Row>
          }
        </Container>
    </div>
  )
}
export default App;