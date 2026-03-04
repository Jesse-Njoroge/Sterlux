import { Link } from 'react-router-dom';
import { CheckCircle2, Users, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import aboutImg from '../assets/images/about_hero.png';
import './About.css';

const whyCards = [
    { icon: <Users size={24} />, title: 'Team of Professionals', desc: 'Skilled, background-checked cleaners who meet your space with utmost respect.' },
    { icon: <ShieldCheck size={24} />, title: 'Reasonable Rates', desc: 'Transparent pricing with no hidden fees. Premium service that fits your budget.' },
    { icon: <Star size={24} />, title: 'Top-notch Service', desc: 'Customer satisfaction is guaranteed — every single time.' },
];



const testimonials = [
    { name: 'Jesse Gitaka', role: 'Tech Solutions Inc.', text: 'Sterlux completely transformed our office. The attention to detail is unmatched and highly recommended!' },
    { name: 'Eunice Njeri', role: 'Residential Client', text: 'Best cleaning service in the city. The staff is professional and they use the best products that always feel fresh.' },
    { name: 'Jayden Omondi', role: 'Contractor', text: 'I hired Sterlux for post-construction clean-up on one of my sites and they delivered beyond expectations. The team was thorough, fast, and left the space spotless. Will definitely use them again.' },
];

const certifications = [
    '100% Background Checked',
    'Eco-Friendly Product Certified',
    'Continuous Skills Training',
];

export default function AboutPage() {
    return (
        <main className="about-page">
            {/* PAGE HERO */}
            <section className="about-hero" id="about-hero">
                <div className="about-hero-img">
                    <img src={aboutImg} alt="Sterlux professional cleaners" />
                    <div className="about-hero-overlay" />
                </div>
                <div className="container about-hero-content">
                    <span className="badge badge-blue">Since 2019</span>
                    <h1>Sterlux Cleaning<br /><span className="highlight">Company</span></h1>
                    <p>Delivering spotless results and five-star experiences across Nairobi, one clean at a time.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg" id="about-book-btn">
                        Book a Service <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* MISSION */}
            <section className="mission-section section" id="mission">
                <div className="container mission-inner">
                    <div className="section-header centered text-center">
                        <span className="overline">Our Mission</span>
                        <h2>To deliver high-quality cleaning<br />services tailored to your needs</h2>
                        <div className="divider" />
                        <p>
                            We believe that a clean, organised space is the foundation of a happy life. At Sterlux, every member of our team shares this belief — and brings it to every home and office we serve.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="section why-choose-section" id="why-choose-us" style={{ background: 'var(--surface)' }}>
                <div className="container">
                    <div className="section-header centered text-center">
                        <span className="overline">Why Choose Us</span>
                        <h2>Why Nairobi Chooses <span className="highlight">Sterlux</span></h2>
                        <div className="divider" />
                    </div>
                    <div className="why-cards-grid">
                        {whyCards.map((card, i) => (
                            <div className="about-why-card" key={i} id={`about-why-${i}`}>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className="section certs-section" id="certifications">
                <div className="container certs-inner">
                    <div className="certs-text">
                        <span className="overline">Our Standards</span>
                        <h2>Certified, Trained &<br /><span className="highlight">Trusted</span></h2>
                        <p>Every member of the Sterlux team undergoes rigorous training and background checks to ensure they meet our high standards of excellence and integrity.</p>
                        <ul className="cert-list">
                            {certifications.map((cert) => (
                                <li key={cert}><CheckCircle2 size={18} /> {cert}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="certs-brand-card">
                        <div className="brand-logo-large">
                            <span>STERLUX</span>
                        </div>
                        <p>Nairobi's Premium Cleaning Company</p>
                    </div>
                </div>
            </section>



            {/* TESTIMONIALS */}
            <section className="section" id="about-testimonials">
                <div className="container">
                    <div className="section-header centered text-center">
                        <span className="overline">Client Stories</span>
                        <h2>What Our <span className="highlight">Clients</span> Say</h2>
                        <div className="divider" />
                    </div>
                    <div className="about-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div className="about-testimonial-card" key={i} id={`about-testimonial-${i}`}>
                                <div className="stars">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#F5A623" color="#F5A623" />)}
                                </div>
                                <p>"{t.text}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{t.name[0]}</div>
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
