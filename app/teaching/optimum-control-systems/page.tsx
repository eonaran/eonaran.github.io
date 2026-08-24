import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optimum Control Systems | Efe Onaran",
  description: "Course information and syllabus for ECE 553 / MATH 595 at the University of Illinois Urbana–Champaign.",
  alternates: {
    canonical: "/teaching/optimum-control-systems/",
  },
};

export default function OptimumControlSystemsPage() {
  return (
    <>
      <a className="skip-link" href="#course-content">Skip to content</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="site-name" href="/#home">Efe Onaran</a>
          <nav aria-label="Main navigation">
            <a href="/#home">Home</a>
            <a href="/efe-onaran-cv.pdf" target="_blank" rel="noreferrer">CV</a>
            <a href="/#papers">Papers</a>
            <a href="/#talks">Talks</a>
            <a href="/#research">Research</a>
            <a href="/#teaching">Teaching</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="page-shell course-page" id="course-content">
        <a className="back-link" href="/#teaching">← Back to teaching</a>

        <article>
          <h1>Optimum Control Systems</h1>
          <p className="course-code">ECE 553 · MATH 595 · Spring 2024</p>

          <h2>Course information</h2>
          <dl className="course-details">
            <div>
              <dt>Instructor</dt>
              <dd>Efe Onaran · <a href="mailto:eonaran@illinois.edu">eonaran@illinois.edu</a></dd>
            </div>
            <div>
              <dt>Office</dt>
              <dd>164 Coordinated Science Laboratory</dd>
            </div>
            <div>
              <dt>Office hour</dt>
              <dd>Tuesday, 3:30–4:30 p.m.</dd>
            </div>
            <div>
              <dt>Teaching assistant</dt>
              <dd>Erkan Bayram · <a href="mailto:ebayram2@illinois.edu">ebayram2@illinois.edu</a></dd>
            </div>
            <div>
              <dt>TA office</dt>
              <dd>157 Coordinated Science Laboratory</dd>
            </div>
            <div>
              <dt>Lectures</dt>
              <dd>Tuesday and Thursday, 2:00–3:20 p.m. · 4070 ECE Building</dd>
            </div>
          </dl>

          <p><a href="https://piazza.com/illinois/spring2024/ece553math595" target="_blank" rel="noreferrer">Course Piazza page</a></p>

          <h2>Syllabus</h2>
          <p>
            <a className="document-link" href="/optimum-control-systems-syllabus.pdf" target="_blank" rel="noreferrer">View the ECE 553 / MATH 595 syllabus (PDF)</a>
          </p>
        </article>
      </main>

      <footer>
        <p>© 2026 Efe Onaran</p>
      </footer>
    </>
  );
}
