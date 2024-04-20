import type { WrapperProps } from '@docusaurus/types';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <Layout {...props} />

      <script
        defer
        src="https://analytics.eu.umami.is/script.js"
        data-website-id="c3672d6b-487c-4cd8-b7ff-4979f77dccfe"
      />
    </>
  );
}
