
import Form from "react-bootstrap/Form";


const SignIn = () => {
    return ( 
        <div>
            <h3>Sign In To Your Account</h3>
            <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button type="submit" id="sign-up-btn">Submit</Button>
        </div>
    );
}
 
export default SignIn;