import Form from 'react-bootstrap/Form';
import  Button from 'react-bootstrap/Button';


const SignUp = () => {
    return ( 
        <div id="sign-up">
            <h3>Sign Up</h3>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button type="submit" id="sign-up-btn">Submit</Button>
            </Form>
        </div>
    );
}
 
export default SignUp;