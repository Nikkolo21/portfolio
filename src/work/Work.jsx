import React, { Component } from 'react';
import Card from '../shared/card/Card';
import './Work.css';

export default class Work extends Component {
    render() {
        return (
            <section>
                <p className="title green-mark">Projects I have worked on</p>
                <div className="my-work">
                    {
                        [
                            {
                                id: 1,
                                img: "work/bankea.png",
                                title: "Bankea: A Peruvian Fintech.",
                                text: "ReactJS, JavaScript, HTML, CSS, SpringBoot, Java, AWS: Lambda, SQS, SNS, DynamoDB.",
                                link: "https://bankea.app/index.html",
                            },
                            {
                                id: 3,
                                img: "work/dev-io.png",
                                title: "DEV-IO: Personal online IDE.",
                                text: "AngularJS, JavaScript, HTML, CSS, AceJS, Firebase.",
                                link: "http://dev-io.herokuapp.com/#/editor",
                            },
                            {
                                id: 7,
                                img: "work/dawere.png",
                                title: "Dawere: First Latam Online Highschool.",
                                text: "ReactJS, AngularJS, Angular, JavaScript, Typescript, HTML, CSS, GIT, Java, Spring, MySQL.",
                                link: "https://dawere.com.ve/bachillerato-online/"
                            },
                            {
                                id: 8,
                                img: "work/sinapsis.png",
                                title: "Sinapsis: Telemedicine.",
                                text: "AngularJS, Angular, ReactJS, JavaScript, HTML, CSS, HAML, JQuery, WebRTC, Ruby On Rails, PosgreSQL.",
                                link: "https://www.sinapsishealth.com/"
                            }
                        ].map(e => (
                            <a key={e.id} className="not-style" href={e.link} target="_blank" rel="noopener noreferrer">
                                <Card img={e.img} title={e.title} text={e.text}></Card>
                            </a>
                        ))
                    }  
                </div>
            </section>
        )
    }
}
