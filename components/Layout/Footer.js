import React, { Component } from 'react';
import Link from "next/link";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src={require("../../images/logo.png")} alt="logo" width="150" height="30" />
                                    </a>
                                </Link>
                                </div>
                                    
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Tezkor linklar</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="#turkumlar">
                                            <a>Turkumlar</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/brends">
                                            <a>Brendlar</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Profil</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Sevimlilar</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Kontaktlar</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i> 
                                        Location: 2750 Quadra Street <br /> Victoria, Canada
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i> 
                                        Call Us: <a href="tel:(+123) 456-7898">(+123) 456-7898</a>
                                    </li>
                                    <li>
                                        <i className="far fa-envelope"></i> 
                                        Email Us: <a href="mailto:support@novine.com">support@novine.com</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-fax"></i> 
                                        Fax: <a href="tel:+123456">+123456</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Ijtimoiy tarmoqlar</h3>

                                <ul className="information-links">
                                    <li>
                                        <Link href="#">
                                            <a>
                                            Facebook</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Telegram</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Instagram</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Youtube</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Whatsapp</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col text-center">
                                <p>Copyright @ 2022 Novine. All Rights Reserved By <a href="#" target="_blank">mareew.com</a></p>
                            </div>

                            {/* <div className="col-lg-6 col-md-6">
                                <ul className="payment-card">
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/visa.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/mastercard.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/mastercard2.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/visa2.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/expresscard.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
