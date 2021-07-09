import react, { useState } from "react";
import "./navbar.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    NavbarText
} from "reactstrap";
import Search from "./search";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Fade from '@material-ui/core/Fade';
import {useHistory} from "react-router-dom";
import Poster from "../Poster/poster";
import Shows from "../../pages/MultiData/MultiData";


function Topbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const history = useHistory();

    const search_toggle = () => setSearchBar(!searchBar);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {/* <div className="brand">
            
        </div> */}
            <Navbar sticky="top" className="navbar" dark expand="md">
                <NavbarBrand href="/"><div className="brand-body"><h3>PMDb</h3></div></NavbarBrand>
                <NavbarToggler className="toggler" onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="m-auto links" navbar> 
                    <NavItem className="links">
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown className="links"  >
                            <DropdownToggle nav caret>
                                Movie
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem href="/popular">
                                    Popular
                                </DropdownItem>
                                <DropdownItem href="/now_playing">
                                    Nowplaying
                                </DropdownItem>
                                <DropdownItem href="/upcoming">
                                    Upcoming
                                </DropdownItem>
                                <DropdownItem href="/top_rated">
                                    Top rated
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className="links">
                            <DropdownToggle nav caret>
                                TV Shows
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem href="popular">
                                    Popular
                                </DropdownItem>
                                <DropdownItem href="top_rated">
                                    Top Rated
                                </DropdownItem>
                                <DropdownItem href="on_the_air">
                                    On TV
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem className="links">
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem className="links">
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        {/* <NavItem>
                        <div className="x">
                        <div onClick={search_toggle} className="search-icon m-auto">
                            <SearchSharpIcon />
                        </div>
                        </div>
                        </NavItem> */}
                        {/* <NavItem className="login-btn">
                            <AccountBoxIcon fontSize="large" style={{ color: "yellow" }} />
                            <button className="btn-2">Sign In</button>
                        </NavItem> */}
                    </Nav>
                </Collapse>
            </Navbar>
            {searchBar ? <Fade timeout={4000}><Search /></Fade> : null}
        </div>

    )
}


export default Topbar;