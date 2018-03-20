import React, { Component } from 'react';

import { headerGreetingText } from '../../utils/CMS';
import s from './header.css';

class Header extends Component {
    render() {
        return (
            <header className={s.header}>
                <div className={s.cbHeaderText}>{ headerGreetingText }</div>
            </header>
        )
    }
};

export default Header;