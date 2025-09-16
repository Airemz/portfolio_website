// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Sadiq Rahman - Computer Engineering Student</title>
        <meta name="description" content="Portfolio of Sadiq Rahman, Computer Engineering student at the University of Waterloo. Explore my projects, skills, and research interests in software development and holographic systems." />
        <meta name="keywords" content="Sadiq Rahman, Portfolio, Computer Engineering, Software Developer, University of Waterloo, Holographic Systems, Nanofabrication" />
        <meta name="author" content="Sadiq Rahman" />

       {/* Social Sharing */}
        <meta property="og:title" content="Sadiq Rahman - Portfolio" />
        <meta property="og:description" content="Portfolio of Sadiq Rahman. Projects, skills, and experience in software development and research." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sadiq Rahman - Portfolio" />
        <meta name="twitter:description" content="Explore my projects, experience, and research in software and holographic systems." />
       
       
        {/* Canonical + Robots */}
        <link rel="canonical" href="https://yoursite.com" />
        <meta name="robots" content="index, follow" />

        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sadiq Rahman",
            "url": "https://yoursite.com",
            "sameAs": [
              "https://github.com/Airemz",
              "https://www.linkedin.com/in/sadiq-r",
            ],
            "jobTitle": "Computer Engineering Student",
            "description": "Portfolio of Sadiq Rahman, Computer Engineering student at the University of Waterloo. Projects, skills, and research in software and holography."
          }
        `}</script>
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          {/* <Certifications /> */}
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;