import { Component } from 'react';
import './Menu.css'

export default class Menu extends Component {
    render() {
        return (
            <ul className='menu'>
                <li className='menu__item'><a href="#">Home</a></li>
                <li className='menu__item'><a href="#">About us</a></li>
                <li className='menu__item'><a href="#">Price</a></li>
                <li className='menu__item'><a href="#">Contact</a></li>
            </ul>
        )
    }
}