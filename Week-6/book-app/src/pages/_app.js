import BaseLayout from '@/components/Layout';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
