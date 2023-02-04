import Form from 'react-bootstrap/Form';


const SignUp = () => {
    return ( 
        <div id="sign-up">
            <h4>Sign Up</h4>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
        </div>
    );
}
 
export default SignUp;