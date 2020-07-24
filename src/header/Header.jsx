import React, { Component } from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <NavLink exact={true} activeClassName="is-active" className="name link" to="/">
                    <b>LUIS MACHILLANDA</b>
                </NavLink>
                <NavLink activeClassName="is-active" className="link" to="/about">
                    About me
                </NavLink>
            </header>
        )
    }
}
