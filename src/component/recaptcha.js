import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google';
import { loadReCaptcha } from 'react-recaptcha-google';

class CustomReCaptcha extends Component {
    constructor(props, context) {
        super(props, context);

        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }
    componentDidMount() {
        loadReCaptcha();
        if (this.captchaDemo) {
            //  console.log("started, just a second...")
            this.captchaDemo.reset();
        }
    }
    onLoadRecaptcha() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }
    verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
        // console.log(recaptchaToken, "<= your recaptcha token");
        this.props.recaptchaToken(recaptchaToken);

    }
    render() {
        return (
            <div >
                {/* You can replace captchaDemo with any ref word */}
                <ReCaptcha
                    style={{ backgroundColor: 'transparent' }}
                    ref={(el) => { this.captchaDemo = el; }}
                    size="normal"
                    data-theme="dark"
                    render="explicit"
                    sitekey="6LeQDbUUAAAAAComSulb7sm4nhKjBPe_6pe-PHiE" //development
                    // sitekey="6Ld2qb4UAAAAABiZzaHI6LPM0cUQ4BgGlbrLov8x" //Test environment IP
                    // sitekey="6LfXEr8UAAAAANMhGecFUimHtzhRrCWcrdXYZX_t" //IP for WA1
                    // sitekey="6LcnBLgUAAAAADpt8w7fLYn3Wdk2krpJDZy9FTC8" //production
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}
                />
            </div>
        );
    };
};
export default CustomReCaptcha;
