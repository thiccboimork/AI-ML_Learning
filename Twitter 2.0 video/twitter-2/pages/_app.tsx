import { SessionProvider } from 'next-auth/react';
import './globals.css'; // Move your global CSS import here
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps: {session, ...pageProps} }: any) {
  return (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp;
