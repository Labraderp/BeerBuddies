import React, { createContext, useEffect, useState } from 'react';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { currUser, signOut } from './utilities';

export const userContext = createContext(null);

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const getCurrUser = async () => {
      await currUser()
      console.log(user)
    }

    getCurrUser();
  }, [])

  return (
    <div className="App">
      <userContext.Provider value={{user, setUser}}>
        <Container>
          {(user == null) ?
          <div>
          <Row>
            <Col><SignUp /></Col>
            <Col><LogIn /></Col>
          </Row>
          </div>
          :
          <div>
          <Row>
            <Home />
          </Row>
          </div>
          }
        </Container>
        </userContext.Provider>
    </div>
  )
}
export default App;