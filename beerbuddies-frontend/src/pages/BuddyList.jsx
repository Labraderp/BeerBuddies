import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';


export default function BuddyList() {
    const [friends, setFriends] = React.useState([
      { id: 1, name: 'John' },
      { id: 2, name: 'Mary' },
      { id: 3, name: 'Tom' },
    ]);
  
    const [users, setUsers] = React.useState([
      { id: 1, name: 'Sarah' },
      { id: 2, name: 'Mike' },
      { id: 3, name: 'Kate' },
    ]);
  
    function removeFriend(id) {
      setFriends(friends.filter((friend) => friend.id !== id));
    }
  
    return (
      <Container>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Search friends..." />
              <Button variant="outline-secondary">Search</Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {friends.map((friend) => (
                <ListGroup.Item key={friend.id}>
                  {friend.name}
                  <Button variant="danger" className="float-end" onClick={() => removeFriend(friend.id)}>Remove Friend</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {users.map((user) => (
                <ListGroup.Item key={user.id}>
                  {user.name}
                  <Button variant="success" className="float-end" onClick={() => removeFriend(friend.id)}>Add Friend</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
  