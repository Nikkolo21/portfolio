import React, { Component } from 'react';
import Principal from '../shared/Principal/Principal';
import './AboutMe.css';

export default class AboutMe extends Component {
    render() {
        const text = (
            <div className="about">
                <h1>- Hi! Let me talk (a little) about me</h1>
                <p>I am a Software developer based in Lima, Perú. I've 5 years of experience in web development, mobile development and software development in general.</p>
                <p>I enjoy learn about new technologies and I really (really) like doing IA and machine learning in my free time.</p>
                <p>Feel free to contact me for freelance projects, collaborations or say Hi at <a className="mark" href="mailto: luis@autana.com">luis@autana.com</a>.</p>
            </div>
        );
        const img = "web_developer.svg";
        return (
            <>
                <Principal img={img} text={text}/>
            </>
        )
    }
}
