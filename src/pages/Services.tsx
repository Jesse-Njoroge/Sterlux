import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import servicesHeroImg from '../assets/images/services_hero.png';
import serviceHomeImg from '../assets/images/service_home.png';
import serviceAirbnbImg from '../assets/images/service_airbnb.png';
import serviceOfficeImg from '../assets/images/service_office.png';
import serviceConstructionImg from '../assets/images/service_construction.png';
import './Services.css';

const services = [
    {
        id: 'home-cleaning',
        index: '01',
        title: 'Home Cleaning',
        desc: 'Comprehensive dusting, mopping, and vacuuming for all rooms. We handle everything from surfaces to behind furniture — so your home is truly spotless.',
        price: '2,500',
        img: serviceHomeImg,
        features: [
            'All rooms cleaned',
            'Kitchen & bathrooms',
            'Vacuuming & mopping',
            'Surface disinfection',
            'Behind furniture',
        ],
    },
    {
        id: 'airbnb-cleanup',
        index: '02',
        title: 'Airbnb & Short-Stay Turnover',
        desc: 'Fast, meticulous turnovers that keep your reviews at 5 stars. We handle linen, laundry, restocking, and staging — so guests walk into perfection.',
        price: '2,000',
        img: serviceAirbnbImg,
        features: [
            'Same-day turnaround',
            'Linen change & laundry',
            'Kitchen restocking',
            'Bathroom reset',
            'Photo-ready staging',
        ],
    },
    {
        id: 'office-cleaning',
        index: '03',
        title: 'Office & Commercial',
        desc: 'A clean workspace boosts productivity and morale. We provide discreet, thorough cleaning services that work around your business schedule.',
        price: '5,000',
        img: serviceOfficeImg,
        features: [
            'Daily or weekly scheduling',
            'Desk & common area cleaning',
            'Restroom sanitization',
            'Trash removal & recycling',
            'After-hours service available',
        ],
    },
    {
        id: 'post-construction',
        index: '04',
        title: 'Post-Construction Cleanup',
        desc: 'New builds and renovations leave a mess. We handle the heavy lifting — dust, debris, adhesive removal, and final polish — so you can move in stress-free.',
        price: '8,000',
        img: serviceConstructionImg,
        features: [
            'Debris & dust removal',
            'Window & fixture cleaning',
            'Floor scrubbing & polish',
            'Paint splatter removal',
            'Final inspection walkthrough',
        ],
    },
];

export default function ServicesPage() {
    return (
        <main className="services-page">
            {/* PAGE HEADER */}
            <section className="services-hero" id="services-hero">
                <div className="services-hero-bg" style={{ backgroundImage: `url(${servicesHeroImg})` }} />
                <div className="services-hero-overlay" />
                <div className="container services-hero-content">
                    <span className="badge badge-white">Premium Quality</span>
                    <h1>Expert Cleaning<br /><span className="highlight-white">Solutions</span></h1>
                    <p>Book your session in under 60 seconds</p>
                </div>
            </section>

            {/* SERVICES — EDITORIAL ALTERNATING LAYOUT */}
            <section className="services-list" id="service-packages">
                {services.map((svc, i) => {
                    const isEven = i % 2 === 1;
                    return (
                        <article
                            className={`svc-row ${isEven ? 'svc-row--reverse' : ''}`}
                            key={svc.id}
                            id={`service-${svc.id}`}
                        >
                            {/* TEXT SIDE */}
                            <div className="svc-text">
                                <span className="svc-index">{svc.index}</span>
                                <h2 className="svc-title">{svc.title}</h2>
                                <p className="svc-desc">{svc.desc}</p>
                                <ul className="svc-features">
                                    {svc.features.map((f) => (
                                        <li key={f}>
                                            <Check size={15} strokeWidth={2.5} className="svc-check" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="svc-footer">
                                    <span className="svc-price">From Ksh {svc.price}</span>
                                    <Link
                                        to="/contact"
                                        className="svc-book-btn"
                                        id={`book-${svc.id}`}
                                    >
                                        Book Now <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* IMAGE SIDE */}
                            <div className="svc-img-wrap">
                                <img src={svc.img} alt={svc.title} loading="lazy" />
                            </div>
                        </article>
                    );
                })}
            </section>

            {/* HOW IT WORKS */}
            <section className="how-section" id="how-it-works">
                <div className="container">
                    <div className="how-header">
                        <span className="how-overline">Simple Process</span>
                        <h2>Book a Clean in <em>3 Easy Steps</em></h2>
                    </div>
                    <div className="steps-row">
                        {[
                            { step: '01', title: 'Choose Your Service', desc: 'Pick the package that fits your space and needs.' },
                            { step: '02', title: 'Pick a Date & Time', desc: 'We offer flexible scheduling, including weekends.' },
                            { step: '03', title: 'We Come & Clean', desc: 'Pros arrive on time and deliver a spotless result.' },
                        ].map((s, i) => (
                            <div className="step-item" key={i} id={`step-${i + 1}`}>
                                <div className="step-num">{s.step}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
