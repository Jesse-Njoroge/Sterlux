import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

const services = [
    'Residential Cleaning',
    'Airbnb Clean-Ups',
    'Office Cleaning',
    'Post-Construction Cleaning',
    'Other',
];

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="contact-page">
            {/* PAGE HEADER */}
            <section className="contact-hero" id="contact-hero">
                <div className="container">
                    <div className="section-header centered text-center">
                        <span className="overline">Get In Touch</span>
                        <h1>We'd Love to <span className="highlight">Hear From You</span></h1>
                        <p>Have questions or ready to book? Reach out and we'll get back to you within 24 hours.</p>
                    </div>
                </div>
            </section>

            {/* CONTACT GRID */}
            <section className="contact-main section-sm" id="contact-main">
                <div className="container contact-grid">
                    {/* FORM */}
                    <div className="contact-form-card" id="contact-form-card">
                        <h2>Send Us a Message</h2>
                        <p>Fill in the form below and we'll respond as soon as possible.</p>

                        {submitted ? (
                            <div className="success-message" id="success-message">
                                <CheckCircle2 size={48} />
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. Our team will contact you shortly.</p>
                                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Full Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="form-input"
                                        placeholder=""
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="form-input"
                                        placeholder="eunice@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="service">Service Needed</label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="form-select"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a service...</option>
                                        {services.map(s => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        placeholder="Tell us about your cleaning needs..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg submit-btn" id="submit-btn">
                                    <Send size={18} /> Send Request
                                </button>
                            </form>
                        )}
                    </div>

                    {/* DIRECT INFO + MAP */}
                    <div className="contact-info-col">
                        {/* Info Card */}
                        <div className="direct-info-card" id="direct-info">
                            <h3>Direct Information</h3>

                            <div className="info-item">
                                <div className="info-icon"><Phone size={18} /></div>
                                <div>
                                    <span className="info-label">CALL US</span>
                                    <span className="info-value">
                                        <a href="tel:+254710735329" className="info-link">0710 735 329</a>
                                        {' | '}
                                        <a href="tel:+254717707503" className="info-link">0717 707 503</a>
                                    </span>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><Mail size={18} /></div>
                                <div>
                                    <span className="info-label">EMAIL US</span>
                                    <span className="info-value">
                                        <a href="mailto:sterluxcleaning@gmail.com" className="info-link">sterluxcleaning@gmail.com</a>
                                    </span>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><MapPin size={18} /></div>
                                <div>
                                    <span className="info-label">LOCATION</span>
                                    <span className="info-value">Nairobi, Kenya</span>
                                </div>
                            </div>

                            <div className="info-socials">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="info-social-btn" id="contact-facebook">
                                    <Facebook size={18} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="info-social-btn" id="contact-instagram">
                                    <Instagram size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="map-card" id="map-card">
                            <iframe
                                title="Sterlux Location – Nairobi, Kenya"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19999999998!2d36.6952!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000"
                                width="100%"
                                height="220"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <a
                                href="https://maps.google.com/?q=Nairobi,Kenya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline map-btn"
                                id="view-on-maps"
                            >
                                <MapPin size={16} /> View on Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
