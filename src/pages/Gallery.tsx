import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import galleryKitchen from '../assets/images/gallery_kitchen.png';
import galleryBathroom from '../assets/images/gallery_bathroom.png';
import galleryWindow from '../assets/images/gallery_window.png';
import realMansion from '../assets/images/real_mansion.jpg';
import realToilet from '../assets/images/real_toilet.png';
import realCorridor from '../assets/images/real_corridor.jpg';
import realKitchen from '../assets/images/real_kitchen.jpg';
import realApartment from '../assets/images/real_apartment_clean.jpg';
import realDriveway from '../assets/images/real_driveway.jpg';
import realToiletScrub from '../assets/images/real_toilet_scrub.jpg';
import realWardrobe from '../assets/images/real_wardrobe.jpg';
import './Gallery.css';

const categories = ['All', 'Residential', 'Commercial', 'Airbnb', 'Post-Construction'];

const photos = [
    { src: realApartment, alt: 'Apartment exterior deep clean', category: 'Residential', label: 'Apartment Exterior Clean' },
    { src: realMansion, alt: 'Mansion deep clean exterior', category: 'Residential', label: 'Mansion Deep Clean' },
    { src: galleryKitchen, alt: 'Kitchen deep clean', category: 'Residential', label: 'Kitchen Deep Clean' },
    { src: realDriveway, alt: 'Driveway & compound cleaning', category: 'Post-Construction', label: 'Driveway Clean' },
    { src: realCorridor, alt: 'Corridor & compound cleaning', category: 'Post-Construction', label: 'Corridor & Compound' },
    { src: galleryBathroom, alt: 'Bathroom sanitisation', category: 'Residential', label: 'Bathroom Sanitisation' },
    { src: realToiletScrub, alt: 'Toilet scrubbing in progress', category: 'Residential', label: 'Toilet Scrubbing' },
    { src: realKitchen, alt: 'Kitchen floor scrubbing', category: 'Residential', label: 'Kitchen Floor Scrub' },
    { src: galleryWindow, alt: 'Window cleaning', category: 'Commercial', label: 'Window Cleaning' },
    { src: realWardrobe, alt: 'Wardrobe organisation', category: 'Residential', label: 'Wardrobe Organisation' },
    { src: realToilet, alt: 'Toilet deep sanitisation', category: 'Residential', label: 'Toilet Deep Clean' },
];

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

    const filtered = activeFilter === 'All'
        ? photos
        : photos.filter(p => p.category === activeFilter);

    return (
        <main className="gallery-page">
            {/* HERO */}
            <section className="gallery-hero" id="gallery-hero">
                <div className="container">
                    <div className="section-header centered text-center">
                        <span className="overline">Our Work in Pictures</span>
                        <h1>The Sterlux <span className="highlight">Gallery</span></h1>
                        <p>Real results from real jobs — every space we clean tells a story of professionalism and pride.</p>
                    </div>
                </div>
            </section>

            {/* FILTERS */}
            <section className="gallery-main section-sm" id="gallery-grid">
                <div className="container">
                    <div className="gallery-filters" id="gallery-filters">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                                onClick={() => setActiveFilter(cat)}
                                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* MASONRY GRID */}
                    <div className="gallery-grid">
                        {filtered.map((photo, i) => (
                            <div
                                key={i}
                                className="gallery-item"
                                id={`gallery-item-${i}`}
                                onClick={() => setLightbox({ src: photo.src, alt: photo.alt })}
                            >
                                <img src={photo.src} alt={photo.alt} loading="lazy" />
                                <div className="gallery-item-overlay">
                                    <ZoomIn size={24} />
                                    <span>{photo.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LIGHTBOX */}
            {lightbox && (
                <div className="lightbox" id="lightbox" onClick={() => setLightbox(null)}>
                    <button className="lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}>
                        <X size={28} />
                    </button>
                    <img
                        src={lightbox.src}
                        alt={lightbox.alt}
                        className="lightbox-img"
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}
        </main>
    );
}
