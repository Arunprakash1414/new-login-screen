import React, { Component } from 'react';
import Login from "./login";
import "./account.css";

class Account extends Component {


    render() {
        return (
            <div id="accountscreen">
                <Login />
            </div>
        )
    }
}

export default Account;