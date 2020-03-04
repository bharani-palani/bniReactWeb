import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Wrapper from "../wrapper/wrapper";
import { Navbar } from "react-bootstrap";
import BackendUpdate from "./backendUpdate";
import "./menu.scss";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarExpanded: false,
            toggleSideBar: false,
            openModal: false,
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
                    href:"/contact",
                    label: "Contact"
                },
                {
                    href:"/resume",
                    label: "Resume"
                },
                {
                    href:"/utilities",
                    label: "JS Utilities"
                },
                {
                    href:"/write",
                    label: "Write"
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
    componentDidMount() {
        window.addEventListener("keydown", event => {
            if(event.ctrlKey && event.keyCode === 66) {
                this.setState({ openModal: true })
            }
        });
        const nav = document.getElementsByTagName("nav")[0];
        nav.addEventListener("touchmove", event => {
            if(event.touches[0].clientX > 200 && event.touches[0].clientX < 210) {
                this.setState({ openModal: true })
            }
        })
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
    toggleSideBar = () => {
        this.setState({ toggleSideBar: !this.state.toggleSideBar })
    }
    toggleStyle = () => {
        return this.state.toggleSideBar ?
        { position: "absolute", right : "calc(100% - 0px)" }
        :
        { position: "absolute", right : "calc(100% - 260px)" }
    }
    hamburgerStyle = () => {
        return this.state.toggleSideBar ?
        { right : "calc(100% - 46px)" }
        :
        { right : "calc(100% - 260px)" }
    }
    render() {
        return (
            <Router>
                <div className="menu-wrapper">
                    {this.state.openModal && (<BackendUpdate 
                        show={this.state.openModal} 
                        onHide={(bool) => this.setState({ openModal: bool })} 
                        size="sm"
                        animation={false}
                        style={{ zIndex: 9999 }}
                        />
                    )}
                    {
                        !this.state.toggleSideBar ?
                        <video className="videoTag" autoPlay loop muted>
                            <source src={require("../../videos/video.mp4")} type='video/mp4' />
                        </video>
                        :
                        null
                    }

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
                                        <li key={i}><Link to="" onClick={() => this.openBlank(media.href)}><i className={media.icon}></i></Link></li>
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
                        <i style={this.hamburgerStyle()} onClick={() => this.toggleSideBar()} className={`fa hamburger ${this.state.toggleSideBar ? "fa-times higlight" : "fa-bars"}`} />
                        <div style={this.toggleStyle()} className="vertical-header-wrapper slideRight">
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

                                {/* <div className="menu-search">
                                    <form className="form-group">
                                        <div>
                                            <input type="text" className="form-control" placeholder="What you are looking?" />
                                            <button className="btn btn-primary"><i className="fa fa-search"></i></button>
                                        </div>
                                    </form>
                                </div> */}

                                <div className="menu-social">
                                    <ul className="list-inline text-center">
                                    {
                                        this.state.socialMedias.map((media, i) => (
                                            <li key={i}><Link to="" onClick={() => this.openBlank(media.href)}><i className={media.icon}></i></Link></li>
                                        ))
                                    }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>  
                <div className={`wrapper ${this.state.toggleSideBar ? "toggleOn" : "toggleOff"}`}> 
                    <Wrapper />
                </div>
            </Router>
        );
    };
}

export default Menu;