import React, { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub } from
    "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState('');

    const { signIn, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                form.reset();
            })
            .catch(e => {
                console.error(e);
                setError(e.message)
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='px-5' variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <p className='mt-3'><small>New to this site? Please<Link to='/register'>Register</Link></small></p>
            <ButtonGroup vertical>
                <span>OR</span>
                <Button onClick={handleGoogleSignIn} className='my-3' variant="outline-primary"><FaGoogle className='me-2'></FaGoogle>Login with Google</Button>
                <span>OR</span>
                <Button onClick={handleGithubSignIn} className='my-3' variant="outline-dark"><FaGithub className='me-2'></FaGithub>Login with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;