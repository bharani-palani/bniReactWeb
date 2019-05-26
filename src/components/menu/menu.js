import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Wrapper from "../wrapper/wrapper";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

class Menu extends React.Component {
    render() {
        return (
            <Router>
                <div className="menu-wrapper">
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="#home"><a className="navbar-brand" href="index.html"><img src={require("../../images/logo-normal.png")} alt="" /></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        
                    </Navbar.Collapse>
                </Navbar>
                    {/* <div className="mobile-menu">
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="index.html"><img src={require("../../images/logo-normal.png")} alt="" /></a>
                                </div>
                                <div id="navbar" className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown">
                                            <a href={"javasript:void(0)"} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <span className="fa fa-angle-down"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href={"javasript:void(0)"}>Menu Example 01</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 02</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 03</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 04</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 05</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 06</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href={"javasript:void(0)"} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="fa fa-angle-down"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href={"javasript:void(0)"}>Menu Example 01</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 02</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 03</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 04</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 05</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 06</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href={"javasript:void(0)"} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Portfolio <span className="fa fa-angle-down"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href={"javasript:void(0)"}>Menu Example 01</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 02</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 03</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 04</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 05</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 06</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href={"javasript:void(0)"} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop <span className="fa fa-angle-down"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href={"javasript:void(0)"}>Menu Example 01</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 02</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 03</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 04</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 05</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 06</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href={"javasript:void(0)"} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog <span className="fa fa-angle-down"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href={"javasript:void(0)"}>Menu Example 01</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 02</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 03</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 04</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 05</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 06</a></li>
                                            </ul>
                                        </li>
                                        <li><a href={"javasript:void(0)"}>Contact</a></li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="https://html.design">Download <i className="fa fa-shopping-bag"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div> */}
                    <header className="vertical-header">
                        <div className="vertical-header-wrapper">
                            <nav className="nav-menu">
                                <div className="logo">
                                    <Link to={"/"}>
                                        <img src={require("../../images/logo.png")} alt="" />
                                    </Link>
                                </div>
                                <div className="margin-block"></div>
                                <ul className="primary-menu">
                                    {/* <li className="child-menu"><a href={"javasript:void(0)"}>Pages <i className="fa fa-angle-right"></i></a>
                                        <div className="sub-menu-wrapper">
                                            <ul className="sub-menu center-content">
                                                <li><a href={"javasript:void(0)"}>Menu Example 01</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 02</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 03</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 04</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 05</a></li>
                                                <li><a href={"javasript:void(0)"}>Menu Example 06</a></li>
                                            </ul>
                                        </div>
                                    </li> */}
                                    <li className="child-menu">
                                        <Link to={"/about"}>About</Link>
                                    </li>
                                    <li className="child-menu">
                                        <Link to={"/technologies"}>Technolgies</Link>
                                    </li>
                                    <li className="child-menu"><a href={"javasript:void(0)"}>Projects</a></li>
                                    <li className="child-menu"><a href={"javasript:void(0)"}>Skills</a></li>
                                    <li className="child-menu"><a href={"javasript:void(0)"}>Awards</a></li>
                                    <li className="child-menu"><a href={"javasript:void(0)"}>Education</a></li>
                                    <li className="child-menu"><a href={"javasript:void(0)"}>Contact</a></li>
                                    <li className="child-menu"><a href={"javasript:void(0)"}>Resume</a></li>
                                </ul>
                                <div className="margin-block"></div>

                                <div className="menu-search">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="What you are looking?" />
                                            <button className="btn btn-primary"><i className="fa fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>

                                <div className="margin-block"></div>

                                <div className="menu-social">
                                    <ul className="list-inline text-center">
                                        <li><a href={"javasript:void(0)"}><i className="fa fa-facebook"></i></a></li>
                                        <li><a href={"javasript:void(0)"}><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href={"javasript:void(0)"}><i className="fa fa-twitter"></i></a></li>
                                        <li><a href={"javasript:void(0)"}><i className="fa fa-instagram"></i></a></li>
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