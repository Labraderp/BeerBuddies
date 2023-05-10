import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BuddyList() {
  const [friends, setFriends] = React.useState(() => {
    const storedFriends = localStorage.getItem('friends');
    return storedFriends ? JSON.parse(storedFriends) : [
      { id: 1, name: 'Josh' },
      { id: 2, name: 'Mary' },
      { id: 3, name: 'Tom' },
    ];
  });

  const [allUsers, setAllUsers] = React.useState(() => {
    const storedAllUsers = localStorage.getItem('allUsers');
    return storedAllUsers ? JSON.parse(storedAllUsers) : [
      { id: 4, name: 'Jose' },
      { id: 5, name: 'Will' },
      { id: 6, name: 'Nick' },
      { id: 7, name: 'Drew' },
      { id: 8, name: 'Johnny' },
    ];
  });

  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  function removeFriend(id) {
    setFriends(friends.filter((friend) => friend.id !== id));
  }

  function addFriend(id) {
    const friendToAdd = allUsers.find(user => user.id === id);
    setFriends([...friends, friendToAdd]);
    setAllUsers(allUsers.filter(user => user.id !== id));
    setSearchQuery('');
  }

  function handleSearchInputChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setSearchResults(allUsers.filter(user => user.name.toLowerCase().includes(query)));
  }

  React.useEffect(() => {
    localStorage.setItem('friends', JSON.stringify(friends));
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
  }, [friends, allUsers]);

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl placeholder="Search friends..." onChange={handleSearchInputChange} value={searchQuery} />
            <Button variant="outline-secondary">Search</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {friends.map((friend) => (
              <ListGroup.Item key={friend.id}>
                <Link to={`/BuddiesPage`}>{friend.name}</Link>
                <Button variant="danger" className="float-end" onClick={() => removeFriend(friend.id)}>Remove Friend</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      {searchQuery.length > 0 && (
        <Row>
          <Col>
            <ListGroup>
              {searchResults.map((user) => (
                <ListGroup.Item key={user.id}>
                  <Link to={`/buddies/${user.id}`}>{user.name}</Link>
                  <Button variant="success" className="float-end" onClick={() => addFriend(user.id)}>Add Friend</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
}
