import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
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
              to="/getting-started">
              Get Started →
            </Link>
            <Link
              className={`button button--outline button--lg ${styles.secondaryButton}`}
              to="https://github.com/adityachandelgit/booklore">
              <svg className={styles.githubIcon} viewBox="0 0 16 16" width="20" height="20">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
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
      description: 'Build your dream library with custom shelves, smart sorting, and powerful filters to find any book instantly. Booklore lets you tag, categorize, and search your collection with blazing speed, making it easy to manage even the largest libraries.',
    },
    {
      icon: '✨',
      title: 'Magic Shelves',
      description: 'Create dynamic, rule-based collections that auto-update in real time - like smart playlists for your books. Define criteria such as author, genre, or reading status, and let Booklore keep your shelves organized automatically.',
    },
    {
      icon: '🧠',
      title: 'Automatic Metadata',
      description: 'Automatically fetch rich book details, covers, and reviews from Goodreads, Amazon, Google Books, and more. Booklore enriches your library with synopses, author bios, publication info, and ratings, so your collection is always up to date.',
    },
    {
      icon: '🌐',
      title: 'OPDS Support',
      description: 'Connect your favorite reading apps directly to your Booklore library for seamless wireless book downloads. With OPDS, you can browse and fetch your books from any compatible device, anywhere.',
    },
    {
      icon: '📖',
      title: 'Built-in Reader',
      description: 'Read EPUBs, PDFs, and comics directly in your browser with a clean, customizable, and mobile-ready interface. Booklore remembers your reading position, supports annotations, and offers a distraction-free reading experience.',
    },
    {
      icon: '👥',
      title: 'Multi-User Ready',
      description: 'Manage multiple users with granular permissions for library access, content control, and private notes. Perfect for families, teams, or communities - everyone gets their own space while sharing the same library.',
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
        <div className={`row ${styles.featuresRow}`}>
          {features.map((feature, idx) => (
            <div key={idx} className="col col--4">
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
              className={`button button--primary button--lg ${styles.docsButton}`}
              to="/getting-started">
              📖 Read the Docs
            </Link>
            <Link
              className={`button button--lg ${styles.discordButton}`}
              to="https://discord.gg/Ee5hd458Uz">
              <svg className={styles.discordIcon} viewBox="0 0 24 24">
                <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.211.375-.444.864-.608 1.249a18.524 18.524 0 00-5.487 0 12.51 12.51 0 00-.617-1.249.07.07 0 00-.073-.035A19.736 19.736 0 003.677 4.369a.064.064 0 00-.03.027C.533 9.09-.32 13.579.099 18.021a.08.08 0 00.031.056c2.052 1.507 4.041 2.422 5.992 3.029a.077.077 0 00.084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 01-.008-.127c.126-.094.252-.192.371-.291a.07.07 0 01.073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 01.073.009c.12.099.245.198.372.292a.077.077 0 01-.006.127 12.298 12.298 0 01-1.873.891.076.076 0 00-.04.105c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028c1.961-.607 3.95-1.522 6.002-3.029a.077.077 0 00.031-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/>
              </svg>
              Join Discord
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
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CallToAction />
      </main>
    </Layout>
  );
}
