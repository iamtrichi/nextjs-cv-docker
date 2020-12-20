import React from 'react'
import Title from './Title'
import Item from './EducationItem'
import Timeline from './ExperiencesTimelineItem'

export default class Education extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Education" color='#ffffff'/>
                <div className="container">
                    <Item 
                        time="2018 - 2021"
                        name="Higher Institute of Informatics"
                        major="Software Engeneering"
                        gpa="ISI Ariana"
                        color="#2ecc71"
                    />
                    <Item 
                        time="2015 - 2018"
                        name="higher institute of technological studies"
                        major="Developper of information systems"
                        gpa="ISET Rades"
                        color="#3498db"
                    />
                </div>
                <br/>
                <br/>
                <Title title="Academic Projects" color='#ffffff'/>
                <div className="container">
                    <Timeline side="left" time="2020/2021" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Images comparing</h4>
                        <p>
                            <i className="position">Node.js: </i><br/>
                            Input an image and display 10 similar images by pHash<br/>
                            using <b>jQuery</b> and <b>NodeJS</b>
                        </p>
                    </Timeline> 
                    <Timeline side="right" time="2019/2020" color="#3498db">
                        <h4 style={{'color': '#3498db'}}> Apllication for the institute</h4>
                        <p>
                            <i className="position">Ionic:</i><br/>
                            Develope a mobile application to select and display demands for administrative things<br/>
                            using <b>Ionic</b>
                        </p>
                    </Timeline> 
                    <Timeline side="left" time="2019/2020" color="#2ecc71">
                        <h4 style={{'color': '#2ecc71'}}>Facebook like mobile apllication</h4>
                        <p>
                            <i className="position">Ionic:</i><br/>
                            Develope a mobile application to share posts and images, send messages to friends and online video chat/call and messaging<br/>
                            using <b>Ionic</b>, and <b>NodeJS</b>
                        </p>
                    </Timeline> 
					<Timeline side="right" time="2019/2020" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>e-commerce mobile application</h4>
                        <p>
                            <i className="position">Ionic and .Net/C#:</i><br/>
                            e-commerce mobile application with OAuth 2.0<br/>
                            using <b>Ionic</b>, and <b>C#</b>
                        </p>
                    </Timeline> 
					<Timeline side="left" time="2018/2019" color="#ff5722">
                        <h4 style={{'color': '#ff5722'}}>Matrix operations</h4>
						<p>
                            <i className="position">ionic and matlab:</i><br/>
							Creating a mobile app wich in the user can enter the matrix and make operations<br/>
							using <b>ionic</b>, <b>NodeJS</b> wich call a <b>mathlab</b> executable program 
                        </p>
                    </Timeline> 
					<Timeline side="right" time="2017/2018" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>Managemenet for Books library</h4>
                        <p>
                            <i className="position">JEE</i><br/>
                        </p>
                    </Timeline> 
					<Timeline side="left" time="2016/2017" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Managemenet for Books library</h4>
                        <p>
                            <i className="position">Visual Basic C#</i><br/>
                        </p>
                    </Timeline> 
					<Timeline side="right" time="2016/2017" color="#ff5722">
                        <h4 style={{'color': '#ff5722'}}>Ping pong game</h4>
                        <p>
                            <i className="position">Python</i><br/>
                            Making a game with python<br/>
                            using <b>Kivy framework</b>
                        </p>
                    </Timeline> 
					<Timeline side="left" time="2015/2016" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>Instagram Clone</h4>
                        <p>
                            <i className="position">jQuery</i><br/>
                            Creating a Instagram clone with simple get/post request to a php back-end<br/>
                            using <b>jQuery</b>
                        </p>
                    </Timeline> 
                </div>
			<style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/bg-edu.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}
