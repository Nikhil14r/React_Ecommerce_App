import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer mt-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="social-icons">
                            <h4>EXTRAS</h4>
                            <li><a href="#">Brands</a></li>
                            <li><a href="#">Gift Certificates</a></li>
                            <li><a href="#">Affiliate</a></li>
                            <li><a href="#">Specials</a></li>
                            <li><a href="#">Site Map</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="social-icons">
                            <h4>HELP</h4>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Track your order</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Cart</a></li>
                            <li><a href="#">Site Map</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="social-icons">
                            <h4>POLICY</h4>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Terms of Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Refund and Returns Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Follow Us</h4>
                        <ul className="social-icons">
                            <li><a href="#"> <FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="#"> <FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"> <FontAwesomeIcon icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className='text-center'>&copy; {new Date().getFullYear()} Shopping Website. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
