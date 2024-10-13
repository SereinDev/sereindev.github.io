import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/logo.png" alt="logo" className={styles.logo} />
        <Heading as="h1" className="hero__title">
          Serein
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/">
            查看文档
          </Link>

          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: '10px' }}
            to="/docs/tutorial/rookie/get_started"
          >
            快速上手
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Hello" description={siteConfig.tagline}>
      <div className={styles['fisrt-container']}>
        <HomepageHeader />
        <HomepageFeatures />
      </div>
    </Layout>
  );
}
