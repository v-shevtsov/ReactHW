import React, { Component } from 'react'
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import './Main_container.css';

export default class MainContainer extends Component {
    render() {
        return (
            <div className="Main-container">
                <Header/>
                <Logo />
                <Footer/>
            </div>
        );
    }
}
