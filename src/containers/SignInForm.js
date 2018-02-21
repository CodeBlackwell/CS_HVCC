import React, { Component } from 'react';

import './SignInFormStyles.css'

class SignInForm extends Component {
    render () {
        return (
            <form className="SignInForm" style={styles}>
                <label>
                    Student Login:
                    <hr/>
                    <input type="text" name="username" />
                    <input type="text" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SignInForm;