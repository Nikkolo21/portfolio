import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
    render() {
        const { img, title, text } = this.props;
        return (
            <div className="card-box">
                <figure className="card-top" style={{overflow: "hidden"}}>
                    <img src={`/assets/img/${img}`} alt=""/>
                </figure>
                <div className="card-text">
                    <p className="card-text-title green-mark">{title}</p>
                    <p className="card-text-description">{text}</p>
                </div>
            </div>
        )
    }
}
