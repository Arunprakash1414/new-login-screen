import React, { Component } from 'react';
import "./account.css";
import CustomReCaptcha from "./recaptcha";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recaptchaToken: 'not',
        }
    }
    componentDidMount() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
            document.getElementById('signupform').style.display = "none"
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
            document.getElementById('signupform').style.display = "flex"
        });
    }
    handleRecaptcha = (token) => {
        this.setState({ recaptchaToken: token === '' ? 'not' : token });
    }
    render() {
        return (

            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#" onSubmit={(e) => e.preventDefault()} id="loginform">
                        <h3 style={{ color: "#fff" }}>Create Account</h3>
                        {/* <div className="social-container">

                            <a href="#" className="social"><i className="black facebook f large link icon"></i></a>
                            <a href="#" className="social"><i className="black facebook f large link icon"></i></a>
                            <a href="#" className="social"><i className="black facebook f large link icon"></i></a>
                        </div> */}
                        {/* <span style={{ color: "#fff" }}>or use your email for registration</span> */}
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <div style={{ fontSize: '12px', textAlign: 'left', wordWrap: 'break-word', color: '#06fd3f' }}>
                            (Password must contain
                                        <span style={{ color: '#06fd3f' }}> Min 8 chars </span>
                            and atleast 1
                                        <span style={{ color: '#06fd3f' }}> number, </span>
                            <span style={{ color: '#06fd3f' }}> uppercase, </span>
                            <span style={{ color: '#06fd3f' }}> lowercase</span>,
                                        <span style={{ color: '#06fd3f' }}> special characters</span>)
                                    </div>
                        <input type="password" placeholder="Re-type password" />
                        <div style={{ margin: 10 }}>
                            <CustomReCaptcha recaptchaToken={this.handleRecaptcha} />
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form action="#" onSubmit={(e) => e.preventDefault()} id="signupform">
                        <h3 style={{ color: "#fff" }}>Log in</h3>
                        {/* <div className="social-container">
                            <a href="#" className="social"><i className="black facebook f large link icon"></i></a>
                            <a href="#" className="social"><i className="black twitter f large link icon"></i></a>
                            <a href="#" className="social"><i className="black instagram f large link icon"></i></a>
                        </div> */}
                        {/* <span style={{ color: "#fff" }}>or use your account</span> */}
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <img src="https://account.moibit.io/static/media/moibit_logo_transparent.f1c5d679.png" style={{ height: "70px", width: "200px", marginBottom: "70px" }} />
                            {/* <h1>Welcome Back!</h1> */}
                            <p style={{
                                fontSize: "15px",
                                fontWeight: 500,
                                // lineHeight: "10px",
                                letterSpacing: "0.5px",
                                margin: "20px 0 30px",
                                textAlign: "justify"
                            }}>MóiBit provides easy to use file storage API’s and reliable infrastructure for building decentralized applications that keep data safe, secure and private</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <img src="https://account.moibit.io/static/media/moibit_logo_transparent.f1c5d679.png" style={{ height: "70px", width: "200px", marginBottom: "70px" }} />
                            <p style={{
                                fontSize: "20px",
                                fontWeight: 700,
                                lineHeight: "45px",
                                letterSpacing: "0.5px",
                                margin: "20px 0 30px"
                            }}>The Evolution and Future of Storage is Here</p>
                            {/* <p>Enter your personal details and start journey with us</p> */}
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            //         <footer>
            //             <p>
            //                 Created with <i className="fa fa-heart"></i> by
            // 	<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
            //                 - Read how I created this and how you can join the challenge
            // 	<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
            // </p>
            //         </footer>


        );
    }
}
export default Login;