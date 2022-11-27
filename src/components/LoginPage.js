import { Button, Form, Dropdown, FloatingLabel }from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { FaGlobe } from "react-icons/fa";
import '../style/header.css';
import '../style/loginPage.css';

function LoginPage() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleshow = () => setShow(true);

    function handleEmail(event) {
        const val = event.target.value
        if (val.length <= 5) {
            alert("enter valid email")
        }
    }
    
    function handlePass(event) {
        const val = event.target.value
        if (val.length <= 4) {
            alert("enter password between 4 to 26")
        }
    }

    function browsePage() {
        navigate("/browse");
    }


    return (
        <div onLoad={handleshow} className='loginPageContainer'>
            <NavigationBar />
            <div className='banner'>
                <img src="https://github.com/DivyashantKumar/netflixAssets/blob/main/images/headerImage.jpg?raw=true" />
            </div>

            <div className='main'>
                <h2>Sign In</h2>
                <Form>
                    <FloatingLabel controlId="floatingInput" label="Email or phone number" className="mb-4">
                        <Form.Control type="email" placeholder="name@example.com" onBlur={handleEmail} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" onBlur={handlePass} />
                    </FloatingLabel>

                    <Button variant="primary" type="submit" onClick={browsePage}>
                        Sign In
                    </Button>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                        <a>Need Help?</a>
                    </Form.Group>
                </Form>

                <div className='signfooterOne'>
                    <p>New to Netflix?</p>
                    <p>Sign up now.</p>
                </div>
                <div className='signfooterTwo'>
                    <p>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/">Learn more</a>.
                    </p>
                </div>
            </div>

            <div className='footerName'>
                <div className="footerHeading">
                    <p>Questions? Call 000-800-040-1843</p>
                </div>
                <div className='footerList'>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                        <li><a href="#">Corporate Information</a></li>
                    </ul>
                </div>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='languageDropdown'>
                        <FaGlobe /> English
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default LoginPage;