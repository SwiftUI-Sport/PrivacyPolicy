import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import TableOfContents from "./components/TableOfContents";
import BackToTopButton from "./components/BackToTopButton";
import { policyData } from "./PolicyData";

function App() {
  const [lastUpdated] = useState(
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-4 font-sans text-light-readable">
          Privacy Policy
        </h1>

       {/* ——— NEW TEAM CREDITS BANNER AS LIST ——— */}
<div className="mb-6">
  <p className="text-lg font-semibold mb-2">
    Crafted with ❤️ by our unstoppable Runday squad:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>
      <a
        href="https://www.linkedin.com/in/alianr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Ali An Nuur
      </a>
    </li>
        <li>
      <a
        href="https://www.linkedin.com/in/muhammmadabidd"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Muhammad Abid
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/michaelsetiawaann"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Michael Setiawan
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/tuffahati"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Tuffahati Sholihah
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/djievalenciasantoso"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Djie Valencia Santoso
      </a>
    </li>
  </ul>
</div>


        <p className="mb-8 text-light-secondary">Last Updated: {lastUpdated}</p>

        <div className="lg:flex lg:space-x-8">
          <aside className="lg:w-1/4 mb-8 lg:mb-0">
            <TableOfContents
              sections={policyData}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </aside>
          <div className="lg:w-3/4">
            {policyData.map((section, index) => (
              <Accordion
                key={index}
                id={section.id}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
