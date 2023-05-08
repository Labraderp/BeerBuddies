import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useContext, useState } from "react"
import { userContext } from "../App"
import { signIn } from "../utilities"

export default function LogIn() {

    const { setUser } = useContext(userContext)
    const [handle, setHandle] = useState('');
    const [password, setPassword] = useState('');

    return(
        <Form onSubmit={(e) => [e.preventDefault(), signIn(handle, password, setUser)]}>
            <Form.Group className="mb-3" controlId="logInHandle" value={handle}
            onChange={(e) => setHandle(e.target.value)}>
                <Form.Label>User Handle</Form.Label>
                <Form.Control type="text" placeholder="@uniquehandle" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="logInPassword" value={password}
            onChange={(e) => setPassword(e.target.value)}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password (8-40 characters)" />
            </Form.Group>

            <Button variant="primary" type="submit">Log In</Button>
        </Form>
    )
}