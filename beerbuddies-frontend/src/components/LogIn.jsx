import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function LogIn() {
    return(
        <Form>
            <Form.Group className="mb-3" controlId="logInHandle">
                <Form.Label>User Handle</Form.Label>
                <Form.Control type="text" placeholder="@uniquehandle" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="logInPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password (8-40 characters)" />
            </Form.Group>

            <Button variant="primary" type="submit">Log In</Button>
        </Form>
    )
}