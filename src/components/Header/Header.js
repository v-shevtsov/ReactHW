import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <p className="header__welcome">Welcome to TodoList!</p>
            </header>
        );
    }
}

export default Header;