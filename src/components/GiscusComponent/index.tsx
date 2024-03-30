import { useColorMode } from '@docusaurus/theme-common';
import Giscus from '@giscus/react';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="SereinDev/sereindev.github,io"
      repoId="R_kgDOI5X-eA"
      category="General"
      categoryId="DIC_kwDOI5X-eM4CVoEc"
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
