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
                to="/docs/getting-started"
                style={{
                  backgroundColor: '#3578e5',
                  borderColor: '#3578e5',
                  color: 'white',
                }}>
                Get Started →
              </Link>
              <Link
                className={`button button--outline button--lg ${styles.secondaryButton}`}
                to="https://github.com/booklore-app/booklore"
                style={{
                  borderColor: '#d1d5db',
                  color: '#4b5563',
                }}>
                <svg className={styles.githubIcon} viewBox="0 0 16 16" width="20" height="20">
                  <path fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                GitHub
              </Link>
              <button
                className={`button button--secondary button--lg ${styles.primaryButtonFlipped}`}
                onClick={() => setShowDemoDialog(true)}
                style={{
                  backgroundColor: '#f0f2f5',
                  borderColor: '#f0f2f5',
                  color: '#333',
                }}>
                🎮 Live Demo
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
