import React, { Component } from 'react'
import logo from '../../logo.svg';
import './Logo.css';

export default class Logo extends Component {
    render() {
        return (
            <div className="container">
                <img src={logo} className="container-logo" alt="logo"/>
            </div>
        )
    }
}