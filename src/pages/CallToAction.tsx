import Link from '@docusaurus/Link';
import React from 'react';
import styles from './index.module.css';

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

export default CallToAction;

