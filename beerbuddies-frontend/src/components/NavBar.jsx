import { useContext } from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { userContext } from '../App';
import { signOut } from '../utilities';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
export default function NavBar() {

    const { user, setUser } = useContext(userContext)

    return(
        <Navbar bg="dark" variant='dark' fixed="top">
            <Container>
                <Navbar.Brand href="/">BeerBuddies</Navbar.Brand>
            </Container>
                <Container>
                    <Link to="/RestaurantList">Restaurants</Link>
                </Container>

                <Container>
                    <Link to="/BuddiesPage">Buddies</Link>
                </Container>

                <Container>
                    <Link to="/UserProfilePage">Profile</Link>
                </Container>

                <Container>
                    <Link to="/BeerGarden">Beer Garden</Link>
                </Container>

            <Container className="justify-content-end">
                <Navbar.Text className="justify-content-end p-2">
                    Signed in: {user}
                </Navbar.Text>
                <Button variant="danger" onClick={(e) => [e.preventDefault(), signOut(setUser)]}>Sign Out</Button>
            </Container>

        </Navbar>
    );

}