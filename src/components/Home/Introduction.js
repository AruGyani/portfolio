import React from 'react';

import '../../styles/Home/Introduction.css';

import { Jumbotron, Container } from 'reactstrap';

function Introduction() {
    return (
        <div>
            <Jumbotron className="jumbotron" fluid>
                <Container className="header">
                    <h1 className="display-3">Aru Gyani</h1>
                    <hr/>
                    <h2 className="display-6">Artificial Intelligence Intern at <a href="https://forwardedge-ai.com">Forward Edge-AI</a></h2>
                    <p className="lead">Computer Science at UT Dallas, Full-Stack Web Developer, Machine Learning Research</p><br/><br/>

                    <p>I am also an avid pianist and tennis player.</p>    
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Introduction;