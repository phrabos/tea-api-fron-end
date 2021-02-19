import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Loose Leaf Teas</h1>
                <nav>
                    <NavLink exact className = 'nav' activeClassName="selected" to="/">
                    Home
                    </NavLink>
                    <NavLink exact className = 'nav' activeClassName="selected" to="/collection">
                    Tea Collection
                    </NavLink>
                    {/* <NavLink exact className = 'nav' activeClassName="selected" to="/poke/:id">
                    Detail
                    </NavLink> */}
                </nav>
                
            </header>
        )
    }
}
