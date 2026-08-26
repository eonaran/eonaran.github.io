"use client";

import type { MouseEvent } from "react";

const sections = [
  ["Papers", "papers"],
  ["Talks", "talks"],
  ["Research", "research"],
  ["Teaching", "teaching"],
  ["Contact", "contact"],
] as const;

function jumpToSection(event: MouseEvent<HTMLAnchorElement>, sectionId: string) {
  event.preventDefault();

  const section = document.getElementById(sectionId);
  if (!section) return;

  section.scrollIntoView({ behavior: "auto", block: "start" });
  window.history.pushState(null, "", `#${sectionId}`);
}

export function SectionNavigation() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="site-name" href="#home" onClick={(event) => jumpToSection(event, "home")}>
          Efe Onaran
        </a>
        <nav aria-label="Main navigation">
          <a href="#home" onClick={(event) => jumpToSection(event, "home")}>Home</a>
          <a href="/efe-onaran-cv.pdf" target="_blank" rel="noreferrer">CV</a>
          {sections.map(([label, sectionId]) => (
            <a
              href={`#${sectionId}`}
              key={sectionId}
              onClick={(event) => jumpToSection(event, sectionId)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
