import React from 'react'
import Title from './Title'
import Item from './EducationItem'

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