import Link from '@docusaurus/Link';
import React, {useState} from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  
  return (
    <>
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
              <button
                className={`button button--secondary button--lg ${styles.secondaryButton}`}
                onClick={() => setShowDemoDialog(true)}>
                Try Live Demo
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {showDemoDialog && (
        <div className={styles.modalOverlay} onClick={() => setShowDemoDialog(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setShowDemoDialog(false)}>
              ×
            </button>
            <h2 className={styles.modalTitle}>🎮 Live Demo: Explore BookLore in Action</h2>
            <p className={styles.modalDescription}>
              Experience BookLore's features in a live environment before deploying your own instance.
            </p>
            
            <div className={styles.demoCredentials}>
              <div className={styles.credentialItem}>
                <h3 className={styles.credentialTitle}>🌐 Demo URL</h3>
                <div className={styles.credentialValue}>
                  <a href="https://demo.booklore.org" target="_blank" rel="noopener noreferrer">
                    demo.booklore.org
                  </a>
                </div>
              </div>
              <div className={styles.credentialItem}>
                <h3 className={styles.credentialTitle}>👤 Username</h3>
                <div className={styles.credentialValue}>
                  <code>booklore</code>
                </div>
              </div>
              <div className={styles.credentialItem}>
                <h3 className={styles.credentialTitle}>🔑 Password</h3>
                <div className={styles.credentialValue}>
                  <code>9HC20PGGfitvWaZ1</code>
                </div>
              </div>
            </div>
            
            <div className={styles.modalNote}>
              <strong>⚠️ Note:</strong> Demo account has standard user permissions only.
              Admin features (user management, library setup) require a self-hosted instance.
            </div>
            
            <div className={styles.modalActions}>
              <a
                href="https://demo.booklore.org"
                target="_blank"
                rel="noopener noreferrer"
                className={`button button--primary ${styles.primaryButton}`}>
                Launch Demo →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomepageHeader;
