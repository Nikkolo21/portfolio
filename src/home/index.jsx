import React, { Component } from 'react';
import Principal from '../shared/Principal/Principal';
import Work from '../work/Work';

export default class Home extends Component {
    render() {
        const text = (<p className="title">HI, I'M A <span className="mark">SOFTWARE DEVELOPER</span> AND IA ENTHUSIAST LIVING IN LIMA.</p>);
        const img = "startup_life.svg";
        return (
            <>
                <Principal text={text} img={img} />
                <Work />
            </>
        )
    }
}
