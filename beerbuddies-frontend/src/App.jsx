import React, { createContext, useEffect, useState } from 'react';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { currUser, signOut } from './utilities';
import { getCookie } from './utilities'
import Axios from 'axios';

export const userContext = createContext(null);

const csrftoken = getCookie();
Axios.defaults.headers.common['X-CSRFToken'] = csrftoken

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    }
    getCurrUser()
  }, [])



  return (
    <div className="App">
      <userContext.Provider value={{user, setUser}}>
        <Container >
          {user ?
          <div>
          <Row>
            <Home />
          </Row>
          </div>
          :
          <div>
          <Row>
            <Col><SignUp /></Col>
            <Col><LogIn /></Col>
          </Row>
          </div>
          }
        </Container>
        </userContext.Provider>
    </div>
  )
}
export default App;