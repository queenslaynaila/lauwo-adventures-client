import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import MainComponentLayout from '../components/MainComponentLayout';

export default function App({ Component, pageProps }) {
  return (
    <MainComponentLayout>
      <Component {...pageProps} />
      <Analytics />
    </MainComponentLayout>
  );
}
