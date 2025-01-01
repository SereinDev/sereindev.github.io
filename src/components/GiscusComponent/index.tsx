import { useColorMode } from '@docusaurus/theme-common';
import Giscus from '@giscus/react';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="SereinDev/Serein"
      repo-id="R_kgDOHI2ufw"
      category="Giscus"
      category-id="DIC_kwDOHI2uf84ClpVK"
      term="快来抢沙发！"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
      mapping="pathname"
    />
  );
}
