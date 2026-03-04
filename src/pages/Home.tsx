import { Link } from 'react-router-dom';
import {
    ShieldCheck, Users, Star, ArrowRight,
    CheckCircle2
} from 'lucide-react';
import heroImg from '../assets/images/hero_home.png';
import serviceHome from '../assets/images/service_home.png';
import serviceAirbnb from '../assets/images/service_airbnb.png';
import serviceOffice from '../assets/images/service_office.png';
import serviceConstruction from '../assets/images/service_construction.png';
import './Home.css';

const serviceCategories = [
    {
        id: 'home-cleaning',
        category: 'Residential',
        subtitle: 'Home Cleaning',
        img: serviceHome,
    },
    {
        id: 'office-cleaning',
        category: 'Commercial',
        subtitle: 'Office Cleaning',
        img: serviceOffice,
    },
    {
        id: 'airbnb-cleanup',
        category: 'Hospitality',
        subtitle: 'Airbnb Turnover',
        img: serviceAirbnb,
    },
    {
        id: 'post-construction',
        category: 'Industrial',
        subtitle: 'Post-Construction',
        img: serviceConstruction,
    },
];

const whyUs = [
    { icon: <Users size={28} />, title: 'Team of Professionals', desc: 'Skilled, trained and thoroughly vetted cleaners who treat your space with utmost respect.' },
    { icon: <ShieldCheck size={28} />, title: 'Eco-Friendly Products', desc: 'We use certified eco-friendly products that are safe for your family, pets, and the environment.' },
    { icon: <Star size={28} />, title: 'Top-notch Service', desc: "We don't call a job done until your satisfaction guarantee is met — every single time." },
];

export default function HomePage() {
    return (
        <main className="home-page">
            {/* HERO */}
            <section className="hero-section" id="hero">
                <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }}>
                    <div className="hero-overlay" />
                </div>
                <div className="hero-content">

                    <h1 className="hero-title animate-fade-in-up delay-1">
                        A Cleaner Space.<br />
                        <em className="hero-title-em">A Better Life.</em>
                    </h1>

                    <p className="hero-subtitle animate-fade-in-up delay-2">
                        Professional cleaning services for homes, offices, and rental
                        properties. We handle the mess so you can focus on what matters.
                    </p>

                    <div className="hero-actions animate-fade-in-up delay-3">
                        <Link to="/contact" className="btn-hero-primary" id="hero-book-btn">
                            Book a Cleaning <ArrowRight size={17} />
                        </Link>
                        <Link to="/services" className="btn-hero-outline" id="hero-learn-btn">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* SERVICES IMAGE GRID */}
            <section className="home-services-section" id="services">
                <div className="home-services-header">
                    <span className="home-services-overline">What We Do</span>
                    <h2 className="home-services-title">Our Cleaning Services</h2>
                </div>
                <div className="home-services-grid">
                    {serviceCategories.map((svc) => (
                        <Link
                            to="/services"
                            className="home-svc-tile"
                            key={svc.id}
                            id={`home-svc-${svc.id}`}
                            style={{ backgroundImage: `url(${svc.img})` }}
                        >
                            <div className="home-svc-overlay" />
                            <div className="home-svc-label">
                                <span className="home-svc-category">{svc.category}</span>
                                <span className="home-svc-subtitle">{svc.subtitle}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* WHY US */}
            <section className="why-section section" id="why-us">
                <div className="container why-inner">
                    <div className="why-text">
                        <span className="overline">Why Choose Us</span>
                        <h2>The Sterlux <span className="highlight">Difference</span></h2>
                        <p>We go beyond clean — delivering a consistent, professional, and eco-responsible service you can count on.</p>
                        <ul className="why-checklist">
                            {['100% Background Checked', 'Eco-friendly Products Certified', 'Continuous Skills Training', 'Satisfaction Guaranteed'].map((item) => (
                                <li key={item}><CheckCircle2 size={18} className="check-icon" /> {item}</li>
                            ))}
                        </ul>
                        <Link to="/about" className="btn btn-primary" id="why-learn-more">
                            Learn About Us <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="why-cards">
                        {whyUs.map((item, i) => (
                            <div className="why-card" key={i} id={`why-card-${i}`}>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
