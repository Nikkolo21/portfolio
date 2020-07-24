import React, { Component } from 'react';
import Card from '../shared/card/Card';
import './Work.css';

export default class Work extends Component {
    render() {
        return (
            <section>
                <p className="title green-mark">My Work (as dev)</p>
                <div className="my-work">
                    {
                        [
                            {
                                id: 1,
                                img: "work/mibanco.png",
                                title: "Tetris: Mibanco/ Uber project.",
                                text: "ReactJS, Angular, JavaScript, Typescript, HTML, CSS, Spring, Azure, MySQL, OracleSQL, SQLServer.",
                                link: "https://web-eu-landingtetris-dev.azurewebsites.net/#/prestamo"
                            },
                            {
                                id: 2,
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
                                id: 4,
                                img: "work/auna.png",
                                title: "Auna: Peruvian clinics network.",
                                text: "Angular, JavaScript, Typescript, HTML, CSS, Spring Boot, Java, MySQL.",
                                link: "https://auna.pe/"
                            },
                            {
                                id: 5,
                                img: "work/entel.png",
                                title: "Entel Portability",
                                text: "Angular, Typescript, HTML, CSS.",
                                link: "https://shorturl.at/buxBX"
                            },
                            {
                                id: 6,
                                img: "work/indeed.png",
                                title: "Indeed: French AMP page",
                                text: "JavaScipt, HTML, CSS, SCSS, JSP, AMP, Spring Boot.",
                                link: "https://www.indeed.fr/"
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
