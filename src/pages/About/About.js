import { Container, Row, Col } from 'reactstrap';
import React from 'react';
import "./About.css";
import {useHistory} from "react-router-dom"

function About() {
    const history = useHistory();
    return (
        <div className="about-1">
            <div className="about-root">
                <h1>About</h1>
                <hr />
                <div className="about-list">
                    <Container>
                        <Row>
                        <h5 style={{color:"yellow"}}>"We are using TMDB Api sevices"</h5>
                        <p>PMDb <span style={{color:"yellow"}}>(Pogah movie database)</span> is the world's one of the most popular and authoritative source for information on movies, TV shows, and celebrities.
                        PMDb is an Zetiny company. For more information: <span style={{color:"yellow"}} >zetiny.official@gmai.com</span></p>
                           <br />
                            <hr /> 
                            <br />                          
                            <ol>
                            <h6>About TMDb</h6>
                            
                                <li>
                                    Every year since 2008, the number of
                                    contributions to our database has increased.
                                    With over 400,000 developers and companies
                                    using our platform, TMDb has become a premiere
                                    source for metadata.
                                </li>
                                <li>
                                    Along with extensive metadata for movies,
                                    TV shows and people, we also offer one of
                                    the best selections of high resolution posters
                                    and fanart. On average, over 1,000 images are
                                    added every single day.
                                </li>
                                <li>
                                    We're international.
                                    While we officially support 39
                                    languages we also have extensive
                                    regional data. Every single day TMDb
                                    is used in over 180 countries.
                                </li>
                                <li>
                                    Our community is second to none.
                                    Between our staff and community
                                    moderators, we're always here to help.
                                    We're passionate about making sure your
                                    experience on TMDb is nothing short of amazing.
                                </li>
                                <li>
                                    Trusted platform. Every single day our
                                    service is used by millions of people
                                    while we process over 3 billion requests.
                                    We've proven for years that this is a service
                                    that can be trusted and relied on.
                                </li>
                            </ol>
                        </Row>
                        <Row>
                            <div className="about-btn">
                            <button onClick={()=> history.push("/contact")}  >Contact Us</button>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default About
