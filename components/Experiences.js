import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Experiences" color='#2c3e50'/>
                <div className="container">
                    <Timeline side="left" time="Jun 2020 - Present" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Codika Web</h4>
                        <p>
                            <i className="position">Software Developer based on JavaScript</i><br/>
                            Develope mobile & web applications<br/>
                            using <b>Angular, jQuery, PHP</b> and <b>NodeJS</b>
                        </p>
                    </Timeline> 
                    <Timeline side="right" time="Jan 2018 - Jun 2018" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>SQLI Services</h4>
                        <p>
                            <i className="position">Internship of end of study project (PFE)</i><br/>
                            Develope a mobile application and a website to manage the content with<br/>
                            using <b>Ionic</b> and <b>PHP</b>
                        </p>
                    </Timeline> 
                    <Timeline side="left" time="Jan 2017 - Jan 2017" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>Tunis Ré</h4>
                        <p>
                            <i className="position">Internship of end of year project (PFE)</i><br/>
                            Develope a web application to manage disputed account in an insurance entreprise  with<br/>
                            using <b>JEE,SPRING Boot, JSF(PrimeFaces)</b> and <b>MYSQL</b>
                        </p>
                    </Timeline> 
					<Timeline side="right" time="Jan 2016 - Jan 2016" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>BFPME</h4>
                        <p>
                            <i className="position">Internship of introduction to professional life</i><br/>
                            Develope a web application to manage internships on the entreprise  with<br/>
                            using <b>PHP, jQuery</b> and <b>MYSQL</b>
                        </p>
                    </Timeline> 
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}