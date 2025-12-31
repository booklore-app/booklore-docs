import React from 'react';
import styles from './index.module.css';

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

export default HomepageFeatures;

