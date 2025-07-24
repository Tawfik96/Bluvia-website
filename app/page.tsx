"use client";
import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";
import Layout from "./components/Layout";
import HomeSection from "./components/Home";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  const showSection = (sectionName: string) => {
    setActiveSection(sectionName);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Head>
        <title>Bluvia - Industrial Water Waste Solutions</title>
        <meta
          name="description"
          content="Revolutionary industrial water waste solutions"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Layout activeSection={activeSection} showSection={showSection}>
        {activeSection === "home" && <HomeSection showSection={showSection} />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "contact" && <ContactSection />}
      </Layout>
    </div>
  );
};

export default Home;
