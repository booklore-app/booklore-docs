import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, {JSX} from 'react';
import HeroCarousel from './HeroCarousel';
import HomepageFeatures from './HomepageFeatures';
import HomepageHeader from './HomepageHeader';
import CallToAction from './CallToAction';

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
