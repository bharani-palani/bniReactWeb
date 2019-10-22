import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Wrapper from "../wrapper/wrapper";
import { Navbar } from "react-bootstrap";
import "./menu.css";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarExpanded: false,
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
            ],
            socialMedias: [
                {
                    name: "Facebook",
                    href: "https://www.facebook.com/bharani.palani",
                    icon: "fa fa-facebook"
                },
                {
                    name: "KinkedIn",
                    href: "https://www.linkedin.com/in/bharani-palani-4860b2b3/",
                    icon: "fa fa-linkedin"
                },
                {
                    name: "Twitter",
                    href: "https://twitter.com/barani_sug",
                    icon: "fa fa-twitter"
                },
                {
                    name: "Instagram",
                    href: "https://www.instagram.com/bharani.palani/",
                    icon: "fa fa-instagram"
                },
            ]
        }
    }
    onNavBarToggle = () => {
        this.setState({ navBarExpanded: !this.state.navBarExpanded });
    }
    onNavBarClose = () => {
        this.setState({ navBarExpanded: false });
    }
    openBlank = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    }
    render() {
        return (
            <Router>
                <div className="menu-wrapper">
                    <video className="videoTag" autoPlay loop muted>
                        <source src={require("../../videos/video.mp4")} type='video/mp4' />
                    </video>

                    <div className="mobile-menu">
                        <Navbar fixed={"top"} bg="dark" onToggle={this.onNavBarToggle} expanded={this.state.navBarExpanded} expand="lg">
                            <Navbar.Brand className="navbar-brand">
                                <Link onClick={this.onNavBarClose} to={"/"}>
                                    <img className="mobLogoImg " src={require("../../images/avatar/bniBlack.png")} alt="" />
                                    <div className="mobLogoCaption">Bharani</div>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="navbar-toggle">
                                <i className="fa fa-bars" />
                            </Navbar.Toggle>
                            <Navbar.Collapse style={{ marginTop: "80px" }} id="basic-navbar-nav">
                            <ul className={`mobile-menu-social text-center ${this.state.navBarExpanded ? "slidedown" : "slideup"}`}>
                                {
                                    this.state.socialMedias.map((media, i) => (
                                        <li key={i}><Link onClick={() => this.openBlank(media.href)}><i className={media.icon}></i></Link></li>
                                    ))
                                }
                            </ul>
                            <ul className="primary-menu">
                                {
                                    this.state.menus.map((menu, i) => (
                                        <li  key={i} className="child-menu">
                                            <Link onClick={this.onNavBarToggle} to={menu.href}>{menu.label}</Link>
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
                                    {
                                        this.state.socialMedias.map((media, i) => (
                                            <li key={i}><Link onClick={() => this.openBlank(media.href)}><i className={media.icon}></i></Link></li>
                                        ))
                                    }
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