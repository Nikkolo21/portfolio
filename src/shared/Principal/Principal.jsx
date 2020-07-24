import React, { Component } from 'react';
import './Principal.css';

export default class Principal extends Component {
    render() {
        const { text, img } = this.props;
        return (
            <div className="principal-box">
                <div className="left-box">
                    {text}
                </div>
                <div className="right-box" style={{backgroundImage: `url('/assets/img/${img}')`}}></div>
            </div>
        )
    }
}
