import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>I am a bilingual full stack developer with medical devices and overseas sourcing background. Currently, I'm based in Jersey. I love turning ideas into realities and hopefully creating something that makes people smile.

                <li>Problem Solving: I can take vague problems and requirements and break them down into steps and solutions.</li>
                    <li>Systems Thinking: I'm good at thinking abstractly and putting together systems with many moving parts.</li>
                    <li>Communicating: I can explain things clearly, communicate problems quickly and write accurately and concisely.</li>
                    <li>Organising: I can self-manage, work to deadlines, organise projects and present well-structured and complete deliverables.</li>
                </p>

                <p>My latest project, Vocabulary Bee , is a customized language learning app for French enthusiasts. You can check it out <a href="https://floating-earth-22602.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with MongoDB, Express JS, and Node JS and React JS.</p>

                <p>Also, to see more of my works at my github page <a href="https://github.com/HongjingDeng" target="_blank" rel="noopener noreferrer">here</a></p>

                <p><strong>Email:hongjingdeng@gmail.com</strong>     <br></br> <span><strong>Cell:908-800-1878</strong></span><br>
                </br><strong>Location: Flemington NJ</strong></p>
            </Content>
        </div>
    );

}

export default AboutPage;