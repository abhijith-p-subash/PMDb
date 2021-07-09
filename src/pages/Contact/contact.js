import React from 'react';
import "./contact.css";
import {Container, Row, Col} from 'reactstrap';

function contact() {
    return (
        <div>
            <div className='con-root'>
                <div>
                <h1>Contact</h1>
                <hr />
                </div>
                <Container>
                    <Row>
                        <Col >
                            <div className="email">
                                <h4>Email</h4>
                                <hr />
                                <p>If you would like to contact us directly, you can use this mail</p>
                                <a style={{color:"yellow", textDecoration: "none"}} href="mailto:zetiny.official@gmail.com">zetiny.official@gmail.com</a>
                            
                            </div>
                            <div>
                                <h4>For Web-development</h4>
                                <hr />
                                <p>My development can range from developing 
                                a simple single static page of plain text to
                                 complex web applications, electronic businesses,
                                  and social network services.</p>

                                  <h6>Contact Me..</h6>
                                  <a style={{color:"yellow", textDecoration: "none"}} href="mailto:abhijith.p.subash@gmail.com">abhijith.p.subash@gmail.com</a>
                            </div>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default contact
