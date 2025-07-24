// src/components/Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import WhatsAppFloat from "./WhatsAppFloat";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  showSection: (section: string) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  activeSection,
  showSection,
}) => {
  return (
    <div className="bg-gray-50">
      <WhatsAppFloat />
      <Navbar activeSection={activeSection} showSection={showSection} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
