import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Tips from '../components/Tips';

function FirstSection() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={styles['fisrt-container']}>
      <img src="/logo.png" alt="logo" className={styles['logo']} />
      <h1>Serein</h1>
      <div className={styles['description']}>{siteConfig.tagline}</div>
      <div className={styles['button-container']}>
        <Link className="button button--secondary button--lg" to="/docs/">
          查看介绍
        </Link>

        <Link
          className="button button--secondary button--lg"
          to="/docs/tutorial/rookie/get_started"
        >
          快速上手
        </Link>
      </div>
      <Tips />
      <div className={styles['fisrt-container-background']}></div>
    </section>
  );
}

function SecondSection() {
  return (
    <section className={styles['second-container']}>
      <HomepageFeatures />
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Hello" description={siteConfig.tagline}>
      <FirstSection />
      <SecondSection />
    </Layout>
  );
}
