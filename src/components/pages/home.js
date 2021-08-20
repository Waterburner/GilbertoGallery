import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="homepage-wrapper">
                    <div className="homepage">
                        <div className="heading-section-wrapper">
                            <div className="heading-section">
                                <div className="heading-wrapper">
                                    <h1 className="main-heading">Gilberto</h1>
                                    <h2 className="main-subheading">gallery</h2>
                                </div>
                            </div>
                        </div>

                        <div className="description-section-wrapper">
                            <div className="description-section">
                                <div className="description-heading">
                                    <h3 className="heading">
                                        some heading text
                                    </h3>
                                </div>
                                <div className="description-img-wrapper">
                                    img
                                    {/* <img className="description-img" src="" alt="" /> */}
                                </div>
                                <div className="description-text-wrapper">
                                    <p className="description-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Aliquam impedit
                                        quaerat reiciendis ab reprehenderit
                                        obcaecati necessitatibus eaque voluptas
                                        maxime, nemo molestias ducimus, modi sit
                                        esse eveniet iste nihil dignissimos
                                        magnam. Placeat, totam.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="highlights-section-wrapper">
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
        );
    }
}
