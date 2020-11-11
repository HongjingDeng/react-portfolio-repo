import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import cv from '../assets/images/cv.png';
function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
    Hongjing Deng <span></span><a href="https://www.linkedin.com/in/hongjing-deng-515927180" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/></a><span> </span><a href="https://github.com/HongjingDeng" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                    <span> </span><a href="https://hongjingdeng.github.io/Portfolio/assets/css/HONGJING_CV.pdf" target="_blank" rel="noopener noreferrer"><img src={cv} alt="hongjing's cv"/></a> 
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Copyright @ Hongjing 2020
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;