import React from 'react';
import "./footer.css";
import {useHistory} from "react-router-dom"
import { Container, Col, Row } from "reactstrap";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

function Footer() {

    const history = useHistory();
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg="3" md="1" sm="1">
                        <div  className="footer-main">
                            <div className='footer-logo'>
                                <h1>PMDb</h1>
                            </div>
                            <p style={{color: "yellow"}}>pogah movie database</p>
                        </div>
                    </Col>
                    <Col lg="3" md="1" sm="1">
                        <div className="col-content">
                            <h5>THE BASICS</h5>
                            <a href="/about">About PMDb</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/support">Support</a>
                        </div>
                    </Col>
                    <Col lg="3" md="1" sm="1">
                        <div className="col-content">
                            <h5>CONTENT</h5>
                            <a href="/popular">Movies</a>
                            <a href="/top_rated">TV Shows</a>
                            <a href="/">Trailers</a>
                        </div>
                    </Col>
                    <Col lg="3" md="1" sm="1">
                        <div className="col-content">
                            <h5>LEGAL</h5>
                            <a href="/">Terms of Use</a>
                            <a href="/">Privacy Policy</a>
                            <a href="/">Guidelines</a>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="social-icons">
                        <InstagramIcon className="i" />
                        <GitHubIcon className="i" />
                        <LinkedInIcon className="i" />
                        <MailIcon className="i" />
                    </div>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <div className='copy'>
                        <footer>&copy; Copyright 2021 PMDb</footer>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
