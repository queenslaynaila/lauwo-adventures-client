import Head from 'next/head';
import PageLayOut from '../components/PageLayOut';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lauwo Adventures</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageLayOut />
      </main>
    </>
  );
}
