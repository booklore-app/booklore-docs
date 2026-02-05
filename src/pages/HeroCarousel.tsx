import React, {useEffect, useRef, useState} from 'react';
import type {Splide as SplideInstance} from '@splidejs/splide';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './index.module.css';

const carouselSlides = [
  {
    id: 'dashboard',
    title: 'Main Dashboard',
    description: 'An overview of your entire library at a glance.',
    image: '/img/website/web-01.png',
  },
  {
    id: 'metadata-viewer',
    title: 'Metadata Viewer',
    description: 'View rich, automatically fetched metadata for any book.',
    image: '/img/website/web-02.png',
  },
  {
    id: 'reader-stats-1',
    title: 'Reading Timeline',
    description: 'Visualize your reading journey with beautiful timeline stats and graphs.',
    image: '/img/website/web-09.png',
  },
  {
    id: 'reader-stats-2',
    title: 'Reader DNA',
    description: 'Discover your unique reader DNA and analyze your reading habits.',
    image: '/img/website/web-10.png',
  },
  {
    id: 'metadata-editor',
    title: 'Metadata Editor',
    description: 'Easily edit and customize book details to your liking.',
    image: '/img/website/web-03.png',
  },
  {
    id: 'metadata-searcher',
    title: 'Metadata Searcher',
    description: 'Find any book with powerful, real-time metadata search.',
    image: '/img/website/web-04.png',
  },
  {
    id: 'metadata-picker',
    title: 'Metadata Picker',
    description: 'Choose from multiple metadata sources to get the perfect match.',
    image: '/img/website/web-05.png',
  },
  {
    id: 'book-browser-grid',
    title: 'Book Browser (Grid)',
    description: 'Seamlessly browse your entire library with infinite scrolling.',
    image: '/img/website/web-06.png',
  },
  {
    id: 'book-browser-table',
    title: 'Book Browser (Table)',
    description: 'Switch to a compact table view for dense library browsing.',
    image: '/img/website/web-07.png',
  },
  {
    id: 'reader-settings',
    title: 'Reader Customization',
    description: 'Customize your reading experience with extensive settings.',
    image: '/img/website/web-08.png',
  },
  {
    id: 'book-uploader',
    title: 'Book Uploader',
    description: 'Easily upload books to your main library or a temporary bookdrop.',
    image: '/img/website/web-11.png',
  },
  {
    id: 'multi-user-management',
    title: 'Multi-User Management',
    description: 'Manage multiple users with granular permissions for secure library sharing.',
    image: '/img/website/web-12.png',
  },
  {
    id: 'login-page',
    title: 'Themed Login Page',
    description: 'A beautiful, theme-aware login page for a personalized experience.',
    image: '/img/website/web-14.png',
  },
];

type SplideComponentRef = {
  splide?: SplideInstance;
};

export default function HeroCarousel() {
  const mainRef = useRef<SplideComponentRef | null>(null);
  const [zoomedImage, setZoomedImage] = useState<null | {src: string; alt: string}>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (zoomedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [zoomedImage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      {threshold: 0.1}
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.carouselSection}>
      <div className="container">
        <div
          className={styles.carouselHeader}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h2 className={styles.carouselTitle}>See Booklore in Action</h2>
          <p className={styles.carouselSubtitle}>
            A modern, beautiful interface designed for book lovers
          </p>
        
        </div>
        <div
          style={{
            margin: '0 1.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          <Splide
            ref={mainRef}
            aria-label="Booklore highlights"
            options={{
              type: 'loop',
              perPage: 3,
              focus: 'center',
              pagination: true,
              arrows: true,
              gap: '1.5rem',
              autoplay: true,
              interval: 4000,
              pauseOnHover: true,
              lazyLoad: 'nearby',
              preloadPages: 1,
              breakpoints: {
                768: {
                  perPage: 1,
                  gap: '1rem',
                },
                1024: {
                  perPage: 2,
                  gap: '1rem',
                },
              },
            }}
          >
            {carouselSlides.map((slide, index) => (
              <SplideSlide key={slide.id}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '300px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'zoom-in',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => setZoomedImage({src: slide.image, alt: slide.title})}
                  tabIndex={0}
                  role="button"
                  aria-label={`Zoom ${slide.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      setZoomedImage({src: slide.image, alt: slide.title});
                  }}
                >
                  <img
                    src={index < 3 ? slide.image : undefined}
                    data-splide-lazy={index >= 3 ? slide.image : undefined}
                    alt={slide.title}
                    style={{width: '100%', height: '100%', objectFit: 'contain'}}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      padding: '1.5rem 1rem 1rem',
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
                      color: '#fff',
                    }}
                  >
                    <h3 style={{margin: 0, fontSize: '1rem', fontWeight: 600}}>{slide.title}</h3>
                    <p style={{margin: '0.25rem 0 0 0', fontSize: '0.8rem', opacity: 0.85}}>
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      {zoomedImage && (
        <div
          style={{
            position: 'fixed',
            zIndex: 2000,
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.95)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'zoom-out',
            backdropFilter: 'blur(10px)',
          }}
          onClick={() => setZoomedImage(null)}
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              background: '#1a1a2e',
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setZoomedImage(null)}
            aria-label="Close"
            style={{
              position: 'fixed',
              top: 24,
              right: 24,
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              fontSize: '1.5rem',
              borderRadius: '12px',
              width: 48,
              height: 48,
              cursor: 'pointer',
              zIndex: 2100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}
