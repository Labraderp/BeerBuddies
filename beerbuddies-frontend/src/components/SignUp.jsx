import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react";
import { signUp } from "../utilities";


export default function SignUp() {

    const [email, setEmail] = useState('')
    const [handle, setHandle] = useState('')
    const [password, setPassword] = useState('')


    return(
        <Form onSubmit={(e) => [e.preventDefault(), signUp(email, handle, password)]}>
            <Form.Group className="mb-3" controlId="signUpEmail" onChange={(e) => setEmail(e.target.value)}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="unique@emailaddr.ess" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signUpHandle" onChange={(e) => setHandle(e.target.value)}>
                <Form.Label>User Handle</Form.Label>
                <Form.Control type="text" placeholder="@uniquehandle" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signUpPassword" onChange={(e) => setPassword(e.target.value)}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password (8-40 characters)" />
                <Form.Text className="text-muted">Enter a password between 8-40 characters</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">Sign Up</Button>
        </Form>
    );

}