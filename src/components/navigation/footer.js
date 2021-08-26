import React, { Component } from "react";

export default function () {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <div className="footer-left-pages">Home</div>
                    <div className="footer-left-pages">Contact</div>
                </div>
                <div className="footer-center">
                    <div className="logo">Logo</div>
                    <div className="social-btn">
                        <div className="social-left">FB</div>
                        <div className="social-center">IG</div>
                        <div className="social-right">DA</div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="phone-number">4091231234</div>
                    <div className="address">
                        123 Tiki street <br />
                        Tiki island, TX
                    </div>
                </div>
            </div>
        </div>
    );
}
