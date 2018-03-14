
import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default" style={ {border: "20px groove #294d35"} }>
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">HVCC Student Portal</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                        {
                            ( isLoggedIn() ) ? <Link to="#OSP">Online Classes</Link> :  ''
                        }

                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        {
                            (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() =>
                                logout()}>Log out </button> ) :
                                ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;