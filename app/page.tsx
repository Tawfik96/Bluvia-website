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
        <link rel="icon" href="/favicon.ico" />
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
