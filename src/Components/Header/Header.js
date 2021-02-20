import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import logo from '../../logo.svg';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className="header__logo">
                    <img src={logo} alt="React"/>
                </div>
                <div className="header__menu">
                    <Menu />
                </div>
            </header>
        )
    }

}