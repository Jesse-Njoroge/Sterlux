import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import logoImg from '../assets/images/sterlux_logo.png';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src={logoImg} alt="Sterlux logo" className="footer-logo-img" />
                            <div className="footer-logo-text">
                                <span className="footer-logo-name">STERLUX</span>
                                <span className="footer-logo-sub">CLEANING COMPANY</span>
                            </div>
                        </Link>
                        <p>Delivering high-quality cleaning services tailored to your unique needs. We make your space shine.</p>
                        <div className="footer-socials">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link" id="footer-facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link" id="footer-instagram">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/" id="footer-home">Home</Link></li>
                            <li><Link to="/about" id="footer-about">About Us</Link></li>
                            <li><Link to="/services" id="footer-services">Services</Link></li>
                            <li><Link to="/gallery" id="footer-gallery">Gallery</Link></li>
                            <li><Link to="/contact" id="footer-contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services">Home Cleaning</Link></li>
                            <li><Link to="/services">Airbnb Clean-Ups</Link></li>
                            <li><Link to="/services">Office Cleaning</Link></li>
                            <li><Link to="/services">Post-Construction</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <Phone size={15} />
                                <span>
                                    <a href="tel:+254710735329">0710735329</a>
                                    {' | '}
                                    <a href="tel:+254717707503">0717707503</a>
                                </span>
                            </li>
                            <li>
                                <Mail size={15} />
                                <a href="mailto:sterluxcleaning@gmail.com">sterluxcleaning@gmail.com</a>
                            </li>
                            <li>
                                <MapPin size={15} />
                                <span>Nairobi, Kenya</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>© 2025 Sterlux Cleaning Company. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#" id="privacy-policy">Privacy Policy</a>
                        <a href="#" id="terms-of-service">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
