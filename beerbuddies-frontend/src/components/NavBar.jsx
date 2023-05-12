import { useContext } from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { userContext } from '../App';
import { signOut } from '../utilities';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

export default function NavBar({setFeatures}) {

    const { user, setUser } = useContext(userContext)

    const clickHandler = (e) => {
        e.preventDefault();
        console.log(e.target.textContent)
        
        switch(e.target.textContent){
            case "BeerBuddies":
                setFeatures(0)
                break
            case "Restaurants":
                setFeatures(1)
                break
            case "Buddy List":
                setFeatures(2)
                break
            case "User Profile":
                setFeatures(3)
                break
            case "Beer Garden":
                setFeatures(4)
                break
        }


    }


    return(
        <Navbar bg="dark" variant='dark' fixed="top">
            <Container>
                <Navbar.Brand href="#" onClick={clickHandler}>BeerBuddies</Navbar.Brand>
            </Container>
                <Container onClick={clickHandler}>
                    <Link to="#">Restaurants</Link>
                </Container>

                <Container onClick={clickHandler}>
                    <Link to="#">Buddy List</Link>
                </Container>

                <Container onClick={clickHandler}>
                    <Link to="#">User Profile</Link>
                </Container>

                <Container onClick={clickHandler}>
                    <Link to="#">Beer Garden</Link>
                </Container>

            <Container className="justify-content-end">
                <Navbar.Text className="justify-content-end p-2">
                    Signed in: {user.handle}
                </Navbar.Text>
                <Button variant="danger" onClick={(e) => [e.preventDefault(), signOut(setUser)]}>Sign Out</Button>
            </Container>

        </Navbar>
    );

}