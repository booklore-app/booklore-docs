import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React, {useEffect, useRef, useState} from 'react';
import type {Splide as SplideInstance} from '@splidejs/splide';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './index.module.css';

const carouselSlides = [
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
  {
    id: 'dashboard',
    title: 'Main Dashboard',
    description: 'An overview of your entire library at a glance.',
    image: '/img/website/web-01.png',
  },
  {
    id: 'book-browser-grid',
    title: 'Book Browser (Grid)',
    description: 'Seamlessly browse your entire library with infinite scrolling.',
    image: '/img/website/web-06.png',
  },
];

type SplideComponentRef = {
  splide?: SplideInstance;
};

function HeroCarousel() {
  const mainRef = useRef<SplideComponentRef | null>(null);
  const [zoomedImage, setZoomedImage] = useState<null | { src: string; alt: string }>(null);
  
  // Prevent background scroll when zoomed
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
  
  return (
    <section style={{padding: '4rem 0rem'}}>
      <div className="container">
        <div
          style={{
            margin: '0rem 2rem 1rem 2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
              cover: true,
              gap: '1rem',
              autoplay: true,
              interval: 3000,
              pauseOnHover: true,
            }}>
            {carouselSlides.map((slide) => (
              <SplideSlide key={slide.id}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '325px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'zoom-in',
                  }}
                  onClick={() => setZoomedImage({src: slide.image, alt: slide.title})}
                  tabIndex={0}
                  role="button"
                  aria-label={`Zoom ${slide.title}`}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') setZoomedImage({src: slide.image, alt: slide.title});
                  }}
                >
                  <img src={slide.image} alt={slide.title} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                  <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, padding: '1.5rem', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 90%)', color: '#fff'}}>
                    <h3 style={{margin: 0, fontSize: '1.2rem'}}>{slide.title}</h3>
                    <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem'}}>{slide.description}</p>
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
            background: 'rgba(0,0,0,0.92)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'zoom-out',
            transition: 'background 0.2s',
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
              borderRadius: '12px',
              boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
              background: '#222',
            }}
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={() => setZoomedImage(null)}
            aria-label="Close"
            style={{
              position: 'fixed',
              top: 32,
              right: 32,
              background: 'rgba(0,0,0,0.7)',
              border: 'none',
              color: '#fff',
              fontSize: '2rem',
              borderRadius: '50%',
              width: 48,
              height: 48,
              cursor: 'pointer',
              zIndex: 2100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.badge}>✨ Your Personal Knowledge Base</span>
          <h1 className={styles.heroTitle}>
            Welcome to <span className={styles.gradient}>Booklore</span>
          </h1>
          <p className={styles.heroTagline}>
            The modern way to organize, search, and preserve your knowledge.
            Build your digital library with ease.
          </p>
          <div className={styles.buttons}>
            <Link
              className={`button button--primary button--lg ${styles.primaryButton}`}
              to="/docs/getting-started">
              Get Started →
            </Link>
            <Link
              className={`button button--outline button--lg ${styles.secondaryButton}`}
              to="https://github.com/booklore-app/booklore">
              <svg className={styles.githubIcon} viewBox="0 0 16 16" width="20" height="20">
                <path fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const features = [
    {
      icon: '📚',
      title: 'Smart Organization',
      description: 'Organize your library with muggle shelves, filters and magic shelves, and fast search for any book. Find what you need in seconds.',
    },
    {
      icon: '✨',
      title: 'Magic Shelves',
      description: 'Create dynamic collections that auto-update instantly based on your rules. Let Booklore keep your shelves organized as your library evolves.',
    },
    {
      icon: '🧠',
      title: 'Automatic Metadata',
      description: 'Fetch book details, covers, and reviews from top sources automatically. Keep your library rich and up-to-date with minimal effort.',
    },
    {
      icon: '🌐',
      title: 'OPDS Support',
      description: 'Connect reading apps to your library for wireless downloads anywhere. Access your books from any compatible device, anytime.',
    },
    {
      icon: '📖',
      title: 'Built-in Reader',
      description: 'Read EPUBs, PDFs, and comics in your browser with position sync and notes. Enjoy a seamless and customizable reading experience.',
    },
    {
      icon: '👥',
      title: 'Multi-User Ready',
      description: 'Share your library and manage access with granular permissions for all users. Perfect for families, teams, or communities.',
    },
    {
      icon: '🔄',
      title: 'Kobo & KOReader Sync',
      description: 'Sync reading progress and highlights across Kobo and KOReader devices. Pick up right where you left off, on any platform.',
    },
    {
      icon: '✉️',
      title: 'Email Sharing',
      description: 'Send books to your Kindle or any email with just one click. Share your favorite titles effortlessly with friends or devices.',
    },
  ];
  
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>Why Choose Booklore?</h2>
          <p className={styles.featuresSubtitle}>
            Everything you need to build and maintain your knowledge base
          </p>
        </div>
        <div className={`row ${styles.featuresRow}`} style={{justifyContent: 'center'}}>
          {features.map((feature, idx) => (
            <div key={idx} className="col col--3">
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to get started?</h2>
          <p className={styles.ctaSubtitle}>
            Join the community and start building your knowledge base today
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={`button button--lg ${styles.discordButton}`}
              to="https://discord.gg/Ee5hd458Uz">
              <svg className={styles.discordIcon} viewBox="0 0 24 24">
                <path
                  d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.211.375-.444.864-.608 1.249a18.524 18.524 0 00-5.487 0 12.51 12.51 0 00-.617-1.249.07.07 0 00-.073-.035A19.736 19.736 0 003.677 4.369a.064.064 0 00-.03.027C.533 9.09-.32 13.579.099 18.021a.08.08 0 00.031.056c2.052 1.507 4.041 2.422 5.992 3.029a.077.077 0 00.084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 01-.008-.127c.126-.094.252-.192.371-.291a.07.07 0 01.073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 01.073.009c.12.099.245.198.372.292a.077.077 0 01-.006.127 12.298 12.298 0 01-1.873.891.076.076 0 00-.04.105c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028c1.961-.607 3.95-1.522 6.002-3.029a.077.077 0 00.031-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/>
              </svg>
              Join Discord
            </Link>
            <Link
              className={`button button--lg ${styles.opencollectiveButton}`}
              to="https://opencollective.com/booklore"
              style={{
                background: 'linear-gradient(90deg, #ee3d5c 0%, #ee3d5c 100%)',
                color: '#fff',
                border: 'none',
                marginLeft: '0.5rem',
                boxShadow: '0 2px 8px rgba(238,61,92,0.25)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                style={{ marginRight: 8 }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#fff" opacity="0.15" />
                <circle cx="16" cy="16" r="10" fill="#ee3d5c" />
              </svg>
              Open Collective
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Organize knowledge. Preserve lore.">
      <HomepageHeader/>
      <main>
        <HeroCarousel/>
        <HomepageFeatures/>
        <CallToAction/>
      </main>
    </Layout>
  );
}
