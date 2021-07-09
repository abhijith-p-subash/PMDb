import React from 'react';
import {
    Navbar, Nav, 
    Input, InputGroup, 
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import "./navbar.css";

function search() {
    return (
        <div>
        <Navbar color="black">
            <Nav className="m-auto">
                <form className="form" action="">
                    <input placeholder="Type here.." className="search-input" type="text" />
                    <button className="search-btn">Search</button>
                </form>
            </Nav>
        </Navbar>
            
        </div>
    )
}

export default search
