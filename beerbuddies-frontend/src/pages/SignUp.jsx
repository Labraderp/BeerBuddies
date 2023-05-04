import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


export default function SignUp() {
    return(
        <Form>
            <Form.Group className="mb-3" controlId="signUpEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="unique@emailaddr.ess" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signUpHandle">
                <Form.Label>User Handle</Form.Label>
                <Form.Control type="text" placeholder="@uniquehandle" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signUpPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password (8-40 characters)" />
                <Form.Text className="text-muted">Enter a password between 8-40 characters</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">Sign Up</Button>
        </Form>
    );

}