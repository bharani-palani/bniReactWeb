import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Wrapper from "../wrapper/wrapper";
import { Navbar } from "react-bootstrap";
import "./menu.css";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {
                    href:"/about",
                    label: "About"
                },
                {
                    href:"/technologies",
                    label: "Technolgies"
                },
                {
                    href:"/projects",
                    label: "Projects"
                },
                {
                    href:"/skills",
                    label: "Skills"
                },
                {
                    href:"/awards",
                    label: "Awards"
                },
                {
                    href:"/education",
                    label: "Education"
                },
                {
                    href:"/contact",
                    label: "Contact"
                },
                {
                    href:"/resume",
                    label: "Resume"
                },
            ]
        }
    }
    render() {
        return (
            <Router>
                <div className="menu-wrapper">
                <video className="videoTag" autoPlay loop muted>
                    <source src={require("../../videos/video.mp4")} type='video/mp4' />
                </video>

                    <div className="mobile-menu">
                        <Navbar bg="light" expand="lg" sticky="top">
                            <Navbar.Brand className="navbar-brand">
                                <Link to={"/"}><img src={require("../../images/logo-normal.png")} alt="" /></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="navbar-toggle">
                                <i className="fa fa-bars" />
                            </Navbar.Toggle>
                            <Navbar.Collapse style={{ marginTop: "80px" }} id="basic-navbar-nav">
                            <ul className="primary-menu">
                                {
                                    this.state.menus.map((menu, i) => (
                                        <li key={i} className="child-menu">
                                            <Link to={menu.href}>{menu.label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <header className="vertical-header">
                        <div className="vertical-header-wrapper">
                            <nav className="nav-menu">
                                <div className="logo">
                                    <Link to={"/"}>
                                        <img src={require("../../images/avatar/bniBlack.png")} alt="" />
                                    </Link>
                                </div>
                                <ul className="primary-menu">
                                    {
                                        this.state.menus.map((menu, i) => (
                                            <li key={i} className="child-menu">
                                                <Link to={menu.href}>{menu.label}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>

                                <div className="menu-search">
                                    <form className="form-group">
                                        <div>
                                            <input type="text" className="form-control" placeholder="What you are looking?" />
                                            <button className="btn btn-primary"><i className="fa fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>

                                <div className="menu-social">
                                    <ul className="list-inline text-center">
                                        <li><a href="https://www.facebook.com/bharani.palani" rel="facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/bharani-palani-4860b2b3/" rel="linkedin" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="https://twitter.com/barani_sug" rel="twitter" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.instagram.com/bharani.palani/" rel="instagram" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>  
                <Wrapper />
            </Router>
        );
    };
}

export default Menu;