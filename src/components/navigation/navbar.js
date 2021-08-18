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
                        <div className="left">Home</div>
                    </NavLink>
                </div>

                <div className="center">
                    <div className="logo">
                        {/* Hard refresh when click on logo */}
                        <a href="#">Logo</a>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger">===</div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(NavigationComponent);
