import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="homepage-wrapper">
                    <div className="homepage">
                        <div className="welcome-section-wrapper">
                            <div className="welcome-section">
                                <div className="heading-wrapper">
                                    <h1 className="main-heading heading">
                                        <span className="heading-txt">G</span>
                                        <span className="heading-txt">i</span>
                                        <span className="heading-txt">l</span>
                                        <span className="heading-txt">b</span>
                                        <span className="heading-txt">e</span>
                                        <span className="heading-txt">r</span>
                                        <span className="heading-txt">t</span>
                                        <span className="heading-txt">o</span>
                                    </h1>
                                    <h2 className="main-subheading heading">
                                        <span className="heading-txt">g</span>
                                        <span className="heading-txt">a</span>
                                        <span className="heading-txt">l</span>
                                        <span className="heading-txt">l</span>
                                        <span className="heading-txt">e</span>
                                        <span className="heading-txt">r</span>
                                        <span className="heading-txt">y</span>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="homepage-content-wrapper">
                            <div className="description-section-wrapper">
                                <div className="description-section">
                                    <div className="description-heading">
                                        <h3 className="heading">
                                            some heading text
                                        </h3>
                                    </div>
                                    <div className="description-content-wrapper">
                                        <div className="description-img-wrapper">
                                            img
                                            {/* <img className="description-img" src="" alt="" /> */}
                                        </div>
                                        <div className="description-text-wrapper">
                                            <p className="description-text">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Aliquam impedit quaerat
                                                reiciendis ab reprehenderit
                                                obcaecati necessitatibus eaque
                                                voluptas maxime, nemo molestias
                                                ducimus, modi sit esse eveniet
                                                iste nihil dignissimos magnam.
                                                Placeat, totam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="highlights-section-wrapper">
                                featured works
                                <div className="highlights-section">
                                    <div className="left-side">
                                        <div className="img-wrapper">
                                            img
                                            {/* <img src="" alt="" /> */}
                                        </div>
                                    </div>
                                    <div className="center">
                                        <div className="img-wrapper">
                                            img
                                            {/* <img src="" alt="" /> */}
                                        </div>
                                    </div>
                                    <div className="right-side">
                                        <div className="img-wrapper">
                                            img
                                            {/* <img src="" alt="" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
