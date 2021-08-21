import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    };

    return (
        <div className="navigation-wrapper">
            <div className="navigation">
                <div className="left">
                    {/* <div className="left">Home</div> */}
                    <NavLink exact to="/" className="nav-link">
                        <div className="navbar-link">Home</div>
                    </NavLink>
                </div>

                <div className="center">
                    <div className="logo">
                        {/* Hard refresh when click on logo */}
                        <a className="navbar-link" href="#">
                            Logo
                        </a>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger-container">
                        <div className="hamburger navbar-link">===</div>
                        <div className="hamburger-dropdown-list-container">
                            <ul className="dropdown-list">
                                <a href="/gallery">
                                    <li className="nav-dropdown-item">
                                        gallery
                                    </li>
                                </a>
                                <a href="/about">
                                    <li className="nav-dropdown-item">
                                        about us
                                    </li>
                                </a>
                                <a href="/contact">
                                    <li className="nav-dropdown-item">
                                        contacts
                                    </li>
                                </a>
                                <a href="/auth">
                                    <li className="nav-dropdown-item">login</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(NavigationComponent);
