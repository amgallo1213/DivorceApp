
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignIn = () => {
    return ( 
        <div id="sign-in">
            <div id="left-sign-in">
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
                    <p id="sign-in-paragraph">Thank you for choosing our website to assist you in your divorce proceeding.
                    Please visit our FAQ page for any questions or problems with your login.</p>
            </div>
            <img src="https://images.pexels.com/photos/6669845/pexels-photo-6669845.jpeg?auto=compress&cs=tinysrgb&w=800" id="sign-in-image"></img>
            
        </div>
    );
}
 
export default SignIn;