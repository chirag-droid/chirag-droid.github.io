import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/Home';
import Languages from '../components/Languages'
import Skills from '../components/Skills';
import Career from '../components/Career';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <>
    <Head>
      <title>Chirag</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content="Chirag Singla" />
      <meta name="description" content="myself Chirag Singla, student, software enthusiast. Knows Java, Python, Javascript, Rust." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://localhost:8080/" />
      <meta property="og:title" content="Chirag Singla" />
      <meta property="og:description" content="myself Chirag Singla, student, software enthusiast. Knows Java, Python, Javascript, Rust." />
      <meta property="og:image" content="/meta.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://localhost:8080/" />
      <meta property="twitter:title" content="Chirag Singla" />
      <meta property="twitter:description" content="myself Chirag Singla, student, software enthusiast. Knows Java, Python, Javascript, Rust." />
      <meta property="twitter:image" content="/meta.png" />
    </Head>
    <Header />
    <Home />
    <Languages />
    <Skills />
    <Career />
    <Footer/>
    </>
  )
}