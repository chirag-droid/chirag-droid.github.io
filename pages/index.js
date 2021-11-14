import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/Home';
import Languages from '../components/Languages'
import Skills from '../components/Skills';
// import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function Index() {
  return (
    <>
    <Head>
      <title>Chirag</title>
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="title" content="Chirag Singla | Student, Software Enthusiast" />
      <meta name="description" content="myself Chirag Singla, student, software enthusiast. Knows Java, Python, Javascript, Rust." />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Chirag Singla" />
      <meta property="og:description" content="myself Chirag Singla, student, software enthusiast. Knows Java, Python, Javascript, Rust." />
      <meta property="og:image" content="/meta.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Chirag Singla" />
      <meta property="twitter:description" content="myself Chirag Singla, student, software enthusiast. Knows Java, Python, Javascript, Rust." />
      <meta property="twitter:image" content="/meta.png" />
    </Head>
    <Header />
    <Home />
    <Languages />
    <Skills />
    {/* <Projects /> */}
    <Contact />
    <Footer/>
    </>
  )
}