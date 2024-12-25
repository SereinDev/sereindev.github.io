import { useState } from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const history: number[] = [];
const tips: JSX.Element[] = [
  <>Serein, Yes!</>,
  <>v1版本的代码其实是屎山。</>,
  <>你可以在插件中使Serein关闭。</>,
  <>Serein的开发者其实有强迫症。</>,
  <>Serein的Js插件都是单线程的。</>,
  <>你可以使用Serein运行Serein。</>,
  <>Serein诞生于公元2022年4月7日。</>,
  <>Serein会在下个版本加入插件市场。</>,
  <>Serein的插件系统可以扩展其功能。</>,
  <>Serein的所有代码加起来接近三万行。</>,
  <>Serein中许多操作都藏到了右键菜单里。</>,
  <>Serein 2.0后使用.NET 8.0作为运行库。</>,
  <>Serein发行版总下载量已经超过了五千次。</>,
  <>Serein的大部分配置文件都是JSON格式的。</>,
  <>Serein在开发过程中参考借鉴了其他许多面板软件。</>,
  <>如果遇到了Bug或者问题欢迎进交流群或在GitHub上反馈。</>,
  <>
    Serein匹配页面支持正则表达式，你可以使用复杂的正则表达式来进行更加精确的匹配。
  </>,
  <>
    服务器配置的某些项并没有在配置编辑器中出现，但你可以通过直接修改文件来修改他们。
  </>,
  <>
    在Serein.Lite中的匹配页面，你可以在选中匹配项后使用<code>Ctrl</code>+
    <code>↑</code>/<code>↓</code>来移动匹配项。
  </>,
  // -----------------------------------------------------
  <>null</>,
  <>1+1=2.</>,
  <>Creeper?</>,
  <>那很好了。</>,
  <>你不知道。</>,
  <>我不知道。</>,
  <>这里有彩蛋。</>,
  <>这里没有彩蛋。</>,
  <>其实这就是彩蛋。</>,
  <>星期四会有限定彩蛋刷新。</>,
  <>有Bug才是正常的（大雾）。</>,
  <>别数了这句话一共十二个字。</>,
  <>非常好软件，爱来自水雷艇。</>,
  <>给开发者打赏可以让他开心一整天。</>,
  <>无论如何，祝你今天心情愉悦(oﾟvﾟ)ノ</>,
  <>今天是{new Date().toLocaleDateString()}。</>,
];

if (new Date().getDay() === 4) {
  tips.push(
    <>
      <Link style={{ textDecoration: 'line-through' }} to="/docs/more/donate">
        疯狂星期四vivo50
      </Link>
    </>
  );
}

tips.push(<>这里一共有{tips.length + 2}条文本。</>);
tips.sort(() => Math.random() - 0.5);

let count = 0;

export default function (): JSX.Element {
  const [tip, useTip] = useState(tips[Math.floor(Math.random() * tips.length)]);
  const func = () => {
    count += 1;

    if (count >= 50 && Math.random() < 0.1) {
      useTip(<>别点了，歇会吧。你已经点了{count}次了。</>);
      return;
    }

    var i = Math.floor(Math.random() * tips.length);

    while (history.includes(i)) {
      i = Math.floor(Math.random() * tips.length);
    }

    history.push(i);
    while (history.length > tips.length / 3) {
      history.shift();
    }

    useTip(tips[i]);
  };

  return (
    <div id={styles['tips-container']} onClick={func}>
      <div id={styles['tip-title']}>你知道吗</div>
      <div>{tip}</div>
    </div>
  );
}
