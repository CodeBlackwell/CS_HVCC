import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/homepage';
import Profile from './containers/Profile';
import SignInForm from './containers/SignInForm';
import Callback from './utils/Callback';
import Instructors from './containers/InstructorPage';

import { requireAuth } from './utils/AuthService';

export default (history) => {
    return (
        <Router history={ history }>
            <Route path="/" component={ App }>
                <Route path='/profile' component={ Profile } onEnter={ requireAuth } />
                <Route path='/callback' component={ Callback } />
                <Route path='/instructors' component={ Instructors } />
                <IndexRoute component={ SignInForm } />
            </Route>
        </Router>
    )
}
