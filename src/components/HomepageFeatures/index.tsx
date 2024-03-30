import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '超强兼容性',
    description: <>适配大部分的主流操作平台：Windows、Linux和MacOS</>,
  },
  {
    title: '高自定义度',
    description: (
      <>提供丰富的配置项和设置，允许您打造出一个完全适合自己的服务器面板软件</>
    ),
  },
  {
    title: '超多扩展功能',
    description: (
      <>
        你可以借助JavaScript插件无限扩展功能，将服务器面板变成得心应手的管理工具，甚至变成集多功能于一身的机器人
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row underline-links">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
